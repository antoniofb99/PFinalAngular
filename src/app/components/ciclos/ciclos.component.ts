import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturaServicesService } from 'src/app/services/asignatura-services.service';
import { CiclosServicesService } from 'src/app/services/ciclos-services.service';
import { asignatura } from 'src/app/utils/asignatura';
import { ciclo } from 'src/app/utils/ciclos';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  asignaturas: asignatura[] = []
  asignaturaFiltradaDam: asignatura[] = []
  asignaturaFiltradaDaw: asignatura[] = []
  ciclos : ciclo [] =[]

  constructor(private ServicioAsignaturas: AsignaturaServicesService , private ServicioCiclos : CiclosServicesService, private navegador:Router) {
    this.asignaturas = ServicioAsignaturas.getAllAsignaturas();
    this.asignaturaFiltradaDam = ServicioAsignaturas.getAsignaturasDam();
    this.asignaturaFiltradaDaw = ServicioAsignaturas.getAsignaturasDaw();
    
    this.ciclos=ServicioCiclos.getAllCiclos();
  }
  ngOnInit(): void {

  }

 


  

  




}
