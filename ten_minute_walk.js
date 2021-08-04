function isValidWalk(walk) {
    if(walk.length != 10){
        return false;
    }
    nSDistance = walk.filter(dir => dir == 's').length 
        - walk.filter(dir => dir == 'n').length 
    eWDistance = walk.filter(dir => dir == 'w').length 
        - walk.filter(dir => dir == 'e').length;
    if(nSDistance == 0 && eWDistance == 0){
        return true
    }
    else {
        return false;
    }
}



 console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));//, 'should return true');
 console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));//, 'should return false');
 console.log(isValidWalk(['w']));//, 'should return false');
 console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));//, 'should return false');
  