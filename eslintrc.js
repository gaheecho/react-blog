const path = require('path');

module.exports = {
    "settings": {
        "import/resolver": {
            node: { paths: [path.resolve('./src')]}
        },
    },
    "parser": "babel-eslint",
    "rules": {
        "no-unused-vars": 1
    }
}