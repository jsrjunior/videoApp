import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dados: any = [];

  constructor() { }

  setDados(index: string, dados: any): boolean
  {
    if(index){
      this.dados[index] = dados;
      return true;
    }else{
      return false;
    }
  }

  getDados(index: string): any {
    if(index){
      return this.dados[index];
    }else{
      return null;
    }
  }

  deelteDados(index: string): boolean {
      return delete this.dados[index];
  }

}
