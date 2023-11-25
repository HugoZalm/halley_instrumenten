import casual from "casual-browserify";
import { AirData } from "../../app/model/classes/air-data";
import { AllskyCameraData } from "../../app/model/classes/allsky-camera-data";
import { MagnetometerData } from "../../app/model/classes/magnetometer-data";
import { MeteorData } from "../../app/model/classes/meteor-data";
import { PrecipitationData } from "../../app/model/classes/precipitation-data";
import { SatelliteImageData } from "../../app/model/classes/satellite-image-data";
import { SunData } from "../../app/model/classes/sun-data";
import { TemperatureData } from "../../app/model/classes/temperature-data";
import { WeatherForcastData } from "../../app/model/classes/weather-forcast-data";
import { WeatherData } from "../../app/model/classes/weather-data";
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as jsonData from '../../assets/weerdata/weerdata_Volkel_Uur_2010-2020.json';

export interface RawData{

}

const weatherData: RawData = jsonData;

export function createWeatherData() {
  // console.log(weatherData);
  const data = {
    data: {
      datetime: new Date(),
      air: new AirData(),
      camera: new AllskyCameraData(),
      magnetometer: new MagnetometerData(),
      meteor: new MeteorData(),
      precipitation: new PrecipitationData(),
      satellite: new SatelliteImageData(),
      sun: new SunData(),
      temperature: new TemperatureData(),
      weatherforcast: new WeatherForcastData(),
    } as WeatherData 
  }
  return data;;
}

function getDateTime(data: any): Date {
  const year = Number((data['YYYYMMDD'] as string).substring(0,4));
  const month = Number((data['YYYYMMDD'] as string).substring(4,6))-1;
  const day = Number((data['YYYYMMDD'] as string).substring(6,8));
  const hour = Number(data['HH']);
  return new Date(year, month, day, hour, 0, 0);

}


function weatherItem(time: number) {
  const date = new Date(time)
  return {
    date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    hour: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
    airpressure: casual.integer(980, 1040),
    cloudcover_height: casual.integer(500, 12000),
    dewpoint: temperature().dewpoint, //casual.double(-10.0, 15.0),
    humidity: casual.integer(0,100),
    magnetometer_x: 0,
    magnetometer_y: 0,
    magnetometer_z: 0,
    magnetometer_total: 0,
    meteor_count: casual.integer(0,100),
    particulatematter: 0,
    precipitation: casual.double(0.0, 5.0),
    solar_brightness: casual.integer(0,10),
    solar_intentsity: casual.integer(0,10),
    sqm: 0,
    temperature: temperature().temperature,//casual.double(-10.0, 35.0),
    windchill: temperature().windchill, //casual.double(-10.0, 35.0),
    wind_direction: casual.integer(0, 359),
    wind_speed: casual.double(0.0,120.0),
  }

  function temperature() {
    const temperature = casual.double(-10,35);
    return {
        temperature: temperature,
        dewpoint: temperature - casual.double(0.0, 5.0),
        windchill: temperature - casual.double(0.0, 3.0),
    };
  };
}
