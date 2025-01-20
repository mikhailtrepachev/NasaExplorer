import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouteReuseStrategy, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SavedPage } from "./saved.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{ path: '', component: SavedPage }]),
    ],
    declarations: [SavedPage],
})

export class SavedModule { }