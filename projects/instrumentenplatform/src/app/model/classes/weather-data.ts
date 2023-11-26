import { RawData } from '../../apollo/mock-data/weather-mock-data';
import { AirData } from './air-data';
import { AllskyCameraData } from './allsky-camera-data';
import { MagnetometerData } from './magnetometer-data';
import { MeteorData } from './meteor-data';
import { PrecipitationData } from './precipitation-data';
import { SatelliteImageData } from './satellite-image-data';
import { SunData } from './sun-data';
import { TemperatureData } from './temperature-data';
import { WeatherForcastData } from './weather-forcast-data';

export class WeatherData {
    datetime: Date;
    air: AirData;
    camera: AllskyCameraData;
    magnetometer: MagnetometerData;
    meteor: MeteorData;
    precipitation: PrecipitationData;
    satellite: SatelliteImageData;
    sun: SunData;
    temperature: TemperatureData;
    weatherforcast: WeatherForcastData;

    constructor(date: Date) {
        this.datetime = date;
        this.air = new AirData(date);
        this.camera = new AllskyCameraData(date);
        this.magnetometer = new MagnetometerData(date);
        this.meteor = new MeteorData(date);
        this.precipitation = new PrecipitationData(date);
        this.satellite = new SatelliteImageData(date);
        this.sun = new SunData(date);
        this.temperature = new TemperatureData(date);
        this.weatherforcast = new WeatherForcastData();
    }

    fromMockData(datetime: Date, air: AirData, precipitation: PrecipitationData, sun: SunData, temperature: TemperatureData, camera: AllskyCameraData) {
        this.datetime = datetime;
        this.air = air;
        this.camera = camera;
        this.precipitation = precipitation;
        this.sun = sun;
        this.temperature = temperature;
        return this;
    }

    fromHalleyData(air: AirData, temperature: TemperatureData, rain: PrecipitationData, sun: SunData) {
        this.air = air;
        this.temperature = temperature;
        this.precipitation = rain;
        this.sun = sun;
        return this;
    }

    setTime(datetime: Date) {
        this.datetime = datetime;
        return this;
    }
}