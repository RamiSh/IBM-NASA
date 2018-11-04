import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Photo } from './modules/photo-module';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private headers: HttpHeaders;
  path = `${environment.apiRoot}/api/photos`;

  constructor(private _http: HttpClient) { }

  private buildHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public getPhotos(pageNumber: number): Observable<Photo[]> {
    this.buildHeaders();
    return this._http.get<Photo[]>(`${this.path}?page=${pageNumber}`, { headers: this.headers });
  }
}
