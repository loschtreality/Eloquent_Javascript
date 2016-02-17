//Chess Board
/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

!#!#!#!#
#!#!#!#
!#!#!#!#
#!#!#!#
!#!#!#!#
#!#!#!#
!#!#!#!#
#!#!#!#

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */


function chessBoard(size){
var evenLine = "";
var oddLine = "#";
var space = "!";
var hash = "#";
var newLine = "\n";
var board = "";

for (var i = 0; i < size/2; i++) {
evenLine += space;
evenLine += hash;
}

for (var j = 1; j < size/2; j++) {
oddLine += space;
oddLine += hash;
}

for (var k = 0; k < size/2; k++) {
  board += evenLine + newLine + oddLine + newLine;
}


console.log(board);


}

var size = 10;
chessBoard(size);
