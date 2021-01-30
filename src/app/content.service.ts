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

    async listaConteudos(){
        let conteudos = []
        await this.storage.forEach((value, key) => {
            const conteudo = JSON.parse(value)
            conteudos.push(conteudo)
        })
        return conteudos
    }

}