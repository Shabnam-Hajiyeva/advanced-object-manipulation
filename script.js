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