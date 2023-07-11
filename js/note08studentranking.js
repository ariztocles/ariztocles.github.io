var students = [
    {
        firstname: "tony",
        lastname: "stark",
        subjects: [
            {
                subjectName: "math",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 3
                    },
                    {
                        term: "2nd quarter",
                        grade: 2.6
                    }
                ]
            },
            {
                subjectName: "science",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 2
                    },
                    {
                        term: "2nd quarter",
                        grade: 3
                    }
                ]
            }
        ]
    },
    {
        firstname: "steve",
        lastname: "harrington",
        subjects: [{
                subjectName: "math",
                grades: [{
                        term: "1st quarter",
                        grade: 4.3
                    },{
                        term: "2nd quarter",
                        grade: 5
                    }]},{
                subjectName: "science",
                grades: [{
                        term: "1st quarter",
                        grade: 3.2
                    },{
                        term: "2nd quarter",
                        grade: 5
                    }]}]},
    {
        firstname: "john",
        lastname: "cena",
        subjects: [{
                subjectName: "math",
                grades: [{
                        term: "1st quarter",
                        grade: 4
                    },{
                        term: "2nd quarter",
                        grade: 2.5
                    }]},{
                subjectName: "science",
                grades: [{
                        term: "1st quarter",
                        grade: 3
                    },{
                        term: "2nd quarter",
                        grade: 3
                    }]}]}
]
var passedStudents = [];

students.forEach((element) => {    
    let gradesPerSubject = element.subjects.map((subject) => {
        return subject.grades.reduce((prev,next) => prev.grade + next.grade)
    });    
    //console.log(element);
    let overallGrades = gradesPerSubject.reduce((prev,next) => prev+next);
    //console.log(gradesPerSubject); 

    let averageGrade = overallGrades / (element.subjects.length *2);
    //console.log(overallGrades);
    if (averageGrade > 3){
        passedStudents.push({
            ...element,
            overallAverageGrade: averageGrade
        })
    }    
});
//console.log(passedStudents);
let ranking = passedStudents.sort((prev,next) => prev.overallAverageGrade - next.overallAverageGrade);
console.log(ranking); 