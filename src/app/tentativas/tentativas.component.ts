import { Component, OnInit, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  
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

  //método do clico de vida do componente
  ngOnInit() {
    console.log('tentativas recebida do painel.: ', this.tentativas)
  }

}
