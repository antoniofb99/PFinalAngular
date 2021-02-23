import { conocimientos } from "./conocimientos";

export interface asignatura

{
    nombre:string,
    profesor: string,
    conocimientos :conocimientos[],
    ciclo: string,
    curso: number,
  }