import { Component, OnInit } from '@angular/core';
import { AppConstant } from 'src/app/AppConstant';
import { LoaderService } from 'src/app/services/loader.service';
import { ReceivedInfo } from 'src/app/class/received-info';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-received-info',
  templateUrl: './received-info.component.html',
  styleUrls: ['./received-info.component.scss']
})
export class ReceivedInfoComponent implements OnInit {

  public receivedInfoHeader: string = AppConstant.receivedInfoHeader;
  public receivedStatus = AppConstant.receivedStatus;
  public selectedReceivedValue: string;
  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  receivedInfoData = new ReceivedInfo('45354', null, null, null, 'all', null, null);
  constructor(public loaderService: LoaderService) { }


  ngOnInit(): void {
  }

}
