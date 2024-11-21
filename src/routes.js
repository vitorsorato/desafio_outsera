const express = require('express');
const { db } = require('./database');
const { calculateIntervals } = require('./utils');

const router = express.Router();

router.get('/producers/intervals', (req, res) => {
  db.all(`SELECT * FROM movies WHERE winner = 1`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const intervals = calculateIntervals(rows);

    const min = intervals.filter((i) => i.interval === Math.min(...intervals.map((x) => x.interval)));
    const max = intervals.filter((i) => i.interval === Math.max(...intervals.map((x) => x.interval)));

    res.json({ min, max });
  });
});

module.exports = router;
