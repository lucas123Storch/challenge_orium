import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private apiService: ApiService) { }

  // lists
  get(): Promise<any> {
    return this.apiService.get(`${environment.apiUrl}todoLists`)
  }
  updateList(body: any): Promise<any> {
    return this.apiService.update(body, `${environment.apiUrl}todoLists/${body.id}`)
  }
  addList(body: any): Promise<any> {
    return this.apiService.insert(body, `${environment.apiUrl}todoLists`)
  }
  deleteList(id: any): Promise<any> {
    return this.apiService.remove(`${environment.apiUrl}todoLists/${id}`)
  }

  // tasks

  getTasks(): Promise<any> {
    return this.apiService.get(`${environment.apiUrl}itemListTask`)
  }

  addTask(body: any): Promise<any> {
    return this.apiService.insert(body, `${environment.apiUrl}itemListTask`)
  }

  updateTask(body: any): Promise<any> {
    return this.apiService.update(body, `${environment.apiUrl}itemListTask/${body.id}`)
  }

  deleteTask(id: any): Promise<any> {
    return this.apiService.remove(`${environment.apiUrl}itemListTask/${id}`)
  }

}
