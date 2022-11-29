# Petstagram

<img width="80%" src="./frontend/src/assets/images/preview.png" alt="petstagram" />

<br />

## Goals

The main goal of this application is to help users keep all information about their pets in one place, for example vaccination calendar, appointments time and list of medicines.

This app also provides a platform to create your own community of other pet owners and pets. Users can create a pet profile, upload some photos and share their memorable moments with others.

There are no obvious social media apps on the market specific for the pet owner, you can still use other services like Facebook, Instagram, Meetup and so on, but those are more focused on human lives instead of the pets. Therefore, pet owners end up join a private group for their meetups, sharing posts about their pets, and so on.

Succinctly, it's a social media for pet owners with some peripheral features which make it easy to keep track of details related to their pets health and wellbeing.

## How to run this application

Please clone this repository and run these commands:

```
npm install or npm i or npm ci
cd frontend
npm install or npm i or npm ci
cd ..
npm run dev (To run both the server and the client at the same time)
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

## List of Used Packages and Reasons

<h3>:star: List of Back End Packages Used</h3>
<a href="https://github.com/dcodeIO/bcrypt.js">bcryptjs</a>
This is to hash passwords to encrypt the raw password received from user for storing it to the database.
<br/>
<a href="https://github.com/Marak/colors.js">colors</a>
This makes the console messages colourful so that we can catch things what's going on easily
<br/>
<a href="https://github.com/motdotla/dotenv">dotenv</a>
With this package, I can load environment variables from a .env file into process.env.
<br/>
<a href="https://expressjs.com">express</a>
express is a framework of node.js which makes the job so much easier
<br/>
<a href="https://github.com/Abazhenov/express-async-handler">express-async-handler</a>
Instead of using Promise .then .then .then, enables me to use async await for the back end.
<br/>
<a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a>
We used JWT for user authorisation. Once the front end gets the response, stores the info to the localStorage to persist the login status.
<br/>
<a href="https://github.com/Automattic/mongoose">mongoose</a>
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
<br/>
<a href="https://github.com/open-cli-tools/concurrently">concurrently</a>
Run multiple commands concurrently.
<br/>
<a href="https://github.com/remy/nodemon">nodemon</a>
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

<h3>:star: List of Front End Packages Used</h3>
<a href="https://redux-toolkit.js.org">Redux and Redux Toolkit</a>
In order to use Redux, using Redux Toolkit is strongly recommened by the Redux developers that is stated on the documentation.
<a href="https://redux.js.org/style-guide">Redux Style Guide</a>
<br/>
<a href="https://github.com/axios/axios">axios</a>
Promise based HTTP client for the browser and node.js
<br/>
<a href="https://daisyui.com">daisyui</a>
daisyui is a tailwind CSS plug in that makes us to use their existing components, so that for normal situations, I can still use tailwind CSS utility classes to create my own component, and then go for daisyui when I need some components.
<br/>
<a href="https://www.npmjs.com/package/react-icons">React Icons</a>
React Icons for using svg icons.
<br/>
<a href="https://www.npmjs.com/package/react-toastify">React Toastify</a>
This is to have a little toast message to notify users.
<br/>
<a href="https://github.com/remix-run/react-router">react-router-dom</a>
This is for react routing.
<br/>
<a href="https://www.typescriptlang.org">TypeScript</a>
For more secure, less error prone working environment. (However, we used lots of "any" to just get things done).

## Design Pattern

We followed MVC pattern for the application. We have our frontend (react) as view and have separate controllers for each model. We created models for each too.

## Software Development Life Cycle

We chose agile methodology with kanban framework over scrum since we only had 2 ~ 3 working days. No sprints needed, we just created a big kanban board on Trello. The link is below:
<br/>
<a href="https://trello.com/b/HxjdLuSt/quack-quack-ezyvet-csea-graduate-hackathon">Trello Board</a>

<h3>:star: Design Inspiration</h3>
<a href="https://meetup.com">Meetup</a>
<br/>
<a href="https://www.facebook.com">Facebook</a>
<br/>
<a href="https://www.instagram.com">Instagram</a>
<br/>
<a href="http://www.snapchat.com">Snapchat</a>
