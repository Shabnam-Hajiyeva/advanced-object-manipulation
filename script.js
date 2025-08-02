//Part 1
let student={
    name: "Mike",
    age: 20,
    enrolled: true,
    courses: ["JavaCsript", "Web Programming", "Database"],
    displayInfo: function(){
        return `My name is: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}. I enrolled ${this.courses} courses `;
    }
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log(student.displayInfo());

//Part 2
let studentJson=JSON.stringify(student);
console.log("JSON String:", studentJson);

let studentParsed=JSON.parse(studentJson);
console.log("Student Parsed:", studentParsed);

console.log("Original student object:" , student);
console.log("New object from Json:", studentParsed);

//Part 3
let {name, courses}=student;
console.log("Student name: ", name);
console.log("Courses: ", courses);

let scores=[85, 92, 78, 90];
let [first, second]=scores;
console.log("First score is: ", first);
console.log("Second score is :" , second);

//Part 4
let cloneStudent={
    ...student,
    graduationYear: 2027
};

console.log("Cloned student with graduation year: ", cloneStudent);