# Boilerplate Backend Template
Version 0.1-alpha

Using [PostgresSQL](https://node-postgres.com/), [Sequelize](https://sequelize.org/), Express.js and Node.js




## Folder Structure

```
.
├── index.js
├── package.json
├── database
│   ├── config (auto-generated)
│   ├── migrations (auto-generated)
│   ├── models
│   └── seeders (auto-generated)
├── server
│   ├── controllers
│   ├── routes
│   └── services
└── utils

```

Diving into our directory structure,

```database```: Holds sequelize based automatically generated data. Please change the config.json file in order to link it to your server.

    sequelize init

The above command automatically initializes the folder listed below based on the path and settings defined in .sequelizerc file in the root of the project.    

**Database**

```1. config```: Holds the ```config.json``` file
        This folder and file is automatically generated. Holds your database server login info and URL for all your environments.

 ```2. migrations```: Holds generated migrations. Migrations are a set of commands to perform operations on your tables / columns or fields in your database. Migrations are automatically generated with 

    sequelize generate:model

which generates a migration file following its corresponding model. [Example here](blob/master/database/migrations/20200217195542-create-todo-item.js)

    sequelize migration:generated

generates an empty migration file which can be edited to perform any operations on your database or table. [Example here](blob/master/database/migrations/20200218111842-todoitem-assoc.js)



