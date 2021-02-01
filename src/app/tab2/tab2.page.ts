import { Component } from '@angular/core';
import { ContentService } from '../content.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public noticias

  constructor(private contentService: ContentService) {}

  
  async ionViewWillEnter(){
    this.noticias = await this.contentService.listaNoticias()
  }

}
