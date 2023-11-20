import { Ejercicio } from "./ejercicio";
import { Pregunta } from "./pregunta";
import { Vocabulario } from "./vocabulario";

export interface Shopping{
    vocabulario: Vocabulario;
    ejercicios:Ejercicio[];
    preguntas:Pregunta[];
}
