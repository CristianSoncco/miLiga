import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
  nombre:string='Novatos';
  estatus:boolean=false;
  jugador:string='Desconocido';
  constructor(){}
  ngOnInit(): void {
    this.nombre='Piratas';
  }

  agregarJugador(){
    let jugador = 'Sergio';
    jugador ='Iván';

    this.jugador = jugador;
  }

  actualizarEstado(event:any){
    this.estatus = event;
  }
}
