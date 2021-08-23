import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoappsService {

  url = 'http://localhost:8081/main/todo'

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
}
