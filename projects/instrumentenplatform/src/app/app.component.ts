import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from './services/state.service';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sideNav!: MatSidenav;

  public loading = false;
  public lang: {[index: string]: string} = {};

  constructor(
    public state: StateService,
    private translate: TranslateService,
    public sidenav: SidenavService
  ) {
    this.translate.setDefaultLang('nl');
    this.translate.use(this.state.language.get().value);
  }

  ngOnInit() {
    this.translate.get("HOME").subscribe(items => {
      this.lang = items;
    });
  }

  ngAfterViewInit() {
    console.log('sidenav.set', this.sidenav);
    this.sidenav.set(this.sideNav);
  }

  // toTop() {
  //   window.scrollTo(0, 0);
  // }

}
