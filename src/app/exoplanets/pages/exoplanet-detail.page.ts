import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { NavController } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: 'app-exoplanet-detail',
    templateUrl: 'exoplanet-detail.page.html',
    styleUrls: ['exoplanet-detail.page.scss'],
    standalone: false,
})

export class ExoplanetDetailPage implements OnInit {
    exoplanet: any;

    constructor(private route: ActivatedRoute, 
        private navCtrl: NavController,
        private storageService: StorageService) {}
  
    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            if (params && params['exoplanet']) {
              this.exoplanet = JSON.parse(params['exoplanet']);
            }
          });
    }

    goBack() {
        this.navCtrl.back();
    }

    saveExoplanet() {
        const savedExoplanets = this.storageService.load('savedExoplanets') || [];
        
        if (!savedExoplanets.some((planet: any) => planet.kepoi_name === this.exoplanet.kepoi_name)) {
          savedExoplanets.push(this.exoplanet);
          this.storageService.save('savedExoplanets', savedExoplanets);
          alert('Exoplanet saved to your favorites!');
        } else {
          alert('This exoplanet is already saved.');
        }
      }
}