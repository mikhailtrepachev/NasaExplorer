import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ExoplanetsPage } from "./exoplanets.page";
import { ExoplanetDetailPage } from "./pages/exoplanet-detail.page";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild([{ path: '', component: ExoplanetsPage }]),
    ],
    declarations: [
        ExoplanetsPage,
        ExoplanetDetailPage
    ],
  })
  export class ExoplanetsPageModule {}