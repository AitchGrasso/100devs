function abbrevName(name){
    let splitName = name.split(" ")
    return (splitName[0].charAt(0) + "." + splitName[1].charAt(0)).toUpperCase()

}

function booleanToString(b){
  return (b ? "true" : "false")
}

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

const stringToNumber = function(str){
  return Number(str);
}
