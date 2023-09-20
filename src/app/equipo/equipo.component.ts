import { Component, OnInit } from '@angular/core';
import { Jugador } from '../_interface/jugador';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
  nombre:string='Novatos';
  estatus:boolean=false;
  // jugador:string='Desconocido';
  jugador:Jugador={
    nombre:'Sergio',
    edad:35,
    apodo:'Apodiño',
    foto:'imagen.jpg',
    posicion:'Delantero',
    estado:false
  }


  constructor(){}
  ngOnInit(): void {
    this.nombre='Piratas';
  }

  agregarJugador(){
    let jugador = 'Sergio';
    jugador ='Iván';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(event:any){
    this.jugador.estado = event;
  }
}
