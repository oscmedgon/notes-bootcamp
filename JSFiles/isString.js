//isString
//
//Define a function called ​isString​ that receives a value and return true if the value received is a string
//
//   isString(3) // false
//   isString("3") // true
//   isString("asass") // true

function isString(string){
	if (typeof(string) != "string"){
		return false
	}
		return true
}
isString("safasf")