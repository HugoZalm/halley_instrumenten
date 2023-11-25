import { ChartType } from "ng-apexcharts";
import { DataType } from "../enums/data-type";

export class ChartInfo {
    charttype: ChartType = "line";
    datatype: DataType = DataType.AIR;
    label: string = '';
}