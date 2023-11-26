import { RawData } from '../../apollo/mock-data/weather-mock-data';
import { BaseData } from './base-data';

export class PrecipitationData extends BaseData {
    value?: number;

    fromMockData(data: RawData): void {
        this.value = data.RH;
    }

    fromHalleyData(
        datetime: Date,
        value: number
    ) {
        this.datetime = datetime;
        this.value = value;
        return this;
    }

}