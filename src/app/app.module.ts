import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component'; //criado durante a aula

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent, //criado durante a aula
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
