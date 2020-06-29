var studentdb = require("./studentDB");
var student = require("./student")
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

var db = new studentdb();
db.Add("bob");
db.Add("sally");
db.Add("joe");
db.Add("bobjr");
db.Add("karen");


app.get('/students', (req, res) =>
{
    if (req.query.search == null || req.query.search === "")
    {
        res.json(db.ListNames());
    }
    else
    {
        res.json(db.FindByName(req.query.search))
    }
})

app.get('/students/:id', (req, res) => res.json(db.Find(req.params.id)));

app.get('/grades/:studentId', (req, res) =>
{
    res.json(db.Find(req.params.studentId).GetGrades());
})

app.post('/register', (req, res) => {
    // check email and username valid before sending 200
    res.status(201).send();
})

app.post('/grades', (req, res) => {
    console.log(req.body); // json parse error not sure why

    if (req.body.studentId == null || req.body.studentId === "" )
    {
        res.status(400).send();
    }
    else if (req.body.grade === 'a' ||
        req.body.grade === 'b' ||
        req.body.grade === 'c' ||
        req.body.grade === 'd' ||
        req.body.grade === 'f')
        {
            try
            {
                var item = db.Find(req.body.studentId);
                item.AddGrade(req.body.grade);
                res.status(200).send();
            }
            catch
            {
                res.status(404).send();
            }
        }
        else
        {
            res.status(400).send();
        }
})
app.listen(port, () => console.log('app listening at http://localhost:${port}'));