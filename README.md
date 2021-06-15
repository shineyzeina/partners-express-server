# partnersFinder Server
This is a typescript reactjs app that will allow you to filter partners from a json file. You can set your own coordinates and search for partners around you within a certain kilometers.

## Available Scripts

In the project directory, you can run:

### Buid the libararies
`npm install`

A new folder "node_modules" will be generated in your poject directory.

### Start the server 
`npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser
Basic Example to use the api:
You can filter by organisations. It is working based as matching letters. (Same as like in sql query)
To search partners that are within a certain kms away of you. You need to set your lat and lng on the filter, and the kms radius.
http://localhost:4000/partners?org=&lat=51.5144636&lng=-0.142571&kms=4

