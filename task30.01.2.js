// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/
const users = [
    {
      "userId": 1,
      "firstName": "Krish",
      "lastName": "Leeg",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@test.tt"
    },
    {
      "userId": 2,
      "firstName": "racks",
      "lastName": "jacson",
      "phoneNumber": "123456",
      "emailAddress": "racks.jacson@test.tt"
    },
    {
      "userId": 3,
      "firstName": "denial",
      "lastName": "roast",
      "phoneNumber": "333b33333",
      "emailAddress": "denial.roast@test.tt"
    },
    {
      "userId": 4,
      "firstName": "devid",
      "lastName": "nego",
      "phoneNumber": "222222222",
      "emailAddress": "devid.neo@test.tt"
    },
    {
      "userId": 5,
      "firstName": "jyne",
      "lastName": "mac",
      "phoneNumber": "111111111",
      "emailAddress": "jone.mac@test.tt"
    }
  ]; 

var numbers = [0-9];
let CorrectPN = users.filter ((phoneNumber) === numbers);
let IncorrectPN = users.filter ((phoneNumber) === NaN(NaN));                   

if (phoneNumber = CorrectPN) {
  return console.true
}
if (phoneNumber = IncorrectPN) {
  return console.alert ("Incorrect Phone Number of the user")
}
const users1 = {
    users: [
      {
        userId: 1,
        firstName: "Krish",
        lastName: "Lee",
        phoneNumber: "123456",
        emailAddress: "krish.lee@test.tt",
      },
      {
        userId: 2,
        firstName: "racks",
        lastName: "jacson",
        phoneNumber: "123456",
        emailAddress: "racks.jecson@test.tt",
      },
      {
        userId: 3,
        firstName: "denial",
        lastName: "roast",
        phoneNumber: "33333333",
        emailAddress: "denial.roast@test.tt",
      },
      {
        userId: 4,
        firstName: "devid",
        lastName: "neo",
        phoneNumber: "222222222",
        emailAddress: "devid.neo@test.tt",
      },
      {
        userId: 5,
        firstName: "jone",
        lastName: "mac",
        phoneNumber: "111111111",
        emailAddress: "jone.mac@test.tt",
      },
    ],
  };
  
  module.exports = users;

  function isEqual ()
  users
  users1

  if (users.firstName = users1.firstName) {
    return "true"; }
  if (users.firstName != users1.firstName) { 
console.alert = ("First Name of the User " + users.userId + "  is incorrect. First name is " + (users.firstName) + " but the second one is" + (users1.firstName) + ".");
  };
  if (users.lastName = users1.lastName) {
    return console = "true"; }
  if (users.lastName != users1.lastName) { 
console.alert = ("Last Name of the User " + users.userId + " is incorrect. First value is " + (users.lastName) + " but the second one is" + (users1.lastName) + ".");
  };

  if (users.phoneNumber = users1.phoneNumber) {
    return console = "true"; }
  if (users.phoneNumber != users1.phoneNumber) { 
console.alert = ("Phone number of the User " + users.userId + "  is incorrect. First given number is " + (users.phoneNumber) + " but the second one is" + (users1.phoneNumber) + ".");
  };

  if (users.emailAddress = users1.emailAddress) {
    return console = "true"; }
  if (users.emailAddress != users1.emailAddress) { 
console.alert = ("E-mail address of the User " + users.userId + "  is incorrect. First one is " + (users.emailAddress) + " but the second one is" + (users1.emailAddress) + ".");
  };