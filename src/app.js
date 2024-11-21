const express = require('express');
const { db, createTable, insertData } = require('./database');
const { parseCSV } = require('./utils');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

const init = async () => {
  createTable();
  const movies = await parseCSV('./data/movielist.csv');
  insertData(movies);
};

init();

module.exports = app;
