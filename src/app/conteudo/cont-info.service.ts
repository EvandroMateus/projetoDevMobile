import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContInfoService {
  
  private artigos = [{
    id: 1,
    nome: 'JavaScript News',
    autor: 'natan',
    publicado: '28 Jan 2021',
    tema: 'J.S',
    desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
  },
  {
    id: 2,
    nome: 'PHP News',
    autor: 'evandro',
    publicado: '29 Fev 2022',
    tema: 'P.H.P',
    desc: 'loremP loremP loremP loremP loremP loremP loremP loremP loremP loremP'
  },
  {
    id: 3,
    nome: 'CSS News',
    autor: 'LU',
    publicado: '30 jan 2023',
    tema: 'C>S>S',
    desc: 'loremP loremP loremP loremP loremP loremP loremP loremP loremP loremP'
  }

  ];

  constructor() { }

  pegarTodosConteudos(){
    return this.artigos;
  }

  pegarConteudoPorId(idConteudo){
    let artigo = null;

    for(let i=0; i< this.artigos.length; i++){

      if(this.artigos[i].id == idConteudo){

      artigo = this.artigos[i];

      }
    }
    return artigo;
  }
}
