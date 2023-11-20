import { Ejercicio } from "./ejercicio";
import { Pregunta } from "./pregunta";
import { Vocabulario } from "./vocabulario";

export interface Restaurante{
    vocabulario:Vocabulario;
    ejercicios:Ejercicio[];
    preguntas:Pregunta[];
}