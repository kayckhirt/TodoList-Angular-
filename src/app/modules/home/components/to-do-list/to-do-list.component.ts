import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  ngDoCheck() {
    this.setLocalStorage();
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((firts, last) => Number(firts.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public setEmitTaskList(event: string) {
    if (event.length) {
      this.taskList.push({ task: event, checked: false });
    }
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTask() {
    const confirm = window.confirm("Você deseja deletar tudo?");
    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("A Tarefa está vazia, deseja deletar?");
      confirm ? this.deleteItemTaskList(index) : null;
    }
  }

}
