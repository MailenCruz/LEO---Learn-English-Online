import { Completar } from "./completar";
import { Ordenar } from "./ordenar";
import { Reescribir } from "./reescribir";

export interface NivelGramatica{
    reescribir: Reescribir[];
    completar: Completar[];
    ordenar: Ordenar[];
}