//singletop
//Object.create -------> through constructor method

//Object literals
const mySym = Symbol("Key1")

const JsUser = {
    name: "Divya",
    "full name": "Divya Maurya", //This can only be accessed using squareBracket JsUser["full name"]
    [mySym]: "myKey1",
    age: 18,
    location: "Varanasi",
    email: "divya@mail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); //used as String
// console.log(JsUser["full name"]);
// console.log("Symbol===>", JsUser[mySym]);

JsUser.email = "divya@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "divya@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo()); //Hello JS user, Divya
