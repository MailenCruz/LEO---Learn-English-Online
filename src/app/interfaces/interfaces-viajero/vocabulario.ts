import { Palabras } from "./palabras";

export interface Vocabulario{
    [categoria:string]:Palabras[];
}