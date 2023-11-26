import { RawData } from '../../apollo/mock-data/weather-mock-data';
import { BaseData } from './base-data';

export class AirData extends BaseData {
    airpressure?: number;
    cloud_coverage_height?: number;
    humidity?: number;
    particulate_matter?: number;
    wind_direction?: number;
    wind_speed?: number;

    fromMockData(data: RawData): void {
        this.airpressure = data.P;
        this.humidity = data.U;
        this.wind_direction = data.DD;
        this.wind_speed = data.FF;
    }

    fromHalleyData(
        datetime: Date,
        humidity: number,
        pressure: number,
        windspeed: number,
        cloudheight: number,
        particulatematter: number,
        winddirection: number) {
            this.datetime = datetime;
            this.humidity = humidity;
            this.airpressure = pressure;
            this.wind_speed = windspeed;
            this.cloud_coverage_height = cloudheight;
            this.particulate_matter = particulatematter;
            this.wind_direction = winddirection;
            return this;
    }

}