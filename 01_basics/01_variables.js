const accountId = 12321
let accountEmail = "divya@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;
// accountId=3 //not allowed

accountEmail = "fsd@mail.com"
accountPassword="123213"
accountCity="Hyd"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])