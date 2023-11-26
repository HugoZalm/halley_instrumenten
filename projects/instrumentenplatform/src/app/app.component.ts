import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from './services/state.service';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from './../environments/environment';
import { DataService } from './services/data.services';
import { ClockService } from './services/clock.service';

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
    private clockService: ClockService,
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
    this.clockService.clockData$.subscribe((date) => {
      this.dataService.getWeather();
    });
    this.clockService.setClock();
  }

  ngAfterViewInit() {
    console.log('sidenav.set', this.sidenav);
    this.sidenav.set(this.sideNav);
  }

}
