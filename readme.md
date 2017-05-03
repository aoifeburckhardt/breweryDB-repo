# Features
- Beer list on load
- Searchable Beers
- Searchable Breweries
- Detailed beer section (including label, if organic, alcohol level)
- Other beers by brewery
- Random beer on load
- Random beer button
- Filter current beer list (Progressive)

![screenshot](https://cloud.githubusercontent.com/assets/28321134/25643961/ae94ec54-2f9a-11e7-845b-907b02d9ad9c.png)

# Set up

To run this app make sure that npm is installed on your device(https://www.npmjs.com/get-npm)

**Start the app**

1. Navigate to the folder you want to place the app in.
2. Run this command: git clone https://github.com/aoifeburckhardt/distilled-sch-aburckhardt.git
3. Navigate to distilled-sch-aburckhardt
4. Run the following commands one by one:
- npm install
- npm install -g gulp
- gulp start

The server will start and the browser with open automatically.

# Technical Summary

- This app was built with AngularJS v1.6.4, Bootstrap v3.3.7.
- Gulp is used as a task runner to:
           1. Copy third party libraries to the asset folder
           2. Serve the app through a proxy (using BrowserSync)
- The app connects with BreweryDB API
- The app is responsive (although no specific design has been done for mobile).
- The unit tests are performed with the Jasmine test framework, using Karma (test runner) and Grunt (task runner).

# Unit tests

1. Run the following commands one by one:

- npm install -g grunt
- grunt karma:unit

# If I had more time

- Handle the slow loading of data from BreweryDB with loading visualisation or caching
- Add further protections for if the API changes and retrieves unexpected data
- More comprehensive unit tests
- End to end testing with protractor
- UI optimisation for mobile (Although the UI is already responsive).
- Directives - This app is only one view now but if it extended then some useful reusable components would be the detailed beer view, a search result item
- Minify JavaScript using gulp
- Use gulp to run the unit test instead of grunt
- Store the API key as a const for easy re-use