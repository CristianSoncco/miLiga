import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit{

  @Input('nombre')
  jugador:string='Sergio';
  @Input()
  equipoNombre:string='';

  constructor(){}

  ngOnInit()
  {}
}

