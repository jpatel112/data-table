import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGithubApi, IAdminPortal, ISuccessfulPortal, IReceivedPortal } from '../interfaces/WebPortal';

@Injectable({
  providedIn: 'root'
})
export class WebPortalService {

  constructor(private _httpClient: HttpClient) { }

  getReceivedData(
    sort: string,
    order: string,
    filter: number): IReceivedPortal[] {
    return [
      {
        "id": 776983471,
        "updated_at": "2020-06-31T13:42:36Z",
        "processed_date": "2020-12-31T13:42:36Z",
        "failed": 0,
        "imported": 0,
        "web_order": 776983471,
        "status": "Pending",
      }, {
        "id": 24523545,
        "updated_at": "2020-08-31T13:42:36Z",
        "processed_date": "2020-12-31T13:42:36Z",
        "failed": 0,
        "imported": 0,
        "web_order": 174534123.1,
        "status": "Processed",
      }, {
        "id": 78763786871,
        "updated_at": "2020-12-31T13:42:36Z",
        "processed_date": "2020-12-31T13:42:36Z",
        "failed": 0,
        "imported": 0,
        "web_order": 4564312313,
        "status": "Stuck Orders",
      }, {
        "id": 7344354354,
        "updated_at": "2019-11-31T13:42:36Z",
        "processed_date": "2020-12-31T13:42:36Z",
        "failed": 0,
        "imported": 0,
        "web_order": 4564646,
        "status": "Stuck Orders",
      }, {
        "id": 542564484,
        "updated_at": "2018-04-31T13:42:36Z",
        "processed_date": "2020-11-31T13:42:36Z",
        "failed": 0,
        "imported": 0,
        "web_order": 12313,
        "status": "Processed",
      }, {
        "id": 4273454,
        "updated_at": "2020-06-31T13:42:36Z",
        "processed_date": "2020-10-31T13:42:36Z",
        "failed": 0,
        "imported": 0,
        "web_order": 4531231,
        "status": "Processed",
      }
    ];
  }

  getAdminPortal(
    sort: string,
    order: string,
    filter: number): IAdminPortal[] {
    return [
      {
        "id": 776983471,
        "web_order": 21485,
        "customer": 635232,
        "customer_name": "customer 2020",
        "date_failed": "2020-12-31T13:42:36Z",
        "status": "open"
      },
      {
        "id": 776983471,
        "web_order": 21485,
        "customer": 635232,
        "customer_name": "PROFILECOMPANY",
        "date_failed": "2020-12-31T13:42:36Z",
        "status": "Failed Import"
      }
      , {
        "id": 776983471,
        "web_order": 21485,
        "customer": 635232,
        "customer_name": "PROFILECOMPANY",
        "date_failed": "2020-12-31T13:42:36Z",
        "status": "Failed Import"
      }


    ];
  }

  getSuccessfulImports(
    sort: string,
    order: string,
    filter: number): ISuccessfulPortal[] {
    return [
      {
        "id": 13234563,
        "web_order": 32145644,
        "customer": 1000023165456,
        "customer_name": "Testing 2020",
        "sales_order": 10324979431,
        "date_failed": "2018-12-31T13:42:36Z",
      }, {
        "id": 97897546,
        "web_order": 32145644,
        "customer": 1000023165456,
        "customer_name": "Testing 2020 2",
        "sales_order": 10324979431,
        "date_failed": "2018-11-31T13:42:36Z",
      }, {
        "id": 1231797,
        "web_order": 453,
        "customer": 22454545,
        "customer_name": "Testing 2020 2",
        "sales_order": 10324979431,
        "date_failed": "2018-10-31T13:42:36Z",
      }, {
        "id": 345353453,
        "web_order": 32145644,
        "customer": 1000023165456,
        "customer_name": "Testing 2020 3",
        "sales_order": 10324979431,
        "date_failed": "2018-09-31T13:42:36Z",
      }
    ];
  }



  getRepoIssues(
    sort: string,
    order: string,
    page: number
  ): Observable<IGithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1
      }`;

    return this._httpClient.get<IGithubApi>(requestUrl);
  }

}
