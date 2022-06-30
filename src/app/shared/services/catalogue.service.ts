import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}

  getCatalogueList(): Observable<any[]> {
    const catalogueApi =
      'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
    return this.http.get<any>(catalogueApi);
  }
}
