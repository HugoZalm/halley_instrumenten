import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from './services/state.service';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from './../environments/environment';
import { DataService } from './services/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sideNav!: MatSidenav;

  public loading = false;
  public lang: {[index: string]: string} = {};
  mocksMode = environment.useMocks;


  constructor(
    private translate: TranslateService,
    private dataService: DataService,
    public state: StateService,
    public sidenav: SidenavService,
  ) {
    this.translate.setDefaultLang('nl');
    this.translate.use(this.state.language.get().value);
  }

  ngOnInit() {
    this.translate.get("HOME").subscribe(items => {
      this.lang = items;
    });
    setInterval(() => {
      this.dataService.getWeather();
    } , 1000);
  }

  ngAfterViewInit() {
    console.log('sidenav.set', this.sidenav);
    this.sidenav.set(this.sideNav);
  }

}
