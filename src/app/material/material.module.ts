import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';



const Material = [
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  DragDropModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSelectModule
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule { }
