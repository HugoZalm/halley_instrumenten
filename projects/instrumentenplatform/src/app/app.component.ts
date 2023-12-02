import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StateService } from './services/state.service';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from './../environments/environment';
import { DataService } from './services/data.service';
import { ClockService } from './services/clock.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApolloModule } from 'apollo-angular';
import { GraphQLModule } from './apollo/graphql.module';
// import { AppRoutingModule } from './app-routing.module';
import { MenusModule } from './menus/menus.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './shared/material.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BaseModule } from './shared/base.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    BaseModule,
    // CommonModule,
    // TranslateModule,
    PagesModule,
    MenusModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // // AppRoutingModule,
    // TranslateModule,
    // RouterLink,
    RouterOutlet,
    ApolloModule,
    GraphQLModule,
  ],
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
