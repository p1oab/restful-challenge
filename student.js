class Student {
    constructor(name, id) {
        this.Name = name;
        this.Id = id;
        this.Grades = []
        this.Grades.push(String.fromCharCode((id%6) + 97));
    }

    AddGrade(grade) {
        this.Grades.push(grade);
    }

    GetGrades() {return this.Grades}
}

module.exports = Student