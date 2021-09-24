import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../sericos/tarefa.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edita-tarefa',
  templateUrl: './edita-tarefa.page.html',
  styleUrls: ['./edita-tarefa.page.scss'],
})
export class EditaTarefaPage implements OnInit {
  nome: string;
  descricao: string;

  constructor(private service: TarefaService, private nav: NavController) { }

  ngOnInit() {
  }
  cadastrar (){

    let tarefa = {}; 
    tarefa['nome'] = this.nome;
    tarefa['descricao'] = this.descricao;

    this.service.incluir(tarefa);
    this.nav.navigateForward("tarefas");
  }

}
