import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//   private tasks=[{task:"Wake Up at 8.00PM", status:"Completed"},
//   {task:"Login MS TEAMS 8.30PM", status:"Completed"},
//   {task:"Give Attendance in LKM",status:"Completed"},
//   {task:"Fill MyTE",status:"To be Completed"},
//   {task:"Daily Tech Activity",status:"To be Completed"}  
// ]
// activity(){
//   return this.tasks;
// }
// addTask(extraTask: any): void{
//   this.tasks.push(extraTask)
//   console.log(this.tasks)
// }
  constructor(private http: HttpClient) { }
  activity(): Observable<any>{
    //return this.http.get('http://localhost:3000/tasks')
    return this.http.get('http://localhost:3000/todo')
  }
  addTask(extraTask):Observable<any> {
    console.log(extraTask)
    //return this.http.post('http://localhost:3000/tasks',extraTask)
    return this.http.post(`http://localhost:3000/todo/${extraTask.task}/${extraTask.status}`,extraTask)
  }
  updateTask(updateTask):Observable<any> {
    console.log(updateTask);
    return this.http.put(`http://localhost:3000/todo/${updateTask.id}/${updateTask.task}/${updateTask.status}`,updateTask)
  }
  delTask(delTask):Observable<any> {
    console.log(delTask)
    return this.http.delete(`http://localhost:3000/todo/${delTask.id}`,delTask)
  }
}
