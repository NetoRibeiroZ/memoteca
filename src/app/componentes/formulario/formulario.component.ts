import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

pensamento ={
  id: '1',
  conteudo:'Aprendendo Angular',
  autoria:'Dev',
  modelo:'modelo1',
  value:''
}

  constructor() { }

  ngOnInit(): void {

  }
  criarPensamento(){
    alert('novo pensamento criado');
  }
  cancelar(){
  }
}
