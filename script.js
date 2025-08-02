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
let jsonString=JSON.stringify(student);
console.log(jsonString);