import { BaseData } from './base-data';

export class TemperatureData  extends BaseData {
    temperature: number | null = null;
    dewpoint: number | null = null;
    feeling: number | null = null;
    inside: number | null = null;

    fromMockData(date: Date, T: number, TD: number): TemperatureData {
        this.datetime = date;
        this.temperature = T;
        this.dewpoint = TD;
        return this;
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