import { Component, OnInit} from '@angular/core';
import { ContentService } from '../content.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public conteudos

  constructor(private contentService: ContentService) {}

  async ionViewWillEnter(){
    this.conteudos = await this.contentService.listaConteudos()
  }

}
