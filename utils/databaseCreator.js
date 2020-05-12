const db = require(`${__dirname}/../database/models`)['sequelize'];

db.sync();
