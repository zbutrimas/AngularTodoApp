import { Component, OnInit } from '@angular/core';
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
          <button class="btn btn-danger me-2">Delete</button>
        </td>
      </tr>
      <tr>
        <td></td>

        <td><input></td>
        <td><button class="btn btn-dark me-2">Create</button> </td>
      </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./todoapps.component.css']
})
export class TodoappsComponent implements OnInit {
  todoApps: any = [];

  constructor(private todoappsService: TodoappsService) { }

  ngOnInit(): void {
    this.todoappsService.getTodoApps().subscribe(
      (res: any) => this.todoApps = res,
      (err: any) => console.log(err)
    );
  }

}
