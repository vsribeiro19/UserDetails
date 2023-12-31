import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { DetalhesClientesComponent } from './detalhes-clientes/detalhes-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    DetalhesClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
