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
  public resposta: string = '' //para o text area inciar vazio

  //variaver para armazenar a rodada atual
  public rodada: number = 0;
  //variavel para armazenar Frase atual
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    //inicializando objeto com a primeira frase
    this.atualizaRodada()
    //console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  //função para evento ao digitar no textarea
  public atualizaResposta(resposta: Event): void{
    // event binding - pegando dados do HTML via entrada de dados do usuario
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  //verificar resposta
  public verificarResposta(): void{
    
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('Tradução CORRETA!!!')
      //troca pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)   // porcentagem / de acordo com numero de resposta total       
            
      //atualiza o objeto rodada frase
      this.atualizaRodada()

      

    } else{
      alert('Tradução INCORRETA!!!')
    }
  }

  public atualizaRodada(): void{
    //define a frase da rodada com base e alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    // no HTML esta definido o [value] como two-way data binding 
    this.resposta = ''
    
  }
}
