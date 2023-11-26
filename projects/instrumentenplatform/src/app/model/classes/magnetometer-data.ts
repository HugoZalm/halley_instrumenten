import { BaseData } from "./base-data";

export class MagnetometerData extends BaseData{
    x?: number;
    y?: number;
    z?: number;
    total?: number;
    sqm?: number;

    fromMockData(): MagnetometerData {
        return this;
    }
}