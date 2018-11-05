import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Photo } from '../modules/photo-module';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})

/**
 * A service handles operations on the Photo object.
 */
export class PhotosService {

  private headers: HttpHeaders;
  path = `${environment.apiRoot}/api/photos`;

  constructor(private _http: HttpClient) { }

  /**
   * Builds the commonly used headers for http requests.
   */
  private buildHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  /**
   * Returns an observable of Photo[] containing photos from NASA Account on flickr.
   * @param pageNumber Starting page
   */
  public getPhotos(pageNumber: number): Observable<Photo[]> {
    this.buildHeaders();
    return this._http.get<Photo[]>(`${this.path}?page=${pageNumber}`, { headers: this.headers });
  }

  /**
   * Searches through NASA's public photos on flickr. This will search photos title, tag, and description.
   * @param pageNumber Starting page.
   * @param searchText Text to search for
   */
  public searchPhotos(pageNumber: number, searchText: string): Observable<Photo[]> {
    this.buildHeaders();
    return this._http.post<Photo[]>(`${this.path}?page=${pageNumber}`, {searchText : searchText}, httpOptions);
  }
}
