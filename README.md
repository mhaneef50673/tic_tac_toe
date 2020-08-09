# Tic Tac Toe Game App

## Demo public Heroku Url

This project has been deployed in heroku cloud.

Click on this [Live Demo](https://haneef-tic-tac-toe.herokuapp.com/) to access the project in heroku cloud.

## Project Structure

This project is using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Api Details

Backend Api project was built on Node JS (please refer [project source code](https://github.com/mhaneef50673/tic_tac_toe_api) ) and hosted on heroku in [https://haneef-tic-tac-toe-api.herokuapp.com/api/](https://haneef-tic-tac-toe-api.herokuapp.com/api/)

This project uses the following apis,

| Api        | Description           | method  | live url  |
| ------------- |:-------------:| :-----:| -----|
| api/v1/getLeaderboard     | provides leaderboard data | GET | https://haneef-tic-tac-toe-api.herokuapp.com/api/v1/getLeaderboard |
| api/v1/saveLeaderboard      | saves the game result |  POST | https://haneef-tic-tac-toe-api.herokuapp.com/api/v1/saveLeaderboard |

## UI Component Unit Testing

This project uses [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/) for UI component unit testing

## How to run this project locally

In the project directory, you can run:

### `npm run dev`

or

### `npm run build`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
