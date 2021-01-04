import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppConstant } from '../../AppConstant';

import { HttpClient } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, delay, map, startWith, switchMap } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

import { IAdminPortal, IGithubApi } from '../../interfaces/WebPortal';
import { WebPortalService } from 'src/app/services/web-portal.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-data-table-test',
  templateUrl: './data-table-test.component.html',
  styleUrls: ['./data-table-test.component.scss'],
})
export class DataTableTestComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  disableSelect = new FormControl(false);

  public displayedColumns: string[] = AppConstant.webPortalColumns;
  public displayedSecondColumns: string[] = AppConstant.webPortalSecondColumns;
  public adminStatus = AppConstant.adminStatus;
  public selectedValue = 'all';

  public filterValue: string;
  public adminPortalHeader: string = AppConstant.adminPortalHeader;
  public noData = AppConstant.noData;


  public inputId: string = null;
  public inputAuthorAssociation: string = null;
  public inputNumber: string = null;
  public inputTitle: string = null;
  public inputUpdatedAt: string = null;
  public inputState: string = null;

  // http
  exampleDatabase: null;
  data: IAdminPortal[] = [];
  employees: IAdminPortal[];
  public resultsLength = 0;

  constructor(
    private _httpClient: HttpClient,
    private webPortalService: WebPortalService,
    public loaderService: LoaderService
  ) {
    this.employees = this.webPortalService.getAdminPortal(null, null, null);
  }

  ngOnInit() {
    console.log(this.employees);
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          return this.webPortalService.getRepoIssues(
            // return this.exampleDatabase!.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex
          );
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.resultsLength = data.total_count;
          return data.items;
        }),
        catchError(() => {
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          return observableOf([]);
        })
      )
      .subscribe((data) => (this.data = data));
  }

  applyFilter(event: Event) {

    console.log((event.target as HTMLInputElement).value);
    this.filterValue = (event.target as HTMLInputElement).value;
    this.webPortalService.getAdminPortal(null, null, null);
    //  this.dataSource.filter = this.filterValue.trim().toLowerCase();
    //  if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    //  }
  }

  clearInput(event: any) {
  }
}
