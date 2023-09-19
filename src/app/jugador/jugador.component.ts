import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit{

  @Input('nombre')
  jugador:string='Sergio';
  @Input()
  equipoNombre:string='Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor(){}

  ngOnInit()
  {}

  activarJugador(){
    this.estado.emit(true);
  }

}

