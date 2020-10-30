# Minimal ES5

Trying to build a working ES5 setup to continue support for IE11.

Steps to reproduce:
- `git clone` this repository
- `yarn`
- `yarn run build-library`
- `yarn run es-check es5 dist/scripts.js`

There is an error via the ES-Check module:

```
          ----
          · erroring file: dist/scripts.js
          · error: SyntaxError: Unexpected token (2:2)
          · see the printed err.stack below for context
          ----

          SyntaxError: Unexpected token (2:2)
```

Inside the `dist/scripts.js` file, at the start of line 2, there is an arrow function: `(()=>{var t=`

So this setup is not correctly transpiling arrow functions for IE11 support.

