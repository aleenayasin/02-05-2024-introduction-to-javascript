// console.log("Hello, World!");

// This is a comment.

/* 

Shift + Alt + A

create multiple line of comments.
usind a block comment.

*/

// ===========DATA TYPE================
// numbers and floats
/* console.log(5, 1000, 1.5, -9.8)

// string
console.log("I am Aleena")
console.log('This is also a string')
console.log("Third way to write string")

// boolean
console.log("This is true:", true)
console.log("This is false:", false)

// null
console.log(null)

// Undefines
console.log(undefined) */

// object

// =============== VARIABLE DECLARATIONS ================
// DECLARE VARIABLES
// let supply;
// let person;
// const age;  assign a value

var firstName = "Aleena";
let lastName = "Yasin";
const location = "Dallas"; 

// console.log(firstName);  referenceErroe: first name is not defined

// DONOT USE VAR!

// THe LET STATEMENT

// let fruit = 'apple'
// console.log(fruit)

// fruit= "strawberry"
// console.log(fruit)

// Below is a block scoped
// {
//     // const className = "2024-RTT-03";
//     // console.log(className)
//     // console.log(fruit)
// }

// console.log(classnName)  // code: 'MODULE_NOT_FOUND'

// CONST
// const PI = 3.12365849;
// PI = 3.12;

// LITERALS
// console.log(true);
// console.log("Hello World!");
// console.log(42);

// TYPEOF (keyword)
// let myVar = "Hello World!"

// console.log(typeof 42);
// console.log(typeof myVar);
// console.log(typeof("Grapes"))

// console.log(3+4)

// let newNumner = "9";
// newNumber = newNumber + 1;

// console.log(newNumber)

//  +=
// newNumner += 5;
// console.log(newNumner)

// if you want to increament by 1 you can use the operators ++ or --
// let num = 8;
// console.log(num)
// num++
// console.log(num)
// num--
// console.log(num)

// num--
// console.log(num)

// let newNumber = 9;
// let currentNumber = newNumber++;

// console.log(currentNumber);
// newNumber is now equal to 10, but currentNumber is equal to 9

// let newNumber = 9;
// let currentNumber = ++newNumber;

// console.log(currentNumber);
// newNumber and currentNumber are now equal to 10

// COMPARISON OPERATORS

// console.log(3 > 4);
// console.log(4 < 5);

// console.log(78 >= 90);
// console.log(78 >= 78);

//  ! means NOT
// console.log(10 != 30);

// console.log(!true); THIS WILL  COME AGAIN

// let isEqual = 3 == 3; // isEqual is true
// let isEqual = 3 == "3"; // isEqual is true
// let isEqual = "3" == "3"; // isEqual is true

// LOOSELY COMPARISON STRUCTLY COMPARISION
// strictly compare not only the value but also the data typr
// console.log(3 == 3);
// console.log(3 === "3");

// LOGICAL OPERATORS

// let thisLogic = 3 > 2 && 6 == 6; // thisLogic is true
// console.log(thisLogic);
let thisLogic = 3 < 2 && 6 == 7; // thisLogic is false
// console.log(thisLogic);

// FOR FUTUREBREACT SYNTAX, if the left is true, render the component
// {
//     truthyValue

// }

// || atleast one of them is true
// let thisLogic = 3 > 2 || 6 == 6; // thisLogic is true
// let thisLogic = 3 > 2 || 6 == 7; // thisLogic is true

// (true && true)

// STRING CONCATENATION

// console.log("Hello" + "World"); // outputs: Hello World
// console.log("This is" + " a String"); // outputs: This is a String
// console.log("The number is " + 5); // outputs: The number is 5
// console.log("Hello" - "World"); // Invalid, cannot use -

// STRING ACCESS

// const fullName= "Aleena Yasin"

// console.log(fullName[5])

// console.log("Hello World"[3]);


// const name = "Inigo Montoya";

// name[2] = "X";

// console.log(name[2]); // i

// const a = "a";
// const b = "b";

// console.log(a < b); // true

// console.log("Hey" === "Hey"); // true
// console.log("Hey" == "hey"); // false

// const frost =
// 	"Nature's first green is gold, " +
// 	"Her hardest hue to hold. " +
// 	"Her early leaf's a flower; " +
// 	"But only so an hour. " +
// 	"Then leaf subsides to leaf. " +
// 	"So Eden sank to grief, " +
// 	"So dawn goes down to day. " +
// 	"Nothing gold can stay. ";

// console.log(frost);

// const frost =
// 	"Nature’s first green is gold, \
// Her hardest hue to hold. \
// Her early leaf’s a flower; \
// But only so an hour. \
// Then leaf subsides to leaf. \
// So Eden sank to grief, \
// So dawn goes down to day. \
// Nothing gold can stay.";

// console.log(frost);

// console.log('\0')

// console.log('hello\vgoodbye')
// console.log('first\rlast')

// console.log('\u{215A}')

// console.log('They said, "this string doesn\'t need an escape!"');
// They said, "this string does not need an escape!"

// const frost =
// 	"Nature’s first green is gold, \n\
// Her hardest hue to hold. \n\
// Her early leaf’s a flower; \n\
// But only so an hour. \n\
// Then leaf subsides to leaf. \n\
// So Eden sank to grief, \n\
// So dawn goes down to day. \n\
// Nothing gold can stay.";

// console.log(frost);

// const a = 5;
// const b = 10;

// console.log("'a' is assigned a value of \"" + a + ",\" and 'b' is assigned a value of \"" + b + ".\"\n" +
// "Therefore, 'a' plus 'b' is equal to " + (a + b) + ".");
// 'a' is assigned a value of "5," and 'b' is assigned a value of "10."
// Therefore, 'a' plus 'b' is equal to 15.

// const a = 5;
// const b = 10;

// console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
// Therefore, 'a' plus 'b' is equal to ${a + b}.`);
// 'a' is assigned a value of "5," and 'b' is assigned a value of "10."
// Therefore, 'a' plus 'b' is equal to 15.

// console.log( `a + b = ${a+b}`)

