import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AsignaturaServicesService } from 'src/app/services/asignatura-services.service';
import { asignatura } from 'src/app/utils/asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {


  asignaturas: asignatura[] = []
  longitud: number = 0;
  constructor(private servicioasignatura: AsignaturaServicesService) {
    this.asignaturas = servicioasignatura.getAllAsignaturas();
    this.longitud = this.asignaturas.length;

  }

  ngOnInit(): void {
  }


  filtrarAsignaturas(nombre: string, ciclo: string, conocimiento: string) {
    if (nombre.length > 0 && ciclo.length > 0 && conocimiento.length > 0) {

      this.asignaturas = this.servicioasignatura.getAllAsignaturas();
      this.asignaturas = this.asignaturas.filter((element) =>
        element.nombre == nombre && element.ciclo.includes(ciclo) && element.conocimientos.filter(d => d.nombre == conocimiento)

      )
      console.log(this.asignaturas.length)



    } else if (nombre.length > 0 && ciclo.length > 0) {
      this.asignaturas = this.servicioasignatura.getAllAsignaturas();
      this.asignaturas = this.asignaturas.filter((element) =>
      element.nombre == nombre && element.ciclo.includes(ciclo)
      )





    } else if (nombre.length > 0 && conocimiento.length > 0) {
      this.asignaturas = this.servicioasignatura.getAllAsignaturas();
      this.asignaturas = this.asignaturas.filter((element) =>
        element.nombre == nombre && element.conocimientos.filter(d => d.nombre == conocimiento)


      )


    } else if (ciclo.length > 0 && conocimiento.length > 0) {
      this.asignaturas = this.servicioasignatura.getAllAsignaturas();
      this.asignaturas = this.asignaturas.filter((element) =>
        element.ciclo.includes(ciclo) && element.conocimientos.filter(d => d.nombre == conocimiento)

      )



    } else if (nombre.length > 0) {

      this.asignaturas = this.servicioasignatura.getAllAsignaturas();

      this.asignaturas = this.asignaturas.filter((element) => element.nombre == nombre

      )



    } else if (ciclo.length > 0) {
      this.asignaturas = this.servicioasignatura.getAllAsignaturas();
      this.asignaturas = this.asignaturas.filter((element) => element.ciclo.includes(ciclo)

      )



    } else if (conocimiento.length>0) {

      console.log(conocimiento)
      this.asignaturas = this.servicioasignatura.getAllAsignaturas();
      this.asignaturas = this.asignaturas.filter((element) => element.conocimientos.filter(d => d.nombre==conocimiento).length>0
      )

    }

  }
}
