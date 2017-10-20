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
  public resposta: string

  //variaver para armazenar a rodada atual
  public rodada: number = 0;
  //variavel para armazenar Frase atual
  public rodadaFrase: Frase

  constructor() { 
    //inicializando objeto com a primeira frase
    this.rodadaFrase = this.frases[this.rodada]    
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  //função para evento ao digitar no textarea
  public atualizaResposta(resposta: Event): void{
    // event binding - pegando dados do HTML via entrada de dados do usuario
    console.log((<HTMLInputElement>resposta.target).value)
    console.log(this.resposta)
  }

  

}
