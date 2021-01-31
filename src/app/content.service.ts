import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { v4 as uuidv4 } from 'uuid'

@Injectable({
    providedIn: 'root'
})

export class ContentService{
    constructor(private storage: Storage){}

    private conteudos = []

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

    async removerConteudo(id){
        await this.storage.remove(id)
    }

}