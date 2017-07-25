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
		var c = new Array; 
		for(var q = 0;q < res.length;q++){
			c[q] = {};
		}
		//循环检索重复元素
		for(var i = 0;i < res.length;i++){
			var y = 1;
			for(var z = 0;collectionA[z] == collectionA[z+1];z++){
				y++;
				c[i].key = collectionA[z];
				c[i].count = y;
			}
			collectionA.splice(0,z+1);
		}
		
		var C = new Array;
		for(var Q = 0;Q < res.length;Q++){
			C[Q] = {};
		}
	for(var a = 0;a < c.length;a++){
		for(var b = 0;b < objectB.value.length;b++){
			if (c[a].key == objectB.value[b]){
				
			
				C[a].key = c[a].key;
				C[a].count = c[a].count - parseInt(c[a].count/3);
			}
		}
	}
	
	for(var p = 0;p < c.length;p++){
		if(c[p].key != C[p].key){
			C[p].key = c[p].key;
				C[p].count = c[p].count;
		}
	}
		return C;
}
