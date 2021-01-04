import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndDirective } from './directives/dnd.directive';
import { ProgressComponent } from './components/upload-file/progress/progress.component';
import { InterceptorService } from '../app/services/interceptor.service';
import { SuccessfulListComponent } from './components/successful-list/successful-list.component';
import { ReceivedListComponent } from './components/received-list/received-list.component';
import { ReceivedInfoComponent } from './components/received-list/received-info/received-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    RoutingComponents,
    DndDirective,
    ProgressComponent,
    SuccessfulListComponent,
    ReceivedListComponent,
    ReceivedInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
