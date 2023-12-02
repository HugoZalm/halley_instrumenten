import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MockLinkProvider, handleOperation } from './app/apollo/mock-link';
import { ApolloLink, Operation } from '@apollo/client/core';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { apolloProviders } from './app/apollo/gql-integration';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injector, importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';

export let AppInjector: Injector;
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routes),
      provideAnimations(),
      Apollo,
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
      },
      importProvidersFrom(HttpClientModule),
      importProvidersFrom(TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }))
    ],
  }).catch(err => console.error(err));
