import casual from "casual-browserify";

export const weatherResponseMock = createWeatherData();

function createWeatherData() {
  const items = [];
  const now = new Date().getTime();
  items.push(weatherItem(now));
  items.push(weatherItem(now + 1000));
  // for (let i = 0; i = 9; i++) {
  //   items.push(weatherItem(now + (i * 10000)));
  // }
  return {
    'data': {
      'weather': items
    }
  }
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

// export const weatherResponseMock2 = {'data': {'weather': [
//     {
//       "name": "Australia",
//       "native": "Australia",
//       "emoji": "🇦🇺",
//       '__typename': 'Country'
//     },
//     {
//       "name": "China",
//       "native": "中国",
//       "emoji": "🇨🇳",
//       '__typename': 'Country'
//     },
//     {
//       "name": "Fiji",
//       "native": "Fiji",
//       "emoji": "🇫🇯",
//       '__typename': 'Country'
//     },
//     {
//       "name": "Indonesia",
//       "native": "Indonesia",
//       "emoji": "🇮🇩",
//       'currency': 'XCD',
//       '__typename': 'Country'
//     },
//     {
//       "name": "Seychelles",
//       "native": "Seychelles",
//       "emoji": "🇸🇨",
//       'currency': 'ALL',
//       '__typename': 'Country'
//     },
//     {
//        "name": "Thailand",
//       "native": "ประเทศไทย",
//       "emoji": "🇹🇭",
//       'currency': 'AMD',
//       '__typename': 'Country'
//     }
//   ]
// }
// }
