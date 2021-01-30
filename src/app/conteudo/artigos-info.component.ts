import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ContInfoService } from './cont-info.service';

@Component({
  selector: 'app-artigos-info',
  templateUrl: 'artigos-info.component.html',
})

export class ArtigosInfoComponent implements OnInit{

  public artigo;
  
  constructor(private activatedRoute: ActivatedRoute, private contInfoService:ContInfoService){}

  ngOnInit(){
      const id = this.activatedRoute.snapshot.paramMap.get('id');

      this.artigo = this.contInfoService.pegarConteudoPorId(id);
  }
  
  
}