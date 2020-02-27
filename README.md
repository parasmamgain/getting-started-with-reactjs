# getting-started-with-reactjs
this repo maintains the code-base for getting started with reactJs


Its a javascript library to create a single page web application. 

Some good to know pre-requisites before learning React JS are as follows:
1. Javascript
2. CSS + SCSS
3. ReactJs
4. Responsive Design
    - bootstrap
    - semantic UI
    - CarbonDesign -IBM
    all 3 uses internally some grid system
css offers a vanila css however bottstrap etc offers customized angular and reacjs components
5. Carbon Design



#### Browsers and there Compilers :
There are difference ECMA Script engines and some of these engines uses JIT(just in time) compiler while some uses runtime interpreters.
In some case AOT(ahead of time) compilers are also used, usually in production deployment or similar scenario.

1. Google Chrome uses v8 javaScript engine 
2. firefox uses (spiderMonkey[https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey]. SpiderMonkey is Mozilla's JavaScript engine written in C and C++.
3. IE uses chakra. Chakra is a JavaScript engine developed by Microsoft for its Microsoft Edge web browser. It is a fork of the JScript engine used in Internet Explorer. 


- NodeJS is javascrtipt runtime build with V8, little difference between nodeJS and javascript. Overall its same.

- traspilers like BABEL, typescript etc used by the javascript, basically it takes the source code and gives output as the source code making it compatible with difference browsers.
- all modern browsers uses some source of transpiler to handle cross-browser compatibility.

- ECMA maintains standard for javascript.
  ECMAScript is a scripting-language specification standardized by ECMA International. It was created to standardize JavaScript to help foster multiple independent implementations.
- In Short, Javascript is an implmentation of the ECMAScript standard.

- w3 maintains standard for HTML, world wide web consortium(W3C).
- angular uses typescript, only difference is in typescript er define the type of object however nothing such is required in case of javascript, reactjs supports both typescipt and javascript.

### Installations/Pre-requisite Softwares and tools :
In order for you to use ReactJs, you would require NPM and Nodejs installed.
1. Install latest Node Js (https://nodejs.org/en/download/)
2. Install IDE(prefarabily MS Visual Code)
    -- open VIsual code IDE and `install LiveServer` extension from the extension tab.


#### Setting up a React Environment

  1. Run `npm install -g create-react-app` to install create-react-app.
  2. Now you can use the tool installed above to create a react application/project
    2.1. `create-react-app firstproject` or 
    2.2. `create-react-app firstproject template typescript`
    to create a reactjs application (including directory layout etc)
  NOTE: bydefault react uses javascript but if you want to use typescript then use the notation mentioned in the step 2.2 and add flag `template typescipt` as mentioned above.
  3. To run the application cd into the directory like `cd firstproject`
  4. and execute `npm start`
  5. your default browser will now pop up with a page, If not then open your browser and open `localhost:3000` and you should now be able to see the default react app running.

      -- development we use --> JIT : just in time compiler 

      -- production  we use --> AOT : ahead of time compiler 


  #### Redux:
cd day3/carbonone

  Redux depends on two parameters names as reducers and actions... reducers are the states that get varied based on the actions defined.
  to get started with reduc installing the following packages
  -- npm install redux
  -- npm install react-redux

  #### using reactjs and carbondesign together
  create a new project
  $ create-react-app carbonone
cd day3/carbonone
Install the following
1. npm install carbon-components-react
2. npm install carbon-components
3. npm install carbon-icons
4. npm install @carbon/grid
5. npm install node-sass


- once these are installed rename the file index.css to index.scss and update its reference in the index.js

- modify the index.scss to the file as uploaded in the github repo under the folder day3/carbonone
`npm install carbon-components-react
npm install carbon-components 
npm install carbon-icons
npm install @carbon/grid
npm install node-sass 
Rename the provided index.css file to index.scss
Inside of index.scss, import for the styles from carbon-components. 
@import '~carbon-components/scss/globals/scss/styles.scss';
Update our index.js file to import index.scss instead of index.css
index.js
import './index.scss';
Using a Carbon component
