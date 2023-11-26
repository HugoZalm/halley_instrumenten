import { BaseData } from "./base-data";

export class AllskyCameraData extends BaseData {
    url: string = '';

    fromMockData(date: Date, url: string): AllskyCameraData {
        this.datetime = date;
        this.url = url;
        return this;
    }

}