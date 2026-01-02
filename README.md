# Node JS

## Internal Package

* fs - untuk berintrak si dengan filesistem
* path - untuk berinteraksi denan path
* http - untuk membuat client server http
* crypto - untuk mneyediakan kebutuhan kriptografi
* dll

## External Package

* Moment - untuk berinteraksi dengan object date
* express - untuk membuat http client
* handlerbar - template engine
* ejs - template engine

## Package Manager

Alternatif bisa pake yarn dan pnpm

## Jenis-Jenis Penginstalan dependensi

* npm install nama-package - untuk pemasangan package
* npm i --save-dev nama-package - untuk pemasangan package yang hanya digunakan dalam masa dependensi
    ** package bisa di uninstall dengan cara npm uninstall nama-package

## Script

* Bisa digunakan untuk menyingkat kode yang panjang. Jadi nantinya tinggal npm run test

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

* Type untuk menandai gaya penulisan nodejs apakah tipenya module atau commonjs

```json
"type": "module"
```

## akses fungsi dari file lain

* import

```js
    module.export [
        // "apa yang mau di import "
    ]
```

* export

```js
    // sama seperti menggunakakn library external
```

* fungsi yang di eksport berupa object jadi bisa dilaukan destructuring

```js
    const {num1, num2} = require("module name")
```
