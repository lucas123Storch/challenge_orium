import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  get<T>(url: string): Promise<any> {
    return this.http
      .get<T>(url, this.SetHeaderJson())
      .toPromise()
  }

  async insert(data: any, url: string): Promise<any> {
    return await this.http
      .post<any>(url, data, this.SetHeaderJson())
      .toPromise();
  }

  async update(data: any, url: string): Promise<any> {
    return await this.http
      .put<any>(url, data, this.SetHeaderJson())
      .toPromise();
  }

  async remove(url: string): Promise<any> {
    return await this.http
      .delete<any>(url, this.SetHeaderJson())
      .toPromise();
  }
}
