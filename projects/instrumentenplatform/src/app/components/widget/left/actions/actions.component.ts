import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent, ChartDialogComponent, MoreDialogComponent } from '../../../../components/components';
import { DataType } from '../../../../model/enums';
import { ChartInfo } from '../../../../model/interfaces';
import { StaticService } from 'projects/instrumentenplatform/src/app/services/static.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
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
    this.dialog.open(MoreDialogComponent, {
      data: {
        type: this.type
      }
    });
  }

  openInfoDialog() {
    this.dialog.open(InfoDialogComponent, {
      data: {
        url: 'assets/info/' + this.type + '.html'
      }
    });
  }

  openGraphDialog() {
    this.dialog.open(ChartDialogComponent, 
      {
        data: this.chartsInfo
      }
    );
  }

}
