// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
//
// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
//
//
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.

function arrayToList(array){
var list = {};
var head;
  for (var i = 0; i < array.length; i++) {
    if (!list.value) { //if value is null
      list.value = array[i];
      list.rest = null;
      head = list;
    }
    else{
      head.rest = {value: undefined, rest: null};
      head.rest.value = array[i];
      head = head.rest;
    }
  }
return list;
}

function listToArray(list){
var array = [];
var searcher = list;
  while (searcher) {
    array.push(searcher.value);
    searcher = searcher.rest;
  }
  return array;
}

function prepend(element,list){ //adds element to front of list
var prependedList = {value: element, rest: null};
  prependedList.rest = list;

return prependedList;
}

function nth(list,index){ //node search
var node = list;
  for (var i = 0; i <= index; i++) {
    if (i === index) {
      return node.value;
    }
    node = node.rest;
    if (!node) {
      return undefined;
    }
  }
}

//Write nth recursively
function recursiveNth(list, index){

  if (!list) {
    return undefined;
  }

  if (index === 0) {
    return list.value;
  }

  list = list.rest;
  index--;
return recursiveNth(list,index);
}





console.log(arrayToList([10, 20, 30])); // → {value: 10, rest: {value: 20, rest: {value: 30 rest: null}}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(prepend(50, arrayToList([10, 20, 30]))); // → {value: 50, rest: {value: 10, rest: {value: 20, rest: {value: 30 rest: null}}}
console.log(nth(arrayToList([10, 20, 30]), 2)); // → 30
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20
console.log(nth(arrayToList([10, 20, 30]), 7)); // → undefined
console.log(recursiveNth(arrayToList([10, 20, 30]), 2)); // → 30
console.log(recursiveNth(arrayToList([10, 20, 30, 40, 50]), 4)); // → 50
console.log(recursiveNth(arrayToList([10, 20, 30]), 0)); // → 10
console.log(recursiveNth(arrayToList([10, 20, 30]), 8)); // → undefined
