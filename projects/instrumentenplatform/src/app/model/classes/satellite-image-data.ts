export class SatelliteImageData {
    id: number | null = null;
    datetime: Date | null = null;
    url: string = '';

    fromMockData(): SatelliteImageData {
        return this;
    }
}