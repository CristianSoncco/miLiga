import { Component, OnInit } from '@angular/core';
import { Jugador } from '../_interface/jugador';
import * as JUGADORES from 'src/assets/data/jugadores.json'
import * as EQUIPOS from 'src/assets/data/equipos.json'

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
  nombre:string='Novatos';
  estatus:boolean=false;
  // jugador:string='Desconocido';

  jugadores:Jugador[] = [];

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
    this.jugadores = JUGADORES.default as any;
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
