import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AsignaturaServicesService } from 'src/app/services/asignatura-services.service';
import { CiclosServicesService } from 'src/app/services/ciclos-services.service';
import { asignatura } from 'src/app/utils/asignatura';
import { ciclo } from 'src/app/utils/ciclos';
import { conocimientos } from 'src/app/utils/conocimientos';

@Component({
  selector: 'app-detalleciclo',
  templateUrl: './detalleciclo.component.html',
  styleUrls: ['./detalleciclo.component.css']
})
  export class DetallecicloComponent implements OnInit {
  curso:number=0;
  nombre:string="";  
  asignaturas :asignatura []=[] 
  ciclo :ciclo []=[] 
  conocimientos:conocimientos[]=[]

  constructor(private rutaActiva: ActivatedRoute,private servicioAsignatura:AsignaturaServicesService,servicioCiclo:CiclosServicesService) {

  this.curso=this.rutaActiva.snapshot.params['curso'];
  this.nombre=this.rutaActiva.snapshot.params['nombre']
  this.asignaturas= servicioAsignatura.getAsignarurasDetalle(this.curso,this.nombre);
  this.ciclo=servicioCiclo.getCicloDetalle(this.curso,this.nombre);
  this.conocimientos=servicioAsignatura.getConocimientosDetalle(this.curso,this.nombre)

  

  }

  ngOnInit(): void {

   console.log(this.curso)
  }


  
 

  
  



}
