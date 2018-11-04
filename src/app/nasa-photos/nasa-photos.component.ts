import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../modules/photo-module';

@Component({
  selector: 'app-nasa-photos',
  templateUrl: './nasa-photos.component.html',
  styleUrls: ['./nasa-photos.component.css']
})
export class NasaPhotosComponent implements OnInit {

  photos: Photo[] = [];
  currentPage = 20;
  throttle = 300;
  scrollDistance = 1;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.getPhotos(this.currentPage++);
  }

  /**
   * Happens when a user scrolls to the end of the web page.
   */
  onScroll() {
    this.getPhotos(this.currentPage++);
  }

  /**
   * Gets and update the list of currently displayed photos.
   * @param page Starting page.
   */
  private getPhotos(page: number): void {
    this.photosService.getPhotos(page).subscribe(photos => {
      if (photos) {
        photos.forEach(p => {
          p.url = `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
        });
        this.photos = [...this.photos, ...photos];
      }
    });
  }
}
