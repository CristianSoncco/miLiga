import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../_interface/jugador';





@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http:HttpClient) { }

  obtener(){
    return this.http.get('https://localhost:7002/Jugador')
  }

}
