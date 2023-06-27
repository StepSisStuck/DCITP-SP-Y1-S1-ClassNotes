var person = {
    firstname : "John",
    lastname : "Doe",
    age : 50,
    eyecolor : "blue",
    fullname : function() {
        return this.firstname + " " + this.lastname;
    }
};

console.log("This person is suspected to be " + person.firstname + " " + person.lastname + " and he is " + person.age + " years old and his eye color is " + person.eyecolor + ".");

console.log("Name is " + person.fullname() + ".");