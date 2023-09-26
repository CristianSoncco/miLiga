import { Component, OnInit } from '@angular/core';
import { Jugador } from '../_interface/jugador';
import * as JUGADORES from 'src/assets/data/jugadores.json'
import * as EQUIPOS from 'src/assets/data/equipos.json'
import { Equipo } from '../_interface/equipo';
import { HttpClient} from '@angular/common/http'
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
  equipos:Equipo[] = [];

  jugador:Jugador={
    nombre:'Sergio',
    edad:35,
    apodo:'Apodiño',
    foto:'imagen.jpg',
    posicion:'Delantero',
    estado:false
  }

  step = 0;
  presupuesto = 18000000;
  actualizacion = new Date();
  aficionados = 1500320.2345;
  efectividad = 0.87325767546;

  busqueda = '';
  isLoading=false;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.nombre='Piratas';
    // this.jugadores = JUGADORES.default as any;
    this.equipos = EQUIPOS.default as any;
    this.obtenerJugadores();
    // console.log(this.jugadores);
  }

obtenerJugadores(){
  this.isLoading =true;
  this.http.get('https://localhost:7002/Jugador')
  .subscribe(jugadores =>{
    console.log(jugadores as any);
    this.jugadores=jugadores as Jugador[];
    this.isLoading =false;
  },error=>{
    console.log(error);
  })
}

  agregarJugador(){
    let jugador = 'Sergio';
    jugador ='Iván';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(jugador:Jugador,i:number,event:any){
    jugador.estado = event;
    this.step=i;
  }

  activarJugador(jugador:Jugador){
    jugador.estado=true;
  }

  mostrarDatos(i:number){
    this.step=i;
  }

  obtenerColor(state: boolean){
    let color = 'green'
    if (state) {
      color = 'blue'
    }else {
      color='red'
    }
    return color;
  }

}
