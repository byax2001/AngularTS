// Se puede crear a través de Angular Schemas
// ng generate service services/data
// y tambien a mano, en este caso para crear un servicio base se usara el siguiente comando
// ============ a-service + tab ============
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private router: Router) { }
  public tagHistory:number[]=[2,2,2,3]
  get tagHistoryAll(){
    return this.tagHistory
  }
  addTagHistory(tag:number){
    this.tagHistory.push(tag)
  }





}

