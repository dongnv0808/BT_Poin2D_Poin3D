import { Poin3D } from "./poin3d";

let poin3d = new Poin3D(5, 10, 20);
console.log(poin3d);
console.log(poin3d.getXYZ());
poin3d.setXYZ(20, 10, 5);
console.log(poin3d.getXYZ());