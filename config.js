var config = {};
config.flickr = {};
config.flickr.api = {};

config.flickr.page = 1;
config.flickr.perPage = 5;
config.flickr.apiKey = 'a5e95177da353f58113fd60296e1d250';
config.flickr.userId = '24662369@N07';

config.flickr.api.baseUrl = 'https://api.flickr.com/services/rest/?method=';
config.flickr.api.peoplePhotoUrl = `${config.flickr.api.baseUrl}flickr.people.getPublicPhotos&api_key=${config.flickr.apiKey}&user_id=${config.flickr.userId}&format=json&nojsoncallback=1`;
config.flickr.api.searchPhotoUrl = `${config.flickr.api.baseUrl}flickr.photos.search&api_key=${config.flickr.apiKey}&user_id=${config.flickr.userId}&format=json&nojsoncallback=1`;

module.exports = config;
