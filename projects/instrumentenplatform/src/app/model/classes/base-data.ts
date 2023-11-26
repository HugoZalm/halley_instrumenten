export class BaseData {
    id?: number;
    datetime?: Date;

    constructor(date: Date) {
        this.datetime = date;
    }

}