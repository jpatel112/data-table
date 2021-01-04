import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppConstant } from 'src/app/AppConstant';
import { IReceivedPortal } from 'src/app/interfaces/WebPortal';
import { LoaderService } from 'src/app/services/loader.service';
import { WebPortalService } from 'src/app/services/web-portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-received-list',
  templateUrl: './received-list.component.html',
  styleUrls: ['./received-list.component.scss']
})
export class ReceivedListComponent implements OnInit {

  disableSelect = new FormControl(false);
  public receivedImportHeader: string = AppConstant.receivedImportHeader;
  public noData = AppConstant.noData;
  public displayedColumns: string[] = AppConstant.receivedColumns;
  public displayedSecondColumns: string[] = AppConstant.receivedSecondColumns;

  public resultsLength = 0;
  public filterValue: string;
  receivedPortal: IReceivedPortal[];

  public inputId: string = null;
  public inputCreatedDate: string = null;
  public inputProcessedDate: string = null;
  public inputFailed: string = null;
  public inputImported: string = null;
  public inputWebOrder: string = null;
  public inputStatus: string = null;
  public receivedStatus = AppConstant.receivedStatus;
  public selectedReceivedValue = 'pending';

  constructor(
    public loaderService: LoaderService,
    private webPortalService: WebPortalService,
    private router: Router) {
    this.receivedPortal = this.webPortalService.getReceivedData(null, null, null);

  }

  ngOnInit(): void {
    console.log(this.receivedPortal);
  }

  applyFilter(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.webPortalService.getReceivedData(null, null, null);
    //  this.dataSource.filter = this.filterValue.trim().toLowerCase();
    //  if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    //  }
  }

  getRecord(id: any): void {
    this.router.navigate(['/receivedInfo']);
    console.log(id);
  }
}
