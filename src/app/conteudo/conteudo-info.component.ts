import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-conteudo-info',
  templateUrl: 'conteudo-info.component.html',
})

export class ConteudoInfoComponent implements OnInit{

  private id = String;

  private conteudo = {
    id: null,
    titulo: null,
    autor: null,
    tema: null,
    texto: null,
    tipo: null
  };
  
  constructor(private activatedRoute: ActivatedRoute, private contentService:ContentService, private router: Router){}

  ngOnInit(){
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.contentService.pegarConteudoPorId(id).then(conteudo => {
        if(conteudo == null){
          this.router.navigate(['/'])
        }
        this.conteudo = conteudo;
      });
    
  }
}