"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const poin3d_1 = require("./poin3d");
let poin3d = new poin3d_1.Poin3D(5, 10, 20);
console.log(poin3d);
console.log(poin3d.getXYZ());
poin3d.setXYZ(20, 10, 5);
console.log(poin3d.getXYZ());
