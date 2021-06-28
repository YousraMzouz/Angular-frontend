//il s'agit d' un service

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Injection des dependance

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: string ="http://localhost:8080" ;

  constructor(private http: HttpClient) { }

  public getResource(url: string){
    return this.http.get(this.host +url);
    
    }
    
  }

