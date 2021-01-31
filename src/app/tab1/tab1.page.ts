import { Component} from '@angular/core';
import { ContentService } from '../content.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public artigos

  constructor(private contentService: ContentService) {}

  async ionViewWillEnter(){
    this.contentService.listaArtigos().then(artigos => {
      this.artigos = artigos
    })
  }

  async removerArtigo(id){
    await this.contentService.removerConteudo(id)
    this.artigos = await this.contentService.listaArtigos()
  }

}
