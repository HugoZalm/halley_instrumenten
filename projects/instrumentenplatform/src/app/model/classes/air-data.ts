import { BaseData } from './base-data';

export class AirData extends BaseData {
    airpressure: number | null = null;
    cloud_coverage_height: number | null = null;
    humidity: number | null = null;
    particulate_matter: number | null = null;
    wind_direction: number | null = null;
    wind_speed: number | null = null;

    fromMockData(date: Date, DD: number, FF: number, P: number, U: number): AirData {
        this.datetime = date;
        this.airpressure = P;
        this.humidity = U;
        this.wind_direction = DD;
        this.wind_speed = FF;
        return this;
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