# League of Legends Stats Web App

This is a (very) simple web demonstrating communication with the LOL API provied by Riot.


[The web service can be found here](https://github.com/ex1machina/league-service)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7

### Developing

1. Run `npm install` to install dependencies.

3. Run `npm start` to start the webpack dev server. It should automatically open the client in your browser when ready. Hot reload is enabled so code changes that affect initial application state will require refreshing the page manually.

### Architecture
This client is built using Redux and React that replaces traditional MV* architecture. Here's a breakdown:

#### Stores
This folder contains the redux store

#### Actions
Contains action creators that can be dispatched to the store to modify application state

#### Reducers
Reducers handle incoming actions and are pure functions that return new instances of the store with new state

#### Components
React components that are unaware of redux

#### Containers
Redux-aware react components that have been injected with action dispatch methods and store state data via `react-redux`

## Build & development

Run `npm run dist` for building. The `dist` folder will contain the built application.

## Testing

Running `npm run test` will run the unit tests
