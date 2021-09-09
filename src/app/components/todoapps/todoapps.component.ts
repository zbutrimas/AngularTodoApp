import {Component, OnInit} from '@angular/core';
import {TodoappsService} from "../../services/todoapps.service";

@Component({
  selector: 'app-todoapps',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Todo text</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor='let todoApp of todoApps'>
        <td>{{todoApp.id}}</td>
        <td>{{todoApp.cardText}}</td>
        <td>
          <button (click)="deleteTodo(todoApp.id)" class="btn btn-danger me-2">Delete</button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td></td>
        <td><input name="cardText" class="form-control lh-sm" [(ngModel)]="cardText"></td>
        <td>
          <button (click)="createTodo()" class="btn btn-dark me-2">Create</button>
        </td>
      </tr>
      </tfoot>
    </table>
  `,
  styleUrls: ['./todoapps.component.css']
})
export class TodoappsComponent implements OnInit {
  todoApps: any = [];
  cardText = ``;
  error: any;

  constructor(private todoappsService: TodoappsService) {
  }

  ngOnInit(): void {
    this.todoappsService.getTodoApps().subscribe(
      (res: any) => this.todoApps = res,
      (err: any) => { this.error = err; console.log(err) }
    );
  }

  createTodo(): void {
    this.todoappsService.createTodoApp(this.cardText).subscribe(
      (res: any) => {
        this.todoappsService.getTodoApps().subscribe(
          (res: any) => this.todoApps = res,
          (err: any) => console.log(err)
        );
        this.cardText = ``;
      },
      (err: any) => { this.error = err; console.log(err); }
    );
  }

  deleteTodo(id: number): void {
    this.todoappsService.deleteTodo(id).subscribe(
      (res: any) => this.todoApps = this.todoApps.filter((p: any) => p.id !== id),
      (err: any) => { this.error = err; console.log(err); }
    );
  }
}
