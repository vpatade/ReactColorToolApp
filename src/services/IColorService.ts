import { Color } from "../models/Color";

export interface IColorService {
    allColors: () => Promise<Color[]>;
    addColor : (color : Color) => Promise<Color>;
    deleteColor : (id : number) => Promise<void>;
}