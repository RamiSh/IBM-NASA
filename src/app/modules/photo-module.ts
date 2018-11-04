/**
 * Represents a photo object.
 */
export class Photo {
    public url: string;
    /**
     * Initializes a new instance of the Photo class.
     */
    constructor(
        public id: string,
        public title: string,
        public secret: string,
        public server: string,
        public farm: number
    ) {}
}
