import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-saved',
    templateUrl: 'saved.page.html',
    styleUrls: ['saved.page.scss'],
    standalone: false,
})

export class SavedPage implements OnInit {
    savedExoplanets: any[] = [];

    constructor(private router: Router, private storageService: StorageService) {
    }
  
    ngOnInit() {
        this.reloadData();
    }

    ionViewWillEnter() {
        this.reloadData();
    }

    reloadData() {
        const savedData = this.storageService.load('savedExoplanets');
        if (savedData) {
          this.savedExoplanets = savedData;
        }
    }
  
    removeExoplanet(index: number) {
      this.savedExoplanets.splice(index, 1);
      this.storageService.save('savedExoplanets', this.savedExoplanets);
    }
 }