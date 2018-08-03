# My neighborhood map
_A single page application featuring a map of my neighborhood._
To view the application online, go to https://kasyanovamg.github.io/neighborhood-map/

#### API used:
* Google maps
* Foursquare (provides all the data)

#### Technology used:
* React
* Redux
* Preprocessor: SASS
* Webpack (module bundler)

#### How to run:

* Development:
  * using npm
  ```$ npm install ```
  ```$ npm start ```
  * using yarn
  ```$ yarn ```
  ```$ yarn start ```
  
Navigate to http://localhost:3000/ or wait untill browser opens the page itself.

* Production:
  * using npm
  ```$ npm install ```
  ```$ npm run build ```
  * using yarn
  ```$ yarn ```
  ```$ yarn build ```
  
Run ```$ yarn global add serve```, then ```$ serve``` and open http://localhost:5000/ to view the production build.
   
  


In **production build** it includes a service worker so that the app loads from local cache on future visits.
