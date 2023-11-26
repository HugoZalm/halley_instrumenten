import casual from 'casual-browserify';
import { AirData } from '../../model/classes/air-data';
import { AllskyCameraData } from '../../model/classes/allsky-camera-data';
import { MagnetometerData } from '../../model/classes/magnetometer-data';
import { MeteorData } from '../../model/classes/meteor-data';
import { PrecipitationData } from '../../model/classes/precipitation-data';
import { SatelliteImageData } from '../../model/classes/satellite-image-data';
import { SunData } from '../../model/classes/sun-data';
import { TemperatureData } from '../../model/classes/temperature-data';
import { WeatherForcastData } from '../../model/classes/weather-forcast-data';
import { WeatherData } from '../../model/classes/weather-data';
import jsonData from '../../../assets/weerdata/weerdata_Volkel_01-2011.json';

export interface RawData {
  STN: number;
  YYYYMMDD: string;
  HH: number;
  TIMESTAMP: number;
  DD?: number;
  FH?: number;
  FF?: number;
  FX?: number;
  T?: number;
  T10N?: number;
  TD?: number;
  SQ?: number;
  Q?: number;
  DR?: number;
  RH?: number;
  P?: number;
  VV?: number;
  N?: number;
  U?: number;
  WW?: number;
  IX?: number;
  M?: number;
  R?: number;
  S?: number;
  O?: number;
  Y?: number;
}

const weatherData: RawData[] = loadData();

export function createWeatherData(date: Date) {
  const daydata: RawData = getHourData(date);
  const data = new WeatherData(date);
  const airdata = new AirData(date);
  airdata.fromMockData(daydata);
  airdata.fromMockData(daydata);
  // {
  //   data: {
  //     datetime: getDateTime(daydata),
  //     air: new AirData(date),
  //     camera: new AllskyCameraData(),
  //     magnetometer: new MagnetometerData(),
  //     meteor: new MeteorData(),
  //     precipitation: new PrecipitationData(date),
  //     satellite: new SatelliteImageData(),
  //     sun: new SunData(date),
  //     temperature: new TemperatureData(date),
  //     weatherforcast: new WeatherForcastData(),
  //   } as WeatherData,
  // };
  return data;
}

function loadData(): RawData[] {
  const rawData = jsonData as RawData[];
  return rawData;
}

function getHourData(day: Date): RawData {
  const YYYY = day.getFullYear().toString()
  const MM = day.getMonth() > 8 ? (day.getMonth() + 1).toString() : "0" + (day.getMonth() + 1);
  const DD = day.getDate().toString();
  const YYYYMMDD = YYYY + MM + DD;
  const dayData = weatherData.filter(data => data.YYYYMMDD === YYYYMMDD);
  const HH = day.getHours();
  const hourData = dayData.filter(data => data.HH === HH);
  const result = hourData.length > 0 ? hourData[0] : newRawdata();
  return result;
}

function newRawdata() {
  return {
    STN: 0,
    YYYYMMDD: "19700101",
    HH: 0,
    TIMESTAMP: 0,
    DD: 0,
    FH: 0,
    FF: 0,
    FX: 0,
    T: 0,
    T10N: 0,
    TD: 0,
    SQ: 0,
    Q: 0,
    DR: 0,
    RH: 0,
    P: 0,
    VV: 0,
    N: 0,
    U: 0,
    WW: 0,
    IX: 0,
    M: 0,
    R: 0,
    S: 0,
    O: 0,
    Y: 0,
  }
}
function getDateTime(data: RawData): Date {
  const year = Number((data['YYYYMMDD'] as string).substring(0, 4));
  const month = Number((data['YYYYMMDD'] as string).substring(4, 6)) - 1;
  const day = Number((data['YYYYMMDD'] as string).substring(6, 8));
  const hour = Number(data['HH']);
  return new Date(year, month, day, hour, 0, 0);
}

function weatherItem(time: number) {
  const date = new Date(time);
  return {
    date:
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    hour: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
    airpressure: casual.integer(980, 1040),
    cloudcover_height: casual.integer(500, 12000),
    dewpoint: temperature().dewpoint, //casual.double(-10.0, 15.0),
    humidity: casual.integer(0, 100),
    magnetometer_x: 0,
    magnetometer_y: 0,
    magnetometer_z: 0,
    magnetometer_total: 0,
    meteor_count: casual.integer(0, 100),
    particulatematter: 0,
    precipitation: casual.double(0.0, 5.0),
    solar_brightness: casual.integer(0, 10),
    solar_intentsity: casual.integer(0, 10),
    sqm: 0,
    temperature: temperature().temperature, //casual.double(-10.0, 35.0),
    windchill: temperature().windchill, //casual.double(-10.0, 35.0),
    wind_direction: casual.integer(0, 359),
    wind_speed: casual.double(0.0, 120.0),
  };

  function temperature() {
    const temperature = casual.double(-10, 35);
    return {
      temperature: temperature,
      dewpoint: temperature - casual.double(0.0, 5.0),
      windchill: temperature - casual.double(0.0, 3.0),
    };
  }
}
