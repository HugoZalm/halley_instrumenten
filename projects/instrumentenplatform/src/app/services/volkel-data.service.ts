import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import casual from "casual-browserify";

@Injectable({
  providedIn: 'root'
})
export class VolkelDataService {

  private dataReady: boolean = false;
  private rawData: any[] = [];

  constructor(private http: HttpClient) {
    this.loadWeatherDataFromFile();
  }

  getWeatherData() {
    return this.createWeatherData();
  }

  private temperature() {
    const temperature = casual.double(-10,35);
    return {
        temperature: temperature,
        dewpoint: temperature - casual.double(0.0, 5.0),
        windchill: temperature - casual.double(0.0, 3.0),
    };
  };
  
  private weatherItem(time: number) {
    const date = new Date(time)
    return {
      date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      hour: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
      airpressure: casual.integer(980, 1040),
      cloudcover_height: casual.integer(500, 12000),
      dewpoint: this.temperature().dewpoint, //casual.double(-10.0, 15.0),
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
      temperature: this.temperature().temperature,//casual.double(-10.0, 35.0),
      windchill: this.temperature().windchill, //casual.double(-10.0, 35.0),
      wind_direction: casual.integer(0, 359),
      wind_speed: casual.double(0.0,120.0),
    }
  }
  
  private createWeatherData() {
    const items = [];
    const now = new Date().getTime();
    items.push(this.weatherItem(now));
    items.push(this.weatherItem(now + 1000));
    items.push(this.weatherItem(now + 2000));
    items.push(this.weatherItem(now + 3000));
    items.push(this.weatherItem(now + 4000));
    // for (let i = 0; i = 9; i++) {
    //   items.push(weatherItem(now + (i * 10000)));
    // }
    return {
      'data': {
        'weather': items
      }
    }
  }

  private loadWeatherDataFromFile() {
    this.http.get('assets/weerdata/weerdata_Volkel_Uur_2010-2020.csv', { responseType: 'text' })
      .subscribe({
        next: (data) => {
          let l: number = 0;
          let year = 0;
          let parts: string[] = [];
          let keys: string[] = [];
          for (const line of data.split(/[\r\n]+/)) {
            if (l > 0) {
              parts = line.split(";");
              let l = {} as { [index: string]: string | Date};
              for (let p in parts) {
                l[keys[p]] = parts[p];
              }
              const year = Number((l['YYYYMMDD'] as string).substring(0,4));
              const month = Number((l['YYYYMMDD'] as string).substring(4,6))-1;
              const day = Number((l['YYYYMMDD'] as string).substring(6,8));
              const hour = Number(l['HH']);
              l['Date'] = new Date(year, month, day, hour, 0, 0);
              this.rawData.push(l);
            } else {
              parts = line.split(";");
              for (let p in parts) {
                keys[p] = parts[p].trim();
              }
              keys.push('Date');
            }
            l++;
          }
          this.dataReady = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
