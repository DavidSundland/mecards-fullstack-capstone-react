# mE-Card Capstone
Thinkful React Capstone

## Background

I built this app because I often buy gifts on-line, want to be able to send an accompanying e-card, and am unsatisfied with the existing free e-card options.  This app provides a simple interface with which a user can quickly create a custom e-card, and then generate a unique, shareable URL for the final product.
Live preview available at: https://mecards-fullstack-capstone.herokuapp.com/.

## User Story
This app allows users to create e-cards which they can share with others.  The user can do a keyword search for background photos, add custom header, body, and/or footer text, and easily change each font type, color, size, and style.  Borders can be added to the image, and the background color changed.  Once a card has been completed, the user can save the card and is given a unique URL that can be shared for the final product.

As a user, I want to quickly create attractive, custom e-cards that I can share with others:
![main page wireframe](/public/images/mecard-wireframe-1.jpg)

The landing page:
* User sees a header, a quick description of the site and a log-in form.
* Returning users can sign in; new users can click the "new user" button to create a username and password.

The card editor:
* User can enter a search term for the background photo.
* Once images are retrieved, "Prev Image" and "Next Image" buttons appear, and user can choose from available photos.
* The user can type custom text for the header, body, and/or footer.  The text in the preview image changes as a user types in each input box.
* The user can change the type, color, size, and shadow of each font individually.
* If the user wants a border, the user can choose from different border styles, colors, and sizes.
* The user can preview the card in full screen.
* Once the user is satisfied, the user can save the card and is given a link to a static copy of the card.

The card list:
* Once a user has 1 or more saved card, they can retrieve cards from the list and edit them.
* The list is automatically offered for returning users with saved cards; the user can also navigate to that page from the card editor.
* The card list displays the card's background photo and header, and an "edit" button to retrieve the card.

## Working Prototye
A live example of the project with Node can be found at: https://mecards-fullstack-capstone.herokuapp.com and with React at https://davidsundland.github.io/mecards-fullstack-capstone-react/build.


Screenshot of landing page:

![landing page screenshot](/public/images/login-screenshot.jpg)

Screenshot of card editor:

![card editor screenshot](/public/images/card-editor-screenshot.jpg)

Screenshot of card list:

![card list screenshot](/public/images/card-list-screenshot.jpg)

Screenshot of card preview:

![card preview screenshot](/public/images/card-preview-screenshot.jpg)

## Functionality
This app's functionality includes:
* Users can create accounts to save and share cards.
* The background image, text, fonts, and borders are all customizable.
* Card previews and final card dimensions dynamically adapt to best fit photos of any proportions to a user's browser width.
* Each saved card has its own unique URL; the URL is copied to a user's computer clipboard with a click.

## Technology
* HTML
* CSS
* JavaScript
* jQuery
* Node
* Express
* Mongo

## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Node command lines
* npm install ==> install all node modules
* nodemon server.js ==> run node server
* npm test ==> run the tests

## React command lines
* npm install ==> install all node modules
* npm run build ==> build the react files in the "build" folder
* npm start ==> run react server on http://127.0.0.1:8080
* npm test ==> run the tests
