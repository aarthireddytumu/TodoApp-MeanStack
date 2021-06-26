import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [ { path:'task', component:TaskComponent},
    { path:'addtodo', component: AddtodoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
