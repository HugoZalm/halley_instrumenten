import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from '../../model/interfaces/selection-item';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from '../../services/state.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StaticService } from '../../services/static.service';
import { SidenavService } from '../../services/sidenav.service';
import { MaterialModule } from '../../shared/material.module';
import { BaseModule } from '../../shared/base.module';
import { InfoDialogComponent } from '../../dialogs/info/info.dialog.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  standalone: true,
  imports: [ MaterialModule, BaseModule ]
})
export class TopMenuComponent implements OnInit {

  public icons = StaticService.icons;
  public lang: {[index: string]: string} = {};
  public selectedLanguage =  this.state.language.get();
  public connection: { status: string, message: string} = { status: 'NOK', message: '' };
  public showError = false;
  speed: number = 1;

  constructor(
    public state: StateService,
    private translate: TranslateService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public sidenav: SidenavService
    ) {}

  ngOnInit(): void {
    this.translate.get("HOME").subscribe(items => {
      this.lang = items;
    });
  }

  setDemo(e: MatSlideToggleChange) {
    console.log(e)
    this.state.demo.set(e.checked);
  }


  showDisclaimer() {
    // TODO: url afh. van language
    this.dialog.open(InfoDialogComponent, {
      data: {
        url: 'assets/info/disclaimer.html'
      }
    });
  }

  openSnackBar() {
    this.snackBar.open(
      this.connection.message,
      undefined,
      {
        duration: 3000,
        verticalPosition: 'top'
      });
  }

  // private setLanguage(language: Language) {
  //   this.state.language.set(language);
  //   this.translate.use(this.state.language.get().value);
  //   this.translate.get("HOME").subscribe(items => {
  //     this.lang = items;
  //   });
  // }

}


