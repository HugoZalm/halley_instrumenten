import { BaseData } from "./base-data";

export class SatelliteImageData extends BaseData {
    url: string = '';

    fromMockData(): SatelliteImageData {
        return this;
    }
}