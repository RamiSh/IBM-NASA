import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../modules/photo-module';

@Pipe({
    name: 'photosFilter'
})

/**
 * A custom pipe to handle filtering photos by a specific string.
 */
export class PhotosFilterPipe implements PipeTransform {
    transform(photos: Array<Photo>, filterText: string): Array<Photo> {

        if (!filterText || filterText.length === 0) {
            return photos;
        }
        return photos.filter(p => p.title.toLowerCase().includes(filterText.toLowerCase()));
    }
}
