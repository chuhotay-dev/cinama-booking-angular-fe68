import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let urlAPI = '';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    urlAPI = environment.urlAPI;
  }

  get(uri: any): Observable<any> {
    return this.http.get(urlAPI + uri).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  post(uri: any, data: any): Observable<any> {
    return this.http.post(urlAPI + uri, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  handleError(error: any) {
    switch (error.error.statusCode) {
      case 300:
        break;

      case 400:
        break;

      case 404:
        alert(error.error.content);
        break;

      case 401:
        break;

      case 500:
        break;

      default:
        break;
    }
    return throwError(error);
  }
}
