import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { DataTableTestComponent } from './components/data-table-test/data-table-test.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { SuccessfulListComponent } from './components/successful-list/successful-list.component';
import { ReceivedListComponent } from './components/received-list/received-list.component';
import { ReceivedInfoComponent } from './components/received-list/received-info/received-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'admin', component: DataTableTestComponent },
  { path: 'table/uploadFile', component: UploadFileComponent },
  { path: 'successful', component: SuccessfulListComponent },
  { path: 'received', component: ReceivedListComponent },
  { path: 'receivedInfo', component: ReceivedInfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponents = [DataTableTestComponent, UploadFileComponent];
