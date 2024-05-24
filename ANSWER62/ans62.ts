//Q 62
// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
  }
  let student: Student = {
    name: "Asadullah Shafique",
    age: 48,
    courses: ["Math", "Science", "Computer"],
  };
  console.log(student, "student");
  console.log(student);
  // Filling in the blueprint with an example student
  
  // Showing the student's information
  
  // We're using the blueprint to make sure... 
  //our student has a name, age, and list of courses.