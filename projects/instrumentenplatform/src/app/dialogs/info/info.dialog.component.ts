import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoDialogData } from '../../model/interfaces';
import { MaterialModule } from '../../shared/material.module';
import { BaseModule } from '../../shared/base.module';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info.dialog.component.scss',
  styleUrls: ['./info.dialog.component.scss'],
  standalone: true,
  imports: [MaterialModule, BaseModule]
})
export class InfoDialogComponent implements OnInit {

  public content = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InfoDialogData,
    private http: HttpClient
  ) {
    this.http.get(data.url, {responseType: 'text'})
        .subscribe((data) => {
          console.log(data);
          this.content = data;
        });
  }

  ngOnInit(): void {}

}


