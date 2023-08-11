import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { ViewtodoComponent } from './pages/viewtodo/viewtodo.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full',},
  {path:'home',
  component:HomeComponent,
 title:'home page'},
  {path:'addtodo',
  component:AddTodoComponent,
  title:'addtodo'},
  {path:'updatetodo/:id',
  component:UpdateTodoComponent,
  title:'udpatetodo'
},
  {path:'viewtodo',
  component:ViewtodoComponent,
  title:'viewtodo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
