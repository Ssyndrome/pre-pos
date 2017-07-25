'use strict';
function countSameElements(collection){
	//把输入数组中的字符串拆成相应的字符
	var COLLECTION = new Array;
	for(var a = 0;a < collection.length;a++){
		if(collection[a].length != 1){
			for(var b = 0;b < collection[a].replace(/[^0-9]/ig,"");b++){
				COLLECTION.push(collection[a].replace(/[^a-z]/ig,""));
			}
		}else{
			COLLECTION.push(collection[a]);
		}
	}
	
	//算出输入数组有多少个不同值
	var res = [COLLECTION[0]];
	for(var x = 1; x < COLLECTION.length; x++){
		if(COLLECTION[x] !== res[res.length - 1]){
		res.push(COLLECTION[x]);
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
		for(var z = 0;COLLECTION[z] == COLLECTION[z+1];z++){
			y++;
			outList[i].key = COLLECTION[z];
			outList[i].count = y;
		}
		COLLECTION.splice(0,z+1);
	}
	return outList;
}
