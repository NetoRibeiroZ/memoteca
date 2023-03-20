import { ListarPensamentoComponent } from './componentes/listar-pensamento/listar-pensamento.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mostrarMural',
    pathMatch:'full'
  },
  {
    path: 'criarPensamento',
    component:FormularioComponent
  },
  {
    path: 'mostrarMural',
    component:ListarPensamentoComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
