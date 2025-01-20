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
    filteredExoplanets: any[] = [];  // Добавим переменную для отфильтрованных экзопланет
    searchQuery: string = ''; // Для хранения ввода поиска
  
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
              this.filteredExoplanets = [...this.exoplanets]; // Начальное значение для отфильтрованного массива
            },
            (error) => {
              console.error('Ошибка при загрузке экзопланет:', error);           
            }
          );
    }
    
    filterExoplanets(): void {
        if (this.searchQuery.trim() === '') {
            this.filteredExoplanets = [...this.exoplanets];  // Если поисковый запрос пустой, показываем все
        } else {
            this.filteredExoplanets = this.exoplanets.filter(exoplanet => 
                exoplanet.kepoi_name.toLowerCase().includes(this.searchQuery.toLowerCase())  // Фильтруем по имени экзопланеты
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