//Minimum
/*The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.*/

function min(x,y){
if (x === y) {
  return null;
}
else if (x < y){
  return x;
}
else if (x > y){
  return y;
}
}

console.log(min(0,10));
console.log(min(0,-10));
