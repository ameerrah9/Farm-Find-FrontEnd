# Fresh-Find-FrontEnd

A web application using JavaScript to render frontend and Rails API to manage backend.

# Back End API

https://github.com/ameerrah9/Fresh-Find-BackEnd

# Features

- Shows ability to make fetch requests to API via AJAX
- Uses vanilla JavaScript to render HTML and CSS elements to the DOM
- Allows user to view items
- Allows user to add new items

# Installation

**To Install Backend**

1. Clone this repo to local machine using terminal ```javascript
   git clone <this-repo>

````
2. cd into ```javascript
fresh-find-backend/fresh-find-backend
``` and run ```javascript
bundle install
``` to install dependencies

3. Run rails db:migrate to create tables

4. Run rails db:seed to generate seed data

5. Run rails s to run server

# Tech Used

- Ruby [2.6.1]
- Rails [6.0.3] - generated as an API only
- Postgresql - database
- Rack-cors - allow for cross-orgin resource sharing
- Fast_json_api - serializer to manage seeded data in json format
````
