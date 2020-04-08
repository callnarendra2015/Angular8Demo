import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError} from 'rxjs'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  public apiURL:string="http://date.jsontest.com";

  
 constructor() { }
 
  display()
  {
    return 'Hello Soha Softsolutions calling service By Narendra';
  }

  getPosts(){
    return [
      {
        id: 1,
        title: 'Angular Http Post Request Example'
      },
      {
        id: 2,
        title: 'Angular 8 Routing and Nested Routing Tutorial With Example'
      },
      {
        id: 3,
        title: 'How to Create Custom Validators in Angular 8?'
      },
      {
        id: 4,
        title: 'How to Create New Component in Angular 8?'
      }
    ];
  }
  getDepartment()
  {
  return[
      { "DepartmentId" : 1 ,"DepartName":"Administrator" },
      { "DepartmentId" : 2 ,"DepartName":"Genral Department" },
      { "DepartmentId" : 3 ,"DepartName":"Software" },
      { "DepartmentId" : 4 ,"DepartName":"Hardware" },
      { "DepartmentId" : 5 ,"DepartName":"Beauty" },
      { "DepartmentId" : 6 ,"DepartName":"HR" },
      ];
  }
}
