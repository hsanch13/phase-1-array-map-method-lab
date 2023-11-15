const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//callback functions are the arguments for the function
// this example right below is how we would write the function as a "regular" function.
// You can compare that to the function below in how you would write a arrow instead.
// Also in the example right below this, is how we would accomplish this lab WITHOUT modiyfing the original array.

// function titleCased(){
//   const copyOfTurtorials = [...tutorials] 
//   return copyOfTurtorials.map((tutorial) => {
//      const words = tutorial.split(" ");
//      const titleCaseWords = words.map((word) => {
//       return word[0].toUpperCase() + word.slice(1)
//      });
//      const titleCaseTutorial = titleCaseWords.join(" ");
//      return titleCaseTutorial;
//  }) };

 const titleCased = () => {
  return tutorials.map((tutorial) => {
     const words = tutorial.split(" ");
     const titleCaseWords = words.map((word) => {
      return word[0].toUpperCase() + word.slice(1)
     });
     const titleCaseTutorial = titleCaseWords.join(" ");
     return titleCaseTutorial;
 }) };


// // function titleCased() {
//   return tutorials.map(function(tutorial) {
//     // Step 2: Split the tutorial name into an array of words
//     const words = tutorial.split(" ");

//     // Step 3: Iterate over each word and capitalize the first letter
//     const titleCaseWords = words.map(function(word) {
//       // Your code to capitalize the first letter of each word goes here
//     });

//     // Step 4: Join the words back together with a space
//     const titleCaseTutorial = titleCaseWords.join(" ");

//     // Step 5: Return the title case tutorial name
//     return titleCaseTutorial;
//   });
// }