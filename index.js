const student = {
    firstName: "Marie",
    age: 20,
    grade: "A"
    
    
}

class User {
    constructor(firstName, lastName, age, email, admin = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.admin = admin;
    }

    
    getUserInfo() {
        return `Full Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    
    setAge(newAge) {
        this.age = newAge;
    }
}


student.age=21

const courses=[]

courses.push("Math","Physics","Chemistry")
const find=courses.indexOf("Physics")
const find2 =courses.slice(0,2)
const user1 = new User("Alice", "Smith", 25, "alice@example.com", false);
user1.setAge(30);




console.log(student)
console.log(find)
console.log(find2)
console.log(user1.getUserInfo()); 
console.log(user1.getUserInfo());  

