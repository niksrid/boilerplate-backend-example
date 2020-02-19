<p align="center">
  <a href="" rel="noopener">
 <img width=80px src="https://boilerplate.in/webassets/images/logo.gif" alt="Project logo"></a>
</p>

<h3 align="center">Boilerplate Backend Templates</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
Backend API Boilerplates using PostgreSQL, Node.js, Sequelize and Express.js
    <br> 
</p>

##  Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

##  About <a name = "about"></a>

This project acts as a basic Boilerplate for our API-based applications, allowing us to rapidly prototype our systems.

-----

##  Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

------

### Prerequisites

* [PostgreSQL (v12.x)](https://www.postgresql.org/docs/12/tutorial-install.html)
* [Node.js (v12.x)](https://nodejs.org/en/download/)
* [npm (Node Package Manager) (v6.x.x)](https://nodejs.org/en/download/) 
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli)

 Sequelize CLI can be installed locally for the project, however that will require you call any command using  ```./node_modules/.bin/sequelize``` so I would suggest installing sequelize-cli globally with the ```-g``` flag. 
```
npm i -g sequelize-cli
```

#### Optional

You may also chose to install [nodemon](https://www.npmjs.com/package/nodemon), a package that will automatically restart your server (in this case your ```index.js``` file) whenever a change is saved in the project. To do this, run
```
npm i -g nodemon
```
Installing it globally allows you to call ```nodemon``` on any Node.js file for it to listen to changes.

-----
### Installing

A step by step series of examples that tell you how to get a development environment running.


1. Clone the git repo

2. Install all the dependencies for the project

        npm i

3. Make sure that your PostgreSQL server is up and running on port 5432 and your USER is granted the necessary permissions and roles.

    You can check out the necessary steps to do this [here](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/). Only follow this up till the CREATE DATABASE step.

4. Once you have PostgreSQL up and running, make sure you change your ```config.json``` file located [here](database/config/config.json) to reflect your appropriate URL, usrename, password and database name.

5. To update the relevant tables and associations in your database, you will have to run
    ```
    sequelize db:migrate
    ```
    This will let Sequelize know that you have pending migrations that you would like to push to your PostgreSQL database. (Click here to learn about Migrations).

6. Run the Node app by calling 
    ```
    npm start
    ```

    This will start the server on localhost:3000. You should be able to open this in your browser to see the following
    ```
    {
        "data": {
            "message": "Welcome to the beginning of nothingness."
        },
        "diag": {
            "time": 1582115411811,
            "formatT": "2020-02-19T12:30:11.811Z",
            "sentBody": {}
        }
    }
    ```

    You have succesfully run the app! Please make sure you follow the below guidelines before you begin development.


End with an example of getting some data out of the system or using it for a little demo.

## Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

##  Usage <a name="usage"></a>

Add notes about how to use the system.

##  Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

##  Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

##  Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

##  Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
