export class WeatherForcastData {
    id: number | null = null;
    datetime: Date | null = null;
    forecast: string = '';

    fromMockData(): WeatherForcastData {
        return this;
    }
}