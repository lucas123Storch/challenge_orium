import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class BaseService {

  protected Url: string = environment.apiUrl;

  protected SetHeaderJson() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };
  }

  protected handleError(response: Response | any) {
    let customError: string[] = [];

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === "Unknown Error") {
        customError.push("Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.");
        response.error.errors = customError;
      }
    }
    return throwError(response);
  }
}
