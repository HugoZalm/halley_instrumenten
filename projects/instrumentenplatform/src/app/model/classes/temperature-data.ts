import { RawData } from '../../apollo/mock-data/weather-mock-data';
import { BaseData } from './base-data';

export class TemperatureData  extends BaseData {
    temperature?: number;
    dewpoint?: number;
    feeling?: number;
    inside?: number;

    fromMockData(data: RawData): void {
        this.temperature = data.T;
        this.dewpoint = data.TD;
    }

    fromHalleyData(
        datetime: Date,
        tempvalue: number,
        intempvalue: number,
        feelslike: number,
        dewpoint: number
    ) {
        this.datetime = datetime;
        this.temperature = tempvalue;
        this.inside = intempvalue;
        this.feeling = feelslike;
        this.dewpoint = dewpoint;
        return this;
    }
}