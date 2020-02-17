# Boilerplate Backend Template
### Using [PostgresSQL](https://node-postgres.com/), [Sequelize](https://sequelize.org/), Express.js and Node.js




## File Structure

```
.
├── database
│   ├── config
│   │   └── config.json
│   ├── migrations
│   │   ├── 20200217195524-create-todo.js
│   │   └── 20200217195542-create-todo-item.js
│   ├── models
│   │   ├── index.js
│   │   ├── todoitem.js
│   │   └── todo.js
│   └── seeders
├── server
│   ├── controllers
│   │   ├── index.js
│   │   └── todo.js
│   ├── routes
│   │   └── index.js
│   └── services
│       └── todo.service.js
└── utils
    ├── customResSend.js
    ├── statusCodes.js
    └── statusMessages.js
├── index.js
├── package.json

    ```