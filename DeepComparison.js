// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
//
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
//
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".


function deepEqual(object1, object2){

  for (var variable in object1) {
    for (var element in object2) {
      console.log('obj 2 el:',object2[element]);
      console.log('obj 1 var:',object1[variable]);
      if (variable !== element && object1[variable] !== object2[element]) {
        return false;
      }
    }
  }
  return true;
}




var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
