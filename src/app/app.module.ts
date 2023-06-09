import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FormularioComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
