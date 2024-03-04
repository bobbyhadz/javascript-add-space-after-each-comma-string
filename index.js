// EXAMPLE 1 - Add Space after each Comma in a String in JavaScript

const str = 'bobby,hadz,com';

const spaced = str.replaceAll(',', ', ');
console.log(spaced); // 👉️ "bobby, hadz, com"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add Space after each Comma in a String using `replace()`

// const str = 'bobby,hadz,com';

// const spaced = str.replace(/,/g, ', ');
// console.log(spaced); // 👉️ "bobby, hadz, com"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Add Space after each Comma in a String using `String.split()`

// const str = 'bobby,hadz,com';

// const spaced = str.split(',').join(', ');
// console.log(spaced); // 👉️ "bobby, hadz, com"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Insert a Space before Capital Letters in a String in JavaScript

// const str = 'BobbyHadzCom';

// const result = str.replace(/[A-Z]/g, ' $&').trim();
// console.dir(result); // 👉️ 'Bobby Hadz Com'

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function

// function addSpaceBeforeCapital(str) {
//   return str.replace(/[A-Z]/g, ' $&').trim();
// }

// // 👇️ Bobby Hadz Com
// console.log(addSpaceBeforeCapital('BobbyHadzCom'));

// // 👇️ One Two
// console.log(addSpaceBeforeCapital('OneTwo'));

// ------------------------------------------------------------------

// // EXAMPLE 6 - Insert a Space before Capital Letters in a String using `split()`

// function addSpaceBeforeCapital(str) {
//   return str.split(/(?=[A-Z])/).join(' ');
// }

// // 👇️ Bobby Hadz Com
// console.dir(addSpaceBeforeCapital('BobbyHadzCom'));

// // 👇️ One Two
// console.dir(addSpaceBeforeCapital('OneTwo'));
