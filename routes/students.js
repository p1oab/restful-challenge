const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    db.query('SELECT name FROM students', (err, results) =>
    {
        if (err)
        {
            res.status(404).end();
        }
        else
        {
            res.status(200).json(results.rows);
        }
    })
  })

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.query('SELECT * FROM students WHERE id = $1',[id], (err, results) => {
        if (err) {
            res.status(500).end()
        }
        else {
            res.status(200).json(results.rows);
        }
    })
})

module.exports = router