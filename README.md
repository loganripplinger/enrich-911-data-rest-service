## What is this?
Enriches 911 emergency incident data with weather and parcel data.

## How complete is this?
**This is really only a functioning backend API server.** The frontend is just provided so you don't have to query the site with postman or curl.

## Time spent
This took roughly two to three hours. Most of that time was trying to get the Parcel service to work.

## Screenshots
![Enriched Data](https://raw.githubusercontent.com/loganripplinger/enrich-911-data-rest-service/master/enriched-data.JPG)

## Installation

```bash
# Install dependencies
npm install
```

Choose to either run the API server only or to also spin up the React frontend.
```
# Start the API server only
npm run server
```

```
# Start everything!
npm run dev
```

## How do I use this?
Give the url the filename you want to enrich.

If you run only the server with `npm run server` you can submit get requests to the following url/port,
```
http://localhost:8080/api/incident/F01705150050
```

If you decide to run the frontend just type the filename without an extension into the textbox and click go. This should happen by default when you open the frontend.

![Query bar](https://raw.githubusercontent.com/loganripplinger/enrich-911-data-rest-service/master/query-bar.JPG)

## How do I insert additional incident data?
Put your data into a `.json` file and place into the `/server/data` folder.

## Database
The oldest of all, non-relational document storage aka text files in a folder!
