import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { v4 as uuidv4 } from 'uuid'

@Injectable({
    providedIn: 'root'
})

export class ContentService{
    constructor(private storage: Storage){}

    private conteudos = [];
    
    
    salvarConteudo(conteudo){
        conteudo.id = uuidv4()
        this.storage.set(conteudo.id, JSON.stringify(conteudo))
    }

    async listaArtigos(){
        let artigos = []
        await this.storage.forEach((value, key) => {
            const conteudo = JSON.parse(value)
            if(conteudo.tipo == 'artigo'){
            artigos.push(conteudo)
            }
        })
        return artigos
    }

    async listaNoticias(){
        let noticias = []
        await this.storage.forEach((value, key) => {
            const conteudo = JSON.parse(value)
            if(conteudo.tipo == 'noticia'){
            noticias.push(conteudo)
            }
        })
        return noticias
    }

    //SELECT ALL (Read)
    async pegarTodosConteudos(){
        let conteudos = []; //vetor conteudos criado
        await this.storage.forEach((conteudoString) => { //acesso ao Storage, para cada item
           const conteudo = JSON.parse(conteudoString); //transformado em String
            conteudos.push(conteudo); //adcionado em objeto JS no vetor
        });

        return conteudos;
    }

    //SELECT ONE (Read)
    async pegarConteudoPorId(idConteudo) {
        const conteudoString = await this.storage.get(idConteudo);
        return JSON.parse(conteudoString);
    }
    
    /*
    pegarConteudoPorId(idConteudo){
        let conteudos = null;
    
        for(let i=0; i < this.conteudos.length; i++){
    
          if(this.conteudos[i].id == idConteudo){
    
          conteudos = this.conteudos[i];
            
          break; //parar a interação do FOR
          }
        }
        return conteudos;
      }*/

}