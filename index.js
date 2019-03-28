// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
  if  (blockNumber > 42) {  
    return blockNumber - 42 
  } 
  if (blockNumber < 42){  
    return 42 - blockNumber }
}

function distanceFromHqInFeet (blockNumber){
   return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination){
    if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (){
  //if (distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000){
  return distanceTravelledInFeet * .02;
  } elsif {
    
      
    }
    
  
  
}