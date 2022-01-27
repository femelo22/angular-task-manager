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

  buscarTarefaPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTarefas();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizarTarefa(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTarefas();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  removerTarefa(id: number): void {
    let tarefas: Tarefa[] = this.listarTarefas();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }


  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTarefas();
    tarefas.forEach((obj, index, objs) => {
      if(id == obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
