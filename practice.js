/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back  in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let name = "Aleena"

// 2.) Change the value of this variable
name = "Yasin"

// 3.) Change the data type of this variable
name = 45
// 4.) Create another variable and the one from above to concatenate
let fruit = "Banana"

// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`"Bryan" ${name+fruit}`)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Susmita
let n = "Susmita"
console.log(n.charAt(4))

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Ciera
const comment = "Ciera"
console.log(comment.charCodeAt())
// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(67,105,101,114,97))
// Take your first and last name and concat()
const first = "Aleena"
const last = "Yasin"
console.log(first+last)
// Create a string and make it return true using startsWith()
const word = "room"
console.log(word.startsWith('r'))
// Now use any variable with endsWith() and return false
console.log(word.endsWith('r'))
// Finish the following sentence. Use includes() and return true.
let maireg = 'Once upon a time Maireg looked up at the Moon, '
console.log(maireg.includes('Moon'))
// Help! I'm looking for my cow! Using indexOf() help Manny find his cow. What's the index of cow?
let mannyHadALittleLambOopsCow = "Manny lives in a farm. Manny was overwhelmed with coding. Manny is stressed out. Manny fed the chickens this morning and watered his plants. He took his cow Betsy on a walk. Manny went home without Betsy. Manny went to bed that night, and realized he left Betsy."
console.log( "Index of Cow is: " + mannyHadALittleLambOopsCow.indexOf('cow'))

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Ty in the String Universe.

let ty = "I am the Alpha Ty. I am the Omega Ty. We do not come in peace."
console.log("Last index of ty is "+ ty.lastIndexOf('Ty'))
// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"
console.log("The length of the word "+ noWeCantTeo + "is" + noWeCantTeo.length )

// If only it was this easy to replace() my ex. LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace("Goku","Vegeta"))

// Randi has been forgetful lately. Let's help Randi by using search(), and find their iPhone. 

let randiIsLookingForiPhone = "iphone 1, iPhone 2, IPHONE 3, ifone 4"
console.log(randiIsLookingForiPhone.search('ip'))

// I guess we can share this pizza sentence. Use slice() to return "other half of pizza".
let pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7))

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0,5));

// Okay, but who decided to go to this expensive restaurant? Brittany, Andrew, and Rockelle decided to split() the bill. Return an array separating Brittany, Andrew, and Rockelle.
let splitTheBill = "Brittany Andrew Rockelle"
console.log( splitTheBill.split(' '))

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Brittany, Andrew, and Rockelle into pieces. Using splitTheBill, return an array separating all three by single characters. "B, r, i, ..."
console.log( splitTheBill.split(''))
// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase())
// Michael was angry today. Create a string with words that Michael would yell out. Now lowercase it, to tell Micahel to chill out. 

// toUpperCase()
let coreySaidToPutSomeRespectToHisName = "corey feder"
console.log(coreySaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// on the chopping block...

// Returns "ell"
let basicGreeting = "Hello World"
console.log(basicGreeting.substring(1,4));
// Returns "JavaScript"
let ohReally = "JavaScript Substring"
console.log(ohReally.substring(0,10))
// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15,22))

// trim()

// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Suresh"

// console.log(a _ b)
// console.log(c _ b)
// console.log(d _ d)
// console.log(d _ a)
// console.log(a _ 15)
// console.log(a _ b _ c)
// console.log(c _ b _ a _ d)