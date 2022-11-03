import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient:HttpClient) { }

  users(){
    // return this.httpClient.get('http://localhost/datatable_api/get.php');
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
       return this.httpClient.get('https://fableadtechnolabs.com/angular_api/index.php');
  }
}
