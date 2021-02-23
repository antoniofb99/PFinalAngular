import { Injectable } from '@angular/core';
import { ciclo } from '../utils/ciclos';

@Injectable({
  providedIn: 'root'
})
export class CiclosServicesService {

  ciclos: ciclo[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },


  ]

  constructor() { }

  cicloDetalle: ciclo[] = []

  getAllCiclos(): ciclo[] {

    return this.ciclos;
  }


  getCicloDetalle(curso: number, nombre: string): ciclo[] {
    this.cicloDetalle.splice(0, this.cicloDetalle.length)
    this.ciclos.forEach((ciclo) => {
      if (ciclo.curso == curso && ciclo.nombre.includes(nombre)) {
        this.cicloDetalle.push(ciclo)
      }
    });

    return this.cicloDetalle
  }
}
