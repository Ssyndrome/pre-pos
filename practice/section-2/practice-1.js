'use strict';

function countSameElements(collection){
		
		//算出输入数组有多少个不同值
		var res = [collection[0]];
		for(var x = 1; x < collection.length; x++){
			if(collection[x] !== res[res.length - 1]){
			res.push(collection[x]);
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
			for(var z = 0;collection[z] == collection[z+1];z++){
				y++;
				outList[i].key = collection[z];
				outList[i].count = y;
			}
			collection.splice(0,z+1);
		}
		
		return outList;
	}