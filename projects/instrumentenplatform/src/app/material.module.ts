import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
