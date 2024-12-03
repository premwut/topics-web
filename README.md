This web project is a part of DataWow assignment.

## Application
### Authentication
This application receives username and store username in session storage for identification
### Architecture
Due to the design choice that is using session storage, this application mostly using client side rendering due to the limitation.
### Routes
- `/login` - a login page
- `/topics` - fetch and display all posts, create a new post
- `/topics/:topicId` - (Unfinished) Display specific post and its comment 

## Dependencies
- `@emotion/styled` - using styled-components for styling
- `@mui/material` - Material UI for creating some components quickly

## How to test

This project requires a running server on the same local machine. Server will be hosted in [http://localhost:8000](http://localhost:8000)
- Clone the server repository and start server: [https://github.com/premwut/topics-service](https://github.com/premwut/topics-service)
- Start this web server by `npm run dev` and go to [http://localhost:3000/login](http://localhost:3000/login)