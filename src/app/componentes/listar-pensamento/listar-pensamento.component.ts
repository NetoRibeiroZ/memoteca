import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
listaPensamento = [
  {
    conteudo:'asdasd',
    autoria:'Net',
    modelo:'modelo2',
  },
  {
    conteudo:'asdasdasdasd sdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
    autoria:'Net',
    modelo:'modelo1',
  },
  {
    conteudo:'asd',
    autoria:'Net',
    modelo:'modelo3',
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
