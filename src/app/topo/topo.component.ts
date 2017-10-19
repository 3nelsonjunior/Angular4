import { Component } from '@angular/core' //importando recursos do node_modules

@Component({
    selector:'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    //data binding
    //classe: criandor atributo para interpolação(para inserção no template)
    public titulo: string = 'Aprendendo Inglês'    
} 