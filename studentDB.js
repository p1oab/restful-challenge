var student = require("./student");

class StudentDB {
    constructor() {
        this.Students = []
        this.idGen = 0
    }

    Add(name) {
        this.idGen++;
        this.Students.push(new student(name, this.idGen));
    }

    ListNames() {
        var names = [];
        this.Students.forEach((val) => names.push(val.Name));
        return names;
    }

    Find(id) {
        return this.Students[id]
    }

    FindByName(name) {
        var found = [];
        this.Students.forEach((val) => {
            var str = val.Name;
            if (str.includes(name))
            {
                found.push(val);
            }
        })

        return found;
    }
}

module.exports = StudentDB