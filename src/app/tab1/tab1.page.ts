import { Component, OnInit} from '@angular/core';
import { ContentService } from '../content.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  public artigos;

  constructor(private contentService: ContentService) {}

  ngOnInit(){
    const toggle = document.querySelector('#themeToggle');
    toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark', (<any>ev).detail.
      checked);
    })
  }

  async ionViewWillEnter(){
    this.artigos = await this.contentService.listaArtigos()
  }

}
