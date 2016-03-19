// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
//
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
//
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".


function deepEqual(object1, object2){
  if (object1 === object2) { //base case
    return true;
  }

  //check if properties match
  var propNames1 = Object.getOwnPropertyNames(object1);
  var propNames2 = Object.getOwnPropertyNames(object2);

  for (var i = 0; i < propNames1.length; i++) {
    console.log('loop1');
    if (propNames1[i] !== propNames2[i]) {
      return false;
    }
  }

  //check if values match
  for(var key in object1){
    console.log('loop2');

    //if nested object...
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && object1[key] !== null) {
      var innerObj1 = object1[key];
      var innerObj2 = object2[key];
      var innerPropNames1 = Object.getOwnPropertyNames(innerObj1);
      var innerPropNames2 = Object.getOwnPropertyNames(innerObj2);
        //check property names
        for (var j = 0; j < innerPropNames1.length; j++) {
          console.log('loop3');
          if (innerPropNames1[j] !== innerPropNames2[j]) {
            return false;
          }
        }
        //check property values
        for(var index in innerObj1){
          console.log('loop4');
          if (innerObj1[index] !== innerObj2[index]) {
            return false;
          }
        }
      }

    //in the case of non-nested object
    if (object1[key] !== object2[key]) {
      if (typeof object1[key] === 'object' && object2[key] === 'object') {
        continue;
      }
      return false;
    }
  }
    //If everything checks out, return true
  return true;
}




var obj = {here: {is: "an"}, object: 2};

//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
