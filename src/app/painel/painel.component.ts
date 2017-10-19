import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase: '

  constructor() { console.log(this.frases)}

  ngOnInit() {
  }

  //função para evento ao digitar no textarea
  public atualizaResposta(): void{
    console.log('teste')
  }

}
