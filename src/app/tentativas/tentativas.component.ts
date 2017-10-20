import { Component, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  /*  property binding - atributo do HTML controlado pela classe */
  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'
  
  //atributo coracoes, será um array de corações
  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]
  
  constructor() { 
    console.log(this.coracoes)
  }

  ngOnInit() {
  }

}
