export class MeteorData {
    id: number | null = null;
    datetime: Date | null = null;
    meteorcount: number | null = null;

    fromMockData(): MeteorData {
        return this;
    }
}