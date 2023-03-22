import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

pensamento: Pensamento ={
  conteudo:'Aprendendo Angular',
  autoria:'Dev',
  modelo:'modelo1',

}

  constructor(private service: PensamentoService,private router: Router) { }

  ngOnInit(): void {

  }
  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/mostrarMural'])
    })

  }
  cancelar(){
    this.router.navigate(['/mostrarMural'])
  }
}
