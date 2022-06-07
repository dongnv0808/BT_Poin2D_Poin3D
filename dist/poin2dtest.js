"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const poin2d_1 = require("./poin2d");
let poin2d = new poin2d_1.Poin2D(5, 10);
console.log(poin2d);
console.log(poin2d.XY);
poin2d.setXY(10, 5);
console.log(poin2d.XY);
