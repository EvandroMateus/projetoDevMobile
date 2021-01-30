import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ContentService } from '../content.service'

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss'],
})
export class ContentAddComponent implements OnInit {

  public conteudo = {}

  constructor(private activatedRoute: ActivatedRoute, private contentService: ContentService, private router: Router) { }

  ngOnInit() {
    
  }

  addConteudo(){
    this.contentService.salvarConteudo(this.conteudo)
    this.router.navigate(['/'])
  }

}