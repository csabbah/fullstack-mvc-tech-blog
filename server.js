const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/connection');

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
