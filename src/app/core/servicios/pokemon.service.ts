import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Pokemon } from "../modelos/pokemon.model";

@Injectable({
    providedIn: 'root'
  })
  
  export class PokemonService {
    urlModulo: string = environment.urlAPI;
    constructor(private http: HttpClient) {
    console.log('Servicio HTTP');
  }

  httpOptions2 = {
    headers: new HttpHeaders({
      "mimeType": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    })
  };

  loadPokemon(index:any): Observable<Pokemon[]>{
    return this.http.get<any>(this.urlModulo+index, this.httpOptions2);
  }
}