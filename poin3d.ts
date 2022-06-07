import { Poin2D } from "./poin2d";

export class Poin3D extends Poin2D{
    private z: number;
    constructor(x: number, y: number, z: number){
        super(x, y);
        this.z = z;
    }
    public getZ(): number{
        return this.z;
    }
    public setZ(z: number): void{
        this.z = z;
    }
    public getXYZ(): object{
        return {x: super.X, y: super.Y, z: this.z};
    }
    public setXYZ(x: number, y: number, z: number): void{
        this.X = x;
        this.Y = y;
        this.z = z;
    }
}