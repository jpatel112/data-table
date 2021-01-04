import { Component, OnInit } from '@angular/core';
import { AppConstant } from 'src/app/AppConstant';
import { ISuccessfulPortal } from 'src/app/interfaces/WebPortal';
import { LoaderService } from 'src/app/services/loader.service';
import { WebPortalService } from 'src/app/services/web-portal.service';

@Component({
  selector: 'app-successful-list',
  templateUrl: './successful-list.component.html',
  styleUrls: ['./successful-list.component.scss']
})
export class SuccessfulListComponent implements OnInit {

  public successfulImportHeader: string = AppConstant.successfulImportHeader;
  public noData = AppConstant.noData;
  public displayedColumns: string[] = AppConstant.successfulColumns;
  public displayedSecondColumns: string[] = AppConstant.successfulSecondColumns;
  public resultsLength = 0;
  public filterValue: string;

  successfulList: ISuccessfulPortal[];

  public inputId: string = null;
  public inputAuthorAssociation: string = null;
  public inputNumber: string = null;
  public inputTitle: string = null;
  public inputUpdatedAt: string = null;
  public inputSalesOrder: string = null;

  constructor(
    public loaderService: LoaderService,
    private webPortalService: WebPortalService) {
    this.successfulList = this.webPortalService.getSuccessfulImports(null, null, null);
  }

  ngOnInit(): void {
    console.log(this.successfulList);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.webPortalService.getSuccessfulImports(null, null, null);
    //  this.dataSource.filter = this.filterValue.trim().toLowerCase();
    //  if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    //  }
  }

}
