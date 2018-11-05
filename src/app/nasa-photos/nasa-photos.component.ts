import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../modules/photo-module';
import 'rxjs';
import { map } from 'rxjs/operators'
import { Subscription } from 'rxjs';


/**
 * Generates photos url based on a pre-defined formula.
 */
const generatePhotoUrl = map((photos: Photo[]) => {
  if (photos) {
    photos.forEach(p => {
      p.url = `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
    });
  }
  return photos;
});

@Component({
  selector: 'app-nasa-photos',
  templateUrl: './nasa-photos.component.html',
  styleUrls: ['./nasa-photos.component.css']
})
export class NasaPhotosComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];

  currentPage = 20;
  searchCurrentPage = 1;
  searchText = '';

  throttle = 300;
  scrollDistance = 1;

  isSearchOn = false;

  photosLoaderSubscription: Subscription;
  photosSearchSubscription: Subscription;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.getPhotos(this.currentPage++);
  }

  /**
   * Happens when a user scrolls to the end of the web page.
   */
  onScroll() {
    if (!this.isSearchOn) {
      this.getPhotos(this.currentPage++);
    } else {
      this.search(this.searchCurrentPage++, this.searchText);
    }
  }

  /**
   * Gets and update the list of currently displayed photos.
   * @param page Starting page.
   */
  private getPhotos(page: number): void {
    this.photosLoaderSubscription = this.photosService.getPhotos(page).pipe(
      generatePhotoUrl).subscribe((photos) => {
        this.photos = [...this.photos, ...photos];
      });
  }

  /**
   * Clears the searches results and gets public photos
   */
  private clearSearch() {
    this.isSearchOn = false;
    this.currentPage = 20;
    this.searchText = '';
    this.photos = [];

    this.getPhotos(this.currentPage++);
  }

  /**
   * Occurs when the search button is clicked. Does search.
   */
  private searchButtonClicked() {
    this.isSearchOn = true;
    this.searchCurrentPage = 1;
    this.photos = [];

    this.search(this.searchCurrentPage++, this.searchText);
  }

  /**
   * Searches through NASA's public photos on flickr.
   * @param page Starting page.
   * @param searchTText Text to search for
   */
  private search(page: number, searchTText: string) {
    this.photosSearchSubscription = this.photosService.searchPhotos(page, searchTText).pipe(
      generatePhotoUrl).subscribe((photos) => {
        this.photos = [...this.photos, ...photos];
      });
  }

  /**
   * Occurs when a key is pressed in the search textbox.
   * @param event The pressed key
   */
  public keyPressed(event: any) {
    if (event.key === 'Enter') {
      this.searchButtonClicked();
    }

  }

  ngOnDestroy(): void {
    this.photosLoaderSubscription.unsubscribe();
    this.photosSearchSubscription.unsubscribe();
  }

}
