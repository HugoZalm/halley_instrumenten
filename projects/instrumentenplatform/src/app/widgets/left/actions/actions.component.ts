import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataType } from '../../../model/enums';
import { ChartInfo } from '../../../model/interfaces';
import { StaticService } from '../../../services/services';
import { MaterialModule } from '../../../shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseModule } from 'projects/instrumentenplatform/src/app/shared/base.module';
// import { MoreDialogComponent, InfoDialogComponent, ChartDialogComponent } from '../../../../dialogs/dialogs.module';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  standalone: true,
  imports: [MaterialModule, BaseModule, FontAwesomeModule,
  ] // , MoreDialogComponent, InfoDialogComponent, ChartDialogComponent]
})
export class ActionsComponent implements OnInit {

  public icons = StaticService.icons;

  NODATA = 'Geen data beschikbaar';
  ERROR = 'Fout bij ophalen data';

  @Input() type: DataType = DataType.AIR;
  @Input() more: boolean = false;
  @Input() info: boolean = false;
  @Input() chartsInfo: ChartInfo[] = [];
  @Input() now: Date = new Date();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  hasChartInfo() {
    return this.chartsInfo.length === 0
  }

  hasInfo() {
    return true;
  }

  hasMoreInfo() {
    return false;
  }

  openMoreDialog() {
    // this.dialog.open(MoreDialogComponent, {
    //   data: {
    //     type: this.type
    //   }
    // });
  }

  openInfoDialog() {
    // this.dialog.open(InfoDialogComponent, {
    //   data: {
    //     url: 'assets/info/' + this.type + '.html'
    //   }
    // });
  }

  openGraphDialog() {
    // this.dialog.open(ChartDialogComponent, 
    //   {
    //     data: this.chartsInfo
    //   }
    // );
  }

}
