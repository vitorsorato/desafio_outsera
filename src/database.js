const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

const createTable = () => {
  const query = `
    CREATE TABLE movies (
      year INTEGER,
      title TEXT,
      studios TEXT,
      producers TEXT,
      winner BOOLEAN
    );
  `;
  db.run(query);
};

const insertData = (data) => {
const query = `INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)`;
    data.forEach((movie) => {
        const year = parseInt(movie.year, 10);
        const title = movie.title.trim();
        const studios = movie.studios.trim();
        const producers = movie.producers.trim();
        const winner = movie.winner?.trim() === 'yes' ? 1 : 0;

        db.run(query, [year, title, studios, producers, winner], (err) => {
        if (err) {
            console.error(`Error inserting movie: ${title}`, err.message);
        }
        });
    });
};

module.exports = { db, createTable, insertData };
