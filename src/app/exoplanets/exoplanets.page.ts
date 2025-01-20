import { Component, OnInit } from "@angular/core";
import { NasaService } from "../services/nasa.service";
import { StorageService } from "../services/storage.service";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
    selector: 'app-exoplanets',
    templateUrl: 'exoplanets.page.html',
    styleUrls: ['exoplanets.page.scss'],
    standalone: false,
})

export class ExoplanetsPage implements OnInit { 
    exoplanets: any[] = [];
    filteredExoplanets: any[] = [];
    searchQuery: string = '';
  
    constructor(
      private nasaService: NasaService, 
      private storageService: StorageService,
      private router: Router,
      private navCtrl: NavController
    ) {}
  
    ngOnInit(): void {
        this.loadExoplanets();
    }
    
    loadExoplanets(event?: any): void {
        this.nasaService.getExoplanets().subscribe(
            (data: any) => {
              this.exoplanets = data;
              this.filteredExoplanets = [...this.exoplanets];
            },
            (error) => {
              console.error('Error while loading exoplanets: ', error);           
            }
          );
    }
    
    filterExoplanets(): void {
        if (this.searchQuery.trim() === '') {
            this.filteredExoplanets = [...this.exoplanets];
        } else {
            this.filteredExoplanets = this.exoplanets.filter(exoplanet => 
                exoplanet.kepoi_name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }

    openExoplanetDetails(exoplanet: any): void {
        this.navCtrl.navigateForward('/exoplanet-details', {
          queryParams: {
            exoplanet: JSON.stringify(exoplanet),
          },
        });
    }
}