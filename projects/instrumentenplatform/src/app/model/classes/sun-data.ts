import { RawData } from '../../apollo/mock-data/weather-mock-data';
import { BaseData } from './base-data';

export class SunData  extends BaseData {
    radiation?: number;
    uvindex?: number;

    fromMockData(data: RawData) {}

    fromHalleyData(date: Date, radiation: number, uvindex: number): SunData {
        this.datetime = date;
        this.radiation = radiation;
        this.uvindex = uvindex;
        return this;
    }

}