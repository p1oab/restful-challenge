var express = require('express')
var router = express.Router();
const db = require('./db');
const {response} = require('./app');
const { query } = require('./db');

router.get('./top5', (req, res, next) =>
{
    db.query('SELECT * FROM movies LIMIT 5', (err, results) =>
    {
        if (err) {
            console.log(err.stack);
        }
        else {
            res.status(200).json(results.rows);
        }
    })
})