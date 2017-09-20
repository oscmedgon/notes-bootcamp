 /*
 charFreq()

 Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
 Represent the frequency listing as a Javascript object. Try it with something like
 charFreq('abbabcbdbabdbdbabababcbcbab').
 */
function charFreq (string) {
  var registeredCharacters = {}
  for (var i = 0; i < string.length; i++) {
    if (registeredCharacters[string[i]]) {
      console.log(string[i])
      registeredCharacters[string[i]] = 1
    } else {
      registeredCharacters[string[i]]++
      console.log(string[i])
    }
  }
  return registeredCharacters
}

charFreq('asdasdsadasdsadasdasdadsdasdsadasdsaddas')
