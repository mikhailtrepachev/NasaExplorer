import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exoplanet } from '../models/exoplanet.model';

@Injectable({ providedIn: 'root' })
export class NasaService {
  private apiKey = 'MpXKKrnppwZBqn4VD2gFw5Vpn9NODTxInHlvLS7Z';
  private baseUrl = 'https://api.nasa.gov';

  constructor(private http: HttpClient) {}

  getApod(): Observable<any> {
    return this.http.get(`${this.baseUrl}/planetary/apod?api_key=${this.apiKey}`);
  }

  getExoplanets(): Observable<any> {
    const url = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json&where=koi_disposition%20like%20'CANDIDATE'%20and%20koi_period%3E300%20and%20koi_prad%3C2&order=koi_period`;
    return this.http.get(url);
}

  getSolarActivity(): Observable<any> {
    const targetUrl = 'https://ssd-api.jpl.nasa.gov/fireball.api?limit=20';
    return this.http.get(targetUrl);
  }
}