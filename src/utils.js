const fs = require('fs');
const csv = require('csv-parser');

const parseCSV = (path) => {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(path)
        .pipe(csv({ separator: ';' })) // Define o delimitador como ponto-e-vírgula
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (err) => reject(err));
    });
  };

const calculateIntervals = (winners) => {
  const producers = {};

  winners.forEach((movie) => {
    movie.producers.split(',').map((producer) => {
      const trimmedProducer = producer.trim();
      if (!producers[trimmedProducer]) producers[trimmedProducer] = [];
      producers[trimmedProducer].push(movie.year);
    });
  });

  const intervals = [];
  Object.keys(producers).forEach((producer) => {
    const years = producers[producer].sort((a, b) => a - b);
    for (let i = 1; i < years.length; i++) {
      intervals.push({
        producer,
        interval: years[i] - years[i - 1],
        previousWin: years[i - 1],
        followingWin: years[i],
      });
    }
  });

  return intervals;
};

module.exports = { parseCSV, calculateIntervals };
