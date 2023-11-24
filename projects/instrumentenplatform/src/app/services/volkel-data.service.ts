import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import casual from "casual-browserify";
import { VolkelData } from '../model/interfaces/volkel-data';

export interface RawItem { [index: string]: string | Date | number};

@Injectable({
  providedIn: 'root'
})
export class VolkelDataService {

  private dataReady: boolean = false;
  private rawData: RawItem[] = [];

  constructor(private http: HttpClient) {
    this.loadWeatherDataFromFile();
  }

  getWeatherData() {
    let items = [];
    // while (!this.dataReady) {
    //   console.log(this.dataReady);
    // }
    const now = new Date().getTime();
    items.push(this.weatherItem(now));
    return {
      'data': {
        'weather': items
      }
    }
  }
  
  // getWeatherData() {
  //   let items = [];
  //   if (this.dataReady) {
  //     const now = new Date().getTime();
  //     items.push(this.weatherItem(now));
  //   } else {
  //     items.push(this.EMPTYDATA);
  //   }
  //   return {
  //     'data': {
  //       'weather': items
  //     }
  //   }
  // }

//   getWeatherData() {
//     const interval = setInterval(() => {
//       if (this.dataReady) {
//         clearInterval(interval);
//         const now = new Date().getTime();
//         return {
//           'data': {
//             'weather': [this.weatherItem(now)]
//           }
//         }
//       }
//       return {
//         'data': {
//           'weather': [this.EMPTYDATA]
//         }
//       }
//     }, 500);
// }

  private temperature() {
    const temperature = casual.double(-10,35);
    return {
        temperature: temperature,
        dewpoint: temperature - casual.double(0.0, 5.0),
        windchill: temperature - casual.double(0.0, 3.0),
    };
  };

  private getClosestItem(goal: number): RawItem {
    const closest = this.rawData.reduce((prev, curr) => {
      return (Math.abs((curr['DATE'] as Date).getTime() - goal) < Math.abs((prev['DATE'] as Date).getTime() - goal) ? curr : prev);
    });
    return closest;
  }
  
  private weatherItem(timestamp: number) {
    const rawData = this.getClosestItem(timestamp);
    return {
      date: rawData['YYYYMMDD'],
      hour: rawData['HH'],
      airpressure: rawData['P'],
      cloudcover_height: 0,
      dewpoint: rawData['TD'],
      humidity: rawData['U'],
      magnetometer_x: 0,
      magnetometer_y: 0,
      magnetometer_z: 0,
      magnetometer_total: 0,
      meteor_count: 0,
      particulatematter: 0,
      precipitation: rawData['RH'],
      solar_brightness: 0,
      solar_intentsity: 0,
      sqm: 0,
      temperature: rawData['T'],
      windchill: this.temperature().windchill,
      wind_direction: rawData['DD'],
      wind_speed: rawData['FF'],
    }
  }
  
  // private createWeatherData() {
  //   const items = [];
  //   const now = new Date().getTime();
  //   items.push(this.weatherItem(now));
  //   items.push(this.weatherItem(now + 1000));
  //   items.push(this.weatherItem(now + 2000));
  //   items.push(this.weatherItem(now + 3000));
  //   items.push(this.weatherItem(now + 4000));
  //   // for (let i = 0; i = 9; i++) {
  //   //   items.push(weatherItem(now + (i * 10000)));
  //   // }
  // }

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
              l['DATE'] = new Date(year, month, day, hour, 0, 0);
              this.rawData.push(l);
            } else {
              parts = line.split(";");
              for (let p in parts) {
                keys[p] = parts[p].trim();
              }
              keys.push('DATE');
            }
            l++;
          }
          this.dataReady = true;
          console.log("LOADED", this.dataReady);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  private EMPTYDATA = {
    date: '',
    hour: '',
    airpressure: 0,
    cloudcover_height: 0,
    dewpoint: 0,
    humidity: 0,
    magnetometer_x: 0,
    magnetometer_y: 0,
    magnetometer_z: 0,
    magnetometer_total: 0,
    meteor_count: 0,
    particulatematter: 0,
    precipitation: 0,
    solar_brightness: 0,
    solar_intentsity: 0,
    sqm: 0,
    temperature: 0,
    windchill: 0,
    wind_direction: 0,
    wind_speed: 0,
  }


}
