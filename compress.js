var html_compress = require('html-compress');

var exports = module.exports = function(content, file, conf) {
    return compress(content, conf); 
};

exports.defaultOptions = {
    level: 'strip'
};

function compress(content, conf) {
    var split_tag = '<!--FIS_SPLIT_TAG-->';
    var tmp_content = content.replace(/<\?(?:php)?[\s\S]*?\?>/g, function (m) {
        return split_tag + m + split_tag;
    })
    
    var tokens = tmp_content.split(split_tag);
    var res = '';
    for (var i = 0, len = tokens.length; i < len; i++) {
        var section = tokens[i];
        if (section.indexOf('<?php') == 0 || section.indexOf('<?') == 0) {
            //php 代码直接返回
            res += section;
        } else {
            //内嵌html代码进行压缩
            if (section.length > 0) {
                res += html_compress.compress(section.replace(/[\r\n\t]*|[ ]{4}/g, ''), {'level': conf.level});
            }
        }
    }
    
    if (res.length > 0) {
        content = res;
    }

    return content;
}
