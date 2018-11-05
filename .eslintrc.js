module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "amd": true,
        "mocha": true,
    },
    "extends": ["airbnb", "eslint:recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import"
    ],
    settings: {
      'import/resolver': {
        'webpack': {
          'config': './webpack.config.js',
        },
      },
    },
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "no-func-assign": [
            "warn"
        ],
         "no-unused-vars": [
            "warn"
        ],
        "no-console": [
            "warn"
        ],
        "react/prop-types": [
            "warn"
        ],
        "react/jsx-filename-extension": [
            "off"
        ],
        "react/forbid-prop-types": [
            "off"
        ],
    }
};