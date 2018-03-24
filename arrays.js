var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element){
  return array.shift(element)
}

function accessElementInArray(array, n){
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1)
  return newArray
}

//test
console.log(chocolateBars)
