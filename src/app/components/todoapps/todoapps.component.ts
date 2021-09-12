import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
          <!-- Button trigger modal -->
          <button (click)="setUpdateableTodo(todoApp)" type="button" class="btn btn-primary me-2 btn-sm"
                  data-bs-toggle="modal" data-bs-target="#exampleModal">Update
          </button>
          <button (click)="deleteTodo(todoApp.id)" class="btn btn-danger me-2 btn-sm">X</button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td></td>
        <td><input name="cardText" class="form-control lh-sm" [(ngModel)]="cardText"></td>
        <td>
          <button (click)="createTodo()" class="btn btn-warning me-2 btn-sm">Create</button>
        </td>
      </tr>
      </tfoot>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Todo text</h5>
            <button type="button" #modalCloseButton class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ updateableTodo | json }}
            <input name="cardText" class="form-control lh-sm"
                   [ngModel]="updateableTodo?.cardText"
                   (ngModelChange)="updateableTodo.cardText=$event" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button (click)="updateTodo(updateableTodo)" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./todoapps.component.css']
})
export class TodoappsComponent implements OnInit {
  todoApps: any = [];
  updateableTodo: any;
  cardText = ``;
  error: any;
  @ViewChild('modalCloseButton') modalCloseButton!: ElementRef;

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

  updateTodo(updateableTodo: any): void {
    this.todoappsService.updateTodoApp(updateableTodo).subscribe(
      res => this.modalCloseButton.nativeElement.click(),
      err => console.log(err)
    );
  }

  setUpdateableTodo(todo: any) {
    this.updateableTodo = todo;
  }
}

