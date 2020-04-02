# space-letters-test

> Insert spaces into a string

Follow this project's author, [Phil Swartz](https://github.com/pswartz66), for updates on this project and others.

## Install 

Install with [npm](https://www.npmjs.com/):

```sh
npm install space-letters-test
```

## Usage
```sh
const spacing = require('space-letters-test');
```

```sh
const myString = 'Oh what a wonderful place!';

console.log(spacing(1, myString));
output: O h   w h a t   a   w o n d e r f u l   p l a c e !
```

```sh
console.log(spacing(2, myString));
output: O  h     w  h  a  t     a     w  o  n  d  e  r  f  u  l     p  l  a  c  e  !
```
