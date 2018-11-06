# IBM-NASA exercise

This project was developed as a response to an exercise requested by IBM.

## What does this project do
- `Loads photos` - Loads photos from NASA account on flickr
- `Infinite Scrolling` - uses infinite scrolling technique. That is; will keep loading new photos upon scrolling down the web page
- `Search` - Searches for photos. Search will target photos title, tag, and description
- `Filter` - Filters photos. Filters existing photos on the web page through title-like match. When applying filtering on the photos it will disable `Infinite Scrolling` until the filter text is cleared out

## Node.js Server
The `server.js` file and the `server` folder represent the backbone of this project. The server does both `get` and `post` http calls.
- The `[get]` `api/photos` endpoint takes two parameters `page`, and `per_page` and returns photos for the NASA flickr user id
  - `page` is from what page to start loading photos
  - `per_page` number of photos to return per page
- The `[post]` `api/photos` endpoint is the search endpoint for the project. It takes three parameters `searchText`, `page`, and `per_page` and returns photos for the NASA flickr user id
  - `SearchText` string to search for (searches in the photos titles)
  - `page` is from what page to start loading photos
  - `per_page` number of photos to return per page

## Pre-Requisites
- Node.js -- Currently using v10.13.0

## How to run the project?
- Navigate to the project directory
- Run `npm install` to get the required modules from npm feed
- Run `ng build` to build the project. This will generate the artifact `dist` folder
- Run `node server.js` to host the nodejs server
- Finally; Navigate to http://localhost:4600 

## UI framework
- The tool uses `angular6` as the frontend framework (typescript 3.1.3)
- The tools uses the `primeng` components

## Contact me?
Do you have any questions? Don't hesitate to contact me at rami(dot)shareef(at)gmail(dot)com
