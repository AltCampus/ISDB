# ISDB

ISDB is a startup information web app, that aims at providing mechanism for user to get the information about all the startups, and also find out startup information according to their need. On this platform user can make their favourite startup list, and all other interaction that helps them to get the better information on startups.
You can find the project's wireframe below which depicts the basic flow of our web application.

## Project Wireframe



## Get Started
ISBD consists of two part like all web application.  
* Frontend - React, Redux, SCSS
* Backend - Node, MongoDB, Express

## Color Pallet

TBD

## Class Convention

TBD

## Font-Families

TBD

## Learn About Folder Structure 
``` 
Note : The folder structure may changes i.e we may include/exclude some folders/files as project progresses but the overall sructure will remain as presented below:
```

### Backend Part
All server related files are in './server'.
* '/controllers' --  Methods to interact with DB and reflects the data on views.
* '/models' -- MongoDB collections schema
* '/modules' -- Contains all the modules that is going to necessary for applications behaviour like passport.js
* 'views' -- Apllication related htmls files related to application routes
* '/db' -- MongoDB Driver code to be used in application
* './app.js' -- Contains the application main server related code

### Frontend Part

All client related files are in './client/src'

* './components' -- This folder contians components presented on website when App is rendered that can be seprated into two categories that are presentational(static) components and container(dynamic) components.

* './actions' -- This folder contain all the actionCreators( events like onClick).

* './reducers' -- contains reducer(method) which will act upon actions being recieved. 

* './store' -- it contains createStore keeps state tree of app and is single source of truth.

* './App,js' -- entry point and will render root element where app lives.

### Common To Both Frontend and Backend
* package.json -- Contain all the packages for the application
* eslintrc.json -- Contain all the configuration of styling javascript. Using Airbnb style-guide for linting(like checking tab spaces and semi-colons).

## Packages Used
All packages can find in `./package.json`.
```
Note : Packages are not confirmed yet. They might can be changed.
```
### Frontend Packages

* `react-redux` -- Used for connecting react with redux via connect.
* `redux` --  Used for creating store .
* `react-router-dom` -- used for routing to render components on routes(from  '/'(home) ->  to '/nav' or -> '/').
* `redux-thunk` -- Is a middleware to retrive data from another source.
* `node-sass` --  Used for compiling scss or sass to css.


### Backend Packages
* `nodemon` -- Used for live server reloading.
* `express` -- express framework for backend.
* `pug` -- View engine for backend.

### Necessay Packages for bundling and transpiling
* @babel/plugin-proposal-class-properties
* @babel/preset-react
* css-loader
* file-loader
* mini-css-extract-plugin
* sass-loader
* style-loader
* svg-inline-loader
* webpack-cli
* webpack-dev-server
* webpack-hot-middleware

### Common Packages to both Frontend and Backend
* eslint
* eslint-config-airbnb-base
* eslint-plugin-import

## Bundle and Transpiler
* webpack -- Configuration file path is `./webpack.config.js`. Used for bundling frontend for serving it into backend.
* babel -- Configuration file path is `./babelrc`. Used for transpiling all the ES6 and above syntax into ES5.

## How to launch the app locally?
* 1 -- Fork the project repo and clone it in your local directory.
* 2 -- Download and install Node(latest stable version) (npm comes along with node).<br/>
-- [Node](https://nodejs.org/)<br/>
-- [NPM](https://www.npmjs.com/)
```
verify with below command
>>>node -v
>>>npm -v
```

* Make sure you run all your commands inside cloned /ISDB folder
* 3 -- Install the npm modules from the package.json
```
>>> npm install
this command installs all the node related packages required to run the app locally in 
/node_modules folder. You can see this folder inside /ISDB folder after running npm install
```
* 4 -- Launch the application using below command:
```
>>> npm install -g nodemon
>>> npm start
The application will be running at http://localhost:8001 URL
```
![alt text](./app-images/start.png)

* 5 -- No more steps
```
Now you don't need to repeat above steps always to run the app rather its one time task.
But if you clone the project in new location then again you need to repeat step 3(only).
```

## How to Contribute?
* 1 -- First just fork the repo.
* 2 -- Clone your local forked repo using `git clone https://github.com/__your_user_name__/ISDB.git`
* 3 -- Now go cloned folder and open a terminal then run `git branch`.
```
* => master
* 'development'
```
* 4 -- Now checkout ot the **development** branch by running `git checkout master`.
* 5 -- Now, You have to make your branch. So, their are some certain rule while making your branch.<br>
-- You have to write name's first letter and then feature name. You can create it by running

```
git checkout -b name's_first_letter-Feature_name
// example => git checkout -b PKS-API_EndPoints
```
* 6 -- Now make the changes in your branch by running `git push origin your_branch_name`.
* 7 -- Then make a PR from their. If you don't know to make a PR the go to this [link](https://help.github.com/articles/creating-a-pull-request/).

## How to get connected with the main repo?
Before start working on you forked repo, make sure to sync it with parent repo.
* 1 -- Now before we start, you have to add parent git repo as remote with a name (like we have added remote origin for our forked repo). Eg let’s give remote parent a name upstream.
```
git remote add upstream https://github.com/AltCampus/ISDB.git
```
* 2 -- Go to the development branch using `git checkout development` and run `git pull origin upstream`.
* 3 -- Came back to your branch using `git checkout your_branch_name` and the run again `git pull origin upstream`.
* 4 -- In case you can't checkout to the **development** then that means you have something that is not committed. If it's necessary then first commit it then checkout **development** otherwise run `git stash -u` then checkout to the **development**.
