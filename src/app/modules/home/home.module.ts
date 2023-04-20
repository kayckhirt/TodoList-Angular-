import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    ToDoListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
