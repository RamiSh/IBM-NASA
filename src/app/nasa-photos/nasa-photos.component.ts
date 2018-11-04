import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../modules/photo-module';

@Component({
  selector: 'app-nasa-photos',
  templateUrl: './nasa-photos.component.html',
  styleUrls: ['./nasa-photos.component.css']
})
export class NasaPhotosComponent implements OnInit {

  photos: Photo[] = [];
  currentPage = 1;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    console.log(this.currentPage);

    this.photosService.getPhotos(this.currentPage++).subscribe(photos => {
      console.log(photos);

      this.photos = [...this.photos, ...photos];
      console.log(photos);
    })
  }

}
