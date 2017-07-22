'use strict';

function collectSameElements(collectionA, collectionB) {
	collectionA = collectionA.sort();
	collectionB = collectionB.sort();
	var commn = [];
	for (i = 0;i<collectionA.length;i++){
		for(j = 0;j<collectionB.length;j++ ){
			if collectionA[i] = collectionB[j]
			commn.push(collectionA[i]);
		}
	}
	commn = commn.sort;
  return commn;
}
