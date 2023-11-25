export class MagnetometerData {
    id: number | null = null;
    datetime: Date | null = null;
    x: number | null = null;
    y: number | null = null;
    z: number | null = null;
    total: number | null = null;
    sqm: number | null = null;

    fromMockData(): MagnetometerData {
        return this;
    }
}