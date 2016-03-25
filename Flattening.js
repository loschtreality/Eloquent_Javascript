// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.


function flattenReduce(array){
  return array.reduce(function(a,b){
    return a.concat(b);
  });
}


  //BONUS: Answer not using reduce
function flatten(array){
  return array.concat.apply([],array);
}



var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flattenReduce(arrays)); // → [1, 2, 3, 4, 5, 6]
console.log(flatten(arrays)); // → [1, 2, 3, 4, 5, 6]
