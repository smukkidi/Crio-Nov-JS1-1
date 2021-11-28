function reverseString(str) {
  for (var revString = "", i = str.length - 1; i >= 0; i--) {
    revString += str[i];

  }
  return revString;
}

console.log(reverseString("Hello"));

function reverseGivenString(str){
  return str
  .split("")
  .reverse()
  .join("");
}

console.log(reverseGivenString("GoodMorning"));