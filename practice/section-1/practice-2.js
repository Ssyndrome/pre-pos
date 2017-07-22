'use strict';

function collectSameElements(collectionA, collectionB) {
	
	var commn = new Array;
	for (var i = 0;i < collectionA.length;i++){
		for(var j = 0;j < collectionB[0].length;j++ ){
			if (collectionA[i] == collectionB[0][j]){
			commn.push(collectionA[i]);
			}
		}
	}
	
  return commn;
}
