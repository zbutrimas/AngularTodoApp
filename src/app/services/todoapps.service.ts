import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoappsService {

  url = 'http://localhost:8081/main/todoapps'

  constructor(private httpClient: HttpClient) { }

  getTodoApps(): any{
    // return [
    //   {id: '8',cardText: 'makaronai'},
    //   {id: '9',cardText: 'makaronai5'},
    //   {id: '10',cardText: 'makaronai9'},
    //
    // ];
    return this.httpClient.get(this.url);
  }

  createTodoApp(cardText: string) {
    return this.httpClient.post<any>(this.url,{'cardText': cardText});
  }

  deleteTodo(id: number) {
    return this.httpClient.delete(this.url + '/' + id)
  }

  updateTodoApp(updateableTodo: any) {
    return this.httpClient.put<any>(this.url + '/' + updateableTodo.id, updateableTodo);
  }
}
