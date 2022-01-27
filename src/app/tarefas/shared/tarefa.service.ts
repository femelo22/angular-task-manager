import { Injectable } from '@angular/core';

import { Tarefa } from '.';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTarefas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTarefas();
    tarefa.id = Math.random();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }





}
