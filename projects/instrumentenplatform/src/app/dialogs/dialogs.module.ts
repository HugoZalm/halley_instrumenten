import { NgModule } from "@angular/core";
import { InfoDialogComponent } from "./info/info.dialog.component";
import { ChartDialogComponent } from "./chart/chart.dialog.component";
import { MoreDialogComponent } from "./more/more.dialog.component";

@NgModule({
    imports: [
        InfoDialogComponent,
        ChartDialogComponent,
        MoreDialogComponent
    ],
    // exports: [
    //     InfoDialogComponent,
    //     ChartDialogComponent,
    //     MoreDialogComponent
    // ]
})
export class DialogsModule {}
