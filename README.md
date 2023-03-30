# Realty Marketplace App

Find and list houses for sale or for rent. This is a project made with React / Firebase v9.

## [Live Demo](https://realty-market-app.vercel.app/)

### Technologies Used 

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="javascript" width="30" height="30"/> </a>  &emsp;    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" width="30" height="30"/> </a>
          
## Usage

### Geolocation

The listings use Google geocoding to get the coords from the address field. You need to create .env and add your Google Geocode API key OR in the **CreateListing.jsx** file you can set **geolocationEnabled** to "false" and it will add a lat/lng field to the form.

### Run

```bash
npm start
```
