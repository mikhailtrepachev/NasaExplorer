import { Component } from "@angular/core";
import { NasaService } from "../services/nasa.service";

@Component({
    selector: 'app-apod',
    templateUrl: 'apod.page.html',
    styleUrls: ['apod.page.scss'],
    standalone: false,
})

export class ApodPage { 
    apodData: any;

    constructor(private nasaService: NasaService) {}
  
    ngOnInit() {
      this.nasaService.getApod().subscribe((data) => {
        this.apodData = data;
      });
    }
}