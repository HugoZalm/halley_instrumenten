import { NgModule } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
// import { LiveComponent } from "./live/live.component";
// import { DemoComponent } from "./demo/demo.component";

@NgModule({
    imports: [
        TopMenuComponent,
        SideMenuComponent
        // LiveComponent,
        // DemoComponent
    ],
    exports: [
        TopMenuComponent,
        SideMenuComponent
    ],
})
export class MenusModule {}