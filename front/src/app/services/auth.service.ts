import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceApi {

  constructor(private apiService: ApiService) { }

  login(body: any): Promise<any> {
    return this.apiService.insert(body, `${environment.apiUrl}auth/login`)
  }

  register(body: any): Promise<any> {
    return this.apiService.insert(body, `${environment.apiUrl}auth/register`)
  }
}
