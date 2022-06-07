export class Poin2D{
    private x: number;
    private y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    public get X(): number{
        return this.x;
    }
    public set X(x: number){
        this.x = x;
    }
    public get Y(): number{
        return this.y;
    }
    public set Y(y: number){
        this.y = y;
    }
    public get XY(): object{
        return {x: this.x, y: this.y};
    }
    public setXY (x: number, y: number){
        this.x = x;
        this.y = y;
    }
}