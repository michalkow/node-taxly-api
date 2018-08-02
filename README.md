# node-taxly-api
A Node.js wrapper for the Taxly REST API

## Install

`npm install taxly-api --save`

## Usage

```
import TaxlyApi from 'taxly-api';

const taxly = new TaxlyApi({ key: 'YOUR-API-KEY', token: 'YOUR-API-TOKEN'});

// Creating new client example

taxly.newClient({
  details: {
    userID: 1,
    clientName: "Acme International",
    clientNIP: "123456789",
    clientStreet: "1st Street",
    clientStreetNumber: "123",
    clientZipCode: "20018",
    clientCity: "Los Angeles",
    clientCountry: "United States"
  }
})
```

All the methods are named the same way as API endpoint, but camel cased (e.g., NewClient is newClient).
For documentation visit [Taxly.pl](https://www.taxly.pl/)

## Disclaimer

This is a third party library not developed by [Taxly.pl](https://www.taxly.pl/)

