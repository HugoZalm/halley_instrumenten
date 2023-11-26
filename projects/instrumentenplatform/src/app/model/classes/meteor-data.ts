import { BaseData } from "./base-data";

export class MeteorData extends BaseData{
    meteorcount?: number;

    fromMockData(): MeteorData {
        return this;
    }
}