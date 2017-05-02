**Introduction**

- This app was built with AngularJS v1.6.4, Bootstrap v3.3.7.
- Gulp is used as a task runner to
           1. Copy third party libraries to the asset folder
           2. Serve the app through a proxy (using BrowserSync)
- The app connects with BreweryDB API
- The app is responsive.
- The unit tests are perform with the Jasmine test framework, using Karma (test runner) and Grunt (task runner).

**Set up**

To run this app make sure that npm is installed on your device(https://www.npmjs.com/get-npm)

**Start the app**

1. Navigate to the folder you want to place the app in.

2. Run the following commands one by one:

git clone https://github.com/aoifeburckhardt/distilled-sch-aburckhardt.git
npm install
npm install -g gulp
gulp start

** Unit tests **

1. Run the following commands one by one:

npm install -g grunt
grunt karma:unit

**Features**
- Beer list on load
- Searchable Beers
- Searchable Breweries
- Detailed beer section (including label, if organic, alcohol level)
- Other beers by brewery
- Random beer on load
- Random beer button
- Filter current beer list (Progressive)

**If I had more time**

1. Handle the slow loading of data from BreweryDB with loading visualisation or caching
2. Add further protections for if the API changes and retrieves unexpected data
3. More comprehensive unit tests
4. End to end testing with protractor
5. UI optimisation for mobile.