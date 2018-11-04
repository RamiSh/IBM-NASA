# IBM-NASA exercise

This project was developed as a response to an exercise request from IBM.

## How to run the project?
- Navigate to the project directory
- Run `npm install` to get the required modules from npm feed
- Run `ng build` to build the project. This will generate the artifact `dist` folder
- Run `node server.js` to host the nodejs server
- Finally; Navigate to http://localhost:4600 

## What does this project do
- Loads data from NASA account on flickr
- The app will use infinite scrolling technique. That is; will keep loading new photos upon scrolling down the web page
- `Search`: you will be able to search for photos with titles containing specific words

## Node.js Server
- The `api/photos` endpoint takes two parameters `page`, and `per_page` and returns photos for the NASA flickr user id
  - `page` is from what page to start loading photos
  - `per_page` number of photos to return per page
- The `api/photos/search` endpoint takes three parameters `keyword`, `page`, and `per_page` and returns photos for the NASA flickr user id
  - `keyword` string to search for (searches in the photos titles)
  - `page` is from what page to start loading photos
  - `per_page` number of photos to return per page
