export class AllskyCameraData {
    datetime: Date = new Date();
    url: string = '';

    fromMockData(date: Date, url: string): AllskyCameraData {
        this.datetime = date;
        this.url = url;
        return this;
    }

}