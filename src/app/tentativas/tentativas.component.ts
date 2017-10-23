import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  
  @Input()public tentativas: number

  //atributo coracoes, será um array de corações
  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]
  
  constructor() { 
    console.log(this.coracoes)
    
  }


  //método do clico de vida do componente]
  /* Executado durante o processo de decoração dos valores recebidos do compenentes pai para o filho,
     ou seja, no momento de input dos dados, ao alterar valores dos métodos, ele tbm é
     alterado*/ 
  ngOnChanges(){
    console.log('tentativas recebida do painel.: ', this.tentativas)
  }

  ngOnInit() {
    
  }

}
