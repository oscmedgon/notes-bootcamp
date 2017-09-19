//Calculator Plus

//Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever)
//returns the result of the operation applied to the values passed as parameters
function calculatorPlus(operator){
  var numberOfNumbers = arguments.length

  return operator(arguments)
}
function sum(){
  console.log (arguments.length)
}
calculatorPlus(sum)