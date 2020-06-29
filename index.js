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

app.post('/grades', (req, res) => {
    console.log(req.body);
    if (req.query.id == null || req.query.id === "" )
    {
        res.status(400).send();
    }
    else if (req.query.grade === 'a' ||
        req.query.grade === 'b' ||
        req.query.grade === 'c' ||
        req.query.grade === 'd' ||
        req.query.grade === 'f')
        {
            res.status(200).send(req.query.grade);
            try
            {
                var item = db.Find(req.query.id);
                item.AddGrade(req.query.grade);
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