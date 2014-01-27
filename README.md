## fis-optimizer-php-template-compress

### install

```bash
$ npm install -g fis-optimizer-php-template-compress
```

### config

```javascript
fis.config.merge({
    modules: {
        optimizer: {
            php: 'php-template-compress'
        }
    },
    settings: {
        optimizer: {
            'php-template-compress': {
                level: 'strip'; //strip、strip_comment、strip_space; defualt `strip`
            }
        }
    }
});
```
