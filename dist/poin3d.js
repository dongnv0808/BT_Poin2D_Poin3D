"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poin3D = void 0;
const poin2d_1 = require("./poin2d");
class Poin3D extends poin2d_1.Poin2D {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    getZ() {
        return this.z;
    }
    setZ(z) {
        this.z = z;
    }
    getXYZ() {
        return { x: super.X, y: super.Y, z: this.z };
    }
    setXYZ(x, y, z) {
        this.X = x;
        this.Y = y;
        this.z = z;
    }
}
exports.Poin3D = Poin3D;
