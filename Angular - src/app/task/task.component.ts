import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private todoService: TodoService, private httpService: HttpService) { }
  tasks;
  ngOnInit(): void {
    //this.tasks=this.todoService.activity();
    this.todoService.activity().subscribe(data => this.tasks=data)
  }

  updateTask;
  delTask;
  update(updateTask:any,i): void{
    updateTask.created=new Date();
    this.todoService.updateTask(updateTask).subscribe(res => console.log(res), data => this.tasks=data);
    if(this.tasks[i].status=="Not Completed"){
      this.tasks[i].status="Completed"
      this.tasks.push()
    }
    else{
      this.tasks[i].status="Not Completed"
      this.tasks.push()
    }
  }
  delete(delTask:any,i): void{
    delTask.created=new Date();
    this.todoService.delTask(delTask).subscribe(res => console.log(res), data => this.tasks=data);
    this.tasks.splice(i,1);
  }

}
