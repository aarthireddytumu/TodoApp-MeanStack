import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  // submit(todoform : any) : void{
  //   this.todoService.addTask(todoform);
  // }
  extraTask;
  submit(todoform:any): void{
    todoform.created=new Date();
    this.todoService.addTask(todoform).subscribe(res => console.log(res));
  }
}
