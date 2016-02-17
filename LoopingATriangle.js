//Write a loop that makes seven calls to console.log to output the following triangle:
/*
#
##
###
####
#####
######
#######
*/


  for (var i = 0, hash = "#"; 7 < input; i++) {
    console.log(hash);
    hash += "#";
  }
