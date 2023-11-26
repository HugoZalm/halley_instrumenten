import { Observable, Operation, RequestHandler } from '@apollo/client/core';
import { environment } from '../../environments/environment';
import { countriesResponseMock } from './mock-data/countries-mock-data';
import { createWeatherData as createMockData } from './mock-data/weather-mock-data';

export const MockLinkProvider = 'MOCK_LINK';


export const handleOperation: RequestHandler = (operation: Operation, forward) => {
  if (environment.useMocks) {
    let response = {} as any;

    switch (operation.operationName) {
      case 'countries':
        response = countriesResponseMock;
        break;
      case 'mockweather':
        response = createMockData(operation.variables['date']);
        break;
      }

    return Observable.of(response);

  } else {
    return forward(operation);
  }
};
