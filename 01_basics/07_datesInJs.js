// Dates

let myDate =  new Date();
console.table([
    {Label: "toString()", Value: myDate.toString()},
    {Label: "toDateString", Value: myDate.toDateString()},
    {Label: "toLocaleString", Value: myDate.toLocaleString()},
    {Label: "typeof", Value: typeof myDate}
])

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // in miniseconds
// console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //month
console.log(newDate.getDay()); //day

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})