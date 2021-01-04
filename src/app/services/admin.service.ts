import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private REST_API_SERVER = 'http://localhost:4200/products';

  constructor(private httpClient: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequestToUrl(url: string) {
    return this.httpClient.get(url, { observe: 'response' }).pipe(
      retry(3),
      catchError(this.handleError),
      tap((res) => {
        console.log(res.headers.get('Link'));
        this.parseLinkHeader(res.headers.get('Link'));
      })
    );
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach((p) => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

    // this.first = links['first'];
    // this.last = links['last'];
    // this.prev = links['prev'];
    // this.next = links['next'];
  }
}
