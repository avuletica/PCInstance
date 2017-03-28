# PCInstance

PCInstance is responsive web shop application based on MEAN 2 stack with online-storage.

### Tech

PCInstance uses a number of open source projects to work properly:

* [AngularJS](https://angular.io/) - structural framework for dynamic web apps
* [Materializecss](http://materializecss.com/) - a modern responsive front-end framework based on Material Design
* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast, unopinionated, minimalist web framework for node.js
* [Bluebird](http://bluebirdjs.com) - full featured promise library with unmatched performance
* [Mongodb](https://www.mongodb.com/) - open-source cross-platform document-oriented database
* [mongoosejs](http://mongoosejs.com) - elegant mongodb object modeling for node.js

And of course PCInstance itself is open source with a [MIT license](https://github.com/avuletica/PCInstance/blob/master/LICENSE)

### Installation

Install and configure [mongodb](https://docs.mongodb.com/manual/installation/), change uri variable at cart/products/users (located at server/routes) to match your local database mongodb://ip:port/db

```javascript
var uri = 'mongodb://127.0.0.1:27017/pcinstance_db';
``` 

Install and run application:

```sh
$ cd client
$ npm install
$ npm start
$ open new terminal tab
$ cd server
$ npm install
$ npm start
$ Visit http://localhost:8080
```