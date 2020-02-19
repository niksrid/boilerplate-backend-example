const {writeFileSync} = require('fs');
const Sequelize = require('sequelize');
const sequelizeErd = require('sequelize-erd');
const db = require(`${__dirname}/../database/models`)['sequelize'];
  (async function(){
  // Import DB models here
  console.log(db);
  const svg = await sequelizeErd({
    source: db,
  }); // sequelizeErd() returns a Promise
  writeFileSync('./erd.svg', svg);

  // Writes erd.svg to local path with SVG file from your Sequelize models
})();