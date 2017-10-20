import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //após declarar Input no import, classicar como abaixo
  //para importar informações do componente externo -> componente pai(Painel) chamado progresso
  @Input() public progresso: number = 0


  constructor() { }

  ngOnInit() {
  }

}
