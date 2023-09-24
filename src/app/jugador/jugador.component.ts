import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jugador } from '../_interface/jugador';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit{

  @Input()
  jugador:Jugador={nombre:'sin nombre',edad:33,apodo:'charrito',foto:'madre.jpg',posicion:'CasiDelantero',estado:true};
  //jugador:string='Sergio';
  @Input()
  equipoNombre:string='Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor(){}

  ngOnInit()
  {}

  desactivar() {
    this.estado.emit(false);
  }

}

