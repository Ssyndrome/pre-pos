'use strict';

function createUpdatedCollection(collectionA, objectB) {
//算出输入数组有多少个不同值
		var res = [collectionA[0]];
		for(var x = 1; x < collectionA.length; x++){
			if(collectionA[x] !== res[res.length - 1]){
			res.push(collectionA[x]);
			}
        }
		
		//定义输出为二维数组
		var outList = new Array; 
		for(var q = 0;q < res.length;q++){
			outList[q] = {};
		}
		
		
		//循环检索重复元素
		for(var i = 0;i < res.length;i++){
			var y = 1;
			for(var z = 0;collectionA[z] == collectionA[z+1];z++){
				y++;
				outList[i].key = collectionA[z];
				outList[i].count = y;
				
				if (collectionA[z+2].indexOf('-') != -1){		
				outList[i+1].key = collectionA[z+2].slice(0,1);
				outList[i+1].count = JSON.parse(collectionA[z+2].slice(2,3)); //把字符串转为对象
				}
			}
			collectionA.splice(0,z+1);
		}
		
		
	var C = new Array;
	for(var Q = 0;Q < res.length;Q++){
		C[Q] = {};
	}
	
	for(var a = 0;a < outList.length;a++){
		for(var b = 0;b < objectB.value.length;b++){
			if (outList[a].key == objectB.value[b]){
				C[a].key = outList[a].key;
				C[a].count = outList[a].count - parseInt(outList[a].count/3);
			}
		}
	}
	
	for(var p = 0;p < outList.length;p++){
		if(outList[p].key != C[p].key){
			C[p].key = outList[p].key;
				C[p].count = outList[p].count;
		}
	}
  return C;
}
