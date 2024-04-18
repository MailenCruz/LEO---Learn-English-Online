import { Completar } from "./completar";
import { Reescribir } from "./reescribir";

export interface NivelGramatica{
    reescribir: Reescribir[];
    completar: Completar[];
    ordenar: string[];
}