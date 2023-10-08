import { Observable, Operation, RequestHandler } from '@apollo/client/core';
import { environment } from '../environments/environment';
import { countriesResponseMock } from './mock-data/countries-mock-data';
import { weatherResponseMock } from './mock-data/weather-mock-data';
import { AppInjector } from '../app/app.module';
import { VolkelDataService } from '../app/services/volkel-data.service';
// import { ExecutionResult } from '@apollo/client/lib/types';

export const MockLinkProvider = 'MOCK_LINK';


export const handleOperation: RequestHandler = (operation: Operation, forward) => {
  if (environment.useMocks) {
    let response = {} as any;

    switch (operation.operationName) {
      case 'countries':
        response = countriesResponseMock;
        break;
      case 'weather':
        const volkelDataService = AppInjector.get(VolkelDataService);
        response = volkelDataService.getWeatherData();
        // response = weatherResponseMock;
        break;
      }

    return Observable.of(response);

  } else {
    return forward(operation);
  }
};
