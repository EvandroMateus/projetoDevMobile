import { Component, OnInit } from '@angular/core';
import { ContInfoService } from './cont-info.service';

@Component({
  selector: 'app-artigos-list',
  templateUrl: 'artigos-list.component.html',
})
export class ArtigosListComponent implements OnInit{

  public artigos;

  constructor(private contInfoService: ContInfoService){}

  ngOnInit(){
    this.artigos = this.contInfoService.pegarTodosConteudos();
  }
}