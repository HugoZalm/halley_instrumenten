export interface IWeatherData {
    date: string;
    hour: string;
    airpressure: number;
    cloudcover_height: number;
    dewpoint: number;
    humidity: number;
    magnetometer_x: number;
    magnetometer_y: number;
    magnetometer_z: number;
    magnetometer_total: number;
    meteor_count: number;
    particulatematter: number;
    precipitation: number;
    solar_brightness: number;
    solar_intentsity: number;
    sqm: number;
    temperature: number;
    windchill: number;
    wind_direction: number;
    wind_speed: number;
}

export interface MockWeerData {
    STN?: string;
    YYYYMMDD: string;
    HH: string;
    STAMP?: string;
    DD?: string;
    FH?: string;
    FF?: string;
    FX?: string;
    T?: string;
    T10N?: string;
    TD?: string;
    SQ?: string;
    Q?: string;
    DR?: string;
    RH?: string;
    P?: string;
    VV?: string;
    N?: string;
    U?: string;
    WW?: string;
    IX?: string;
    M?: string;
    R?: string;
    S?: string;
    O?: string;
    Y?: string;
    yy?: string;
    MM?: string;
    UU?: string;
    DATUM?: string;
    TIJD?: string;
    SAMEN?: string;
    TIMESTAMP?: string;
}