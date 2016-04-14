// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
//
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
//
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".


function deepEqual(object1, object2){

var nestedObjects = [];

//Grab object keys
var keys1 = Object.keys(object1);
var keys2 = Object.keys(object2);

  //Compare keys
  for (var i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }


  for(var key in object1){
    //If objects are nested, save in array and move to next loop
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      nestedObjects.push(object1[key],object2[key]);
    }
    //compare object values
     else if(object1[key] !== object2[key]) {
      return false;
    }
  } //loop end


  //If nested objects, recursively call function
  if (nestedObjects.length > 2) {
    for (var j = nestedObjects.length; j > 0; j--) {
      deepEqual(nestedObjects[j],nestedObjects[j-1]);
    }
  }

  return true;
}




var obj = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "an"}, object: 2};
var obj3 = {here: {is: "an"}, object: {val:'value'}, third: {key1: 'a', key2: {key3: {key4:'3'}}}};
var obj4 = {here: {is: "an"}, object: {val:'value'}, third: {key1: 'a', key2: {key3: {key4:'4'}}}};

//console.log(deepEqual(obj, obj)); // → true

//console.log(deepEqual(obj, {here: 1, object: 2})); // → false

//console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true



//console.log(deepEqual(obj2, {here: {is: {not:'no'}}, object: 2})); // → true
console.log(deepEqual(obj3, obj4)); // → false
