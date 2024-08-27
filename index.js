function saturdayFun(){
    if ("roller-skate") {
        return "This Saturday, I want to roller-skate!" 
    }
}
      
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
  }
  console.log(saturdayFun("roller-skate")); Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun()); Output: "This Saturday, I want to bathe my dog!"


  function mondayWork (){
    if ("go to office")
    return 'This Monday, I will go to the office.'
  }
  function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}
    console.log(mondayWork("go to office")); Output: "This Monday, I will go to the office."
    console.log(mondayWork()); Output: "This Monday, I will work from home."



function wrapAdjective(){
    if ("special")
        return "*"
}
    
function wrapAdjective(highlight = '*') {
        return function(adjective) {
          return `You are ${highlight}${adjective}${highlight}!`;
        }
      }
const highlightAdjective = wrapAdjective('*');
console.log(highlightAdjective('a hard worker')); // Output: You are *a hard worker*!
