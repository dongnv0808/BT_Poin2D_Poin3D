"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poin2D = void 0;
class Poin2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get X() {
        return this.x;
    }
    set X(x) {
        this.x = x;
    }
    get Y() {
        return this.y;
    }
    set Y(y) {
        this.y = y;
    }
    get XY() {
        return { x: this.x, y: this.y };
    }
    setXY(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Poin2D = Poin2D;
