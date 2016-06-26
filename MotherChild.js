// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
//
// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

var ANCESTRY_FILE = require('./Ancestry_Data.js');

var ancestry = JSON.parse(ANCESTRY_FILE)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


//compute the average age difference between mothers and children (the age of the mother when the child is born)
function motherChild(arr_obj) {
  var diff = []

  // Filter the children with mothers
  var child_with_mom = arr_obj.filter(function (child) {
    if (child.mother !== null) return child;
  })

  // Get a list of mothers with defined born dates
  var moms = child_with_mom.map(function (child) {
    return byName[child.mother]
  }).filter(function (el) {
    return el !== undefined
  })

  // Loop through the children and match with mother, find the difference and push into diff array
  child_with_mom.forEach(function (child) {
    moms.forEach(function (mom) {
      if (child.mother === mom.name) {
        diff.push(child.born - mom.born)
      }
    })
  })

  // Call the average on the differences in age
  return average(diff)
}





console.log(motherChild(ancestry)); // → 31.2
