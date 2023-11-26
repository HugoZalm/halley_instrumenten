import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ApolloLink, Operation, RequestHandler } from '@apollo/client/core';
import { MockLinkProvider, handleOperation } from './apollo/mock-link'
import { apolloProviders } from './apollo/gql-integration';
import { GraphQLModule } from './apollo/graphql.module';
import { CountryPageComponent } from './pages/country/country.page.component';
import { WeatherPageComponent } from './pages/weather/weather.page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AnalogClockComponent } from './components/widget/left/analog-clock/analog-clock.component';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export let AppInjector: Injector;
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InfoDialogComponent,
    SideMenuComponent,
    TopMenuComponent,
    CountryPageComponent,
    WeatherPageComponent,
    DashboardPageComponent,
    WidgetComponent,
    AnalogClockComponent
  ],
  imports: [
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ApolloModule,
    GraphQLModule,
  ],
  providers: [
    {
      provide: MockLinkProvider,
      useFactory: () =>
        new ApolloLink(
          (operation: Operation, forward: any) => handleOperation(operation, forward)
        )
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloProviders,
      deps: [MockLinkProvider]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
    loadErrorMessages();
  }
}
