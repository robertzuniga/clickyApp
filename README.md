Clicky Game
===========

Overview
--------

This is a memory game using React. The application's UI is divided into
components: manage component state, and respond to user events.

1.  Created a new React application using [Create React
    App](https://github.com/facebookincubator/create-react-app).

2.  The application renders 12 different images to the screen.

>   Each image should listen for click events.

3.  The application keeps track of the user's score.

>   The user's score is incremented when clicking an image for the first time.

>   The user's score resets to 0 if they click the same image more than once.

4.  Every time an image is clicked, the images rendered to the page should
    shuffle themselves in a random order.

5.  Once the user's score is reset after an incorrect guess, the game will
    restart.

6.  This app is deployed to Github Pages.

"dependencies": {

"axios": "\^0.19.0",

"react": "\^16.9.0",

"react-dom": "\^16.9.0",

"react-router-dom": "\^5.0.1",

"react-scripts": "3.1.1"

},
