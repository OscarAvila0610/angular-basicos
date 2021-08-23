import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

    
  private _personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },

    {
      nombre: 'Vegeta',
      poder: 14000  
    }
  ];

  get personajes(): Personaje[] {
      return [...this._personajes];//romper la referencia con los personajes originales para que no se puedan manipular
  }
  
    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}