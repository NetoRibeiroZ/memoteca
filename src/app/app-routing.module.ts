import { ListarPensamentoComponent } from './componentes/listar-pensamento/listar-pensamento.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPensamentoComponent } from './componentes/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/editar-pensamento/editar-pensamento.component';

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

  },
  {
    path: 'excluir-pensamento/:id',
    component:ExcluirPensamentoComponent

  },
  {
    path: 'editar-pensamento/:id',
    component:EditarPensamentoComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
