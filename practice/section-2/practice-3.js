'use strict';


function countSameElements(collection){
		
		//算出输入数组有多少个不同值
		var res = [collection[0]];
		for(var x = 1; x < collection.length; x++){
			if (collection[x].length != 1){
				collection[x] = collection[x].split('')[0];
			}
			
			if(collection[x] != res[res.length - 1]){
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
			var y = 0;
			outList[i] = {name:null,summary:0};
			for(var w = 0;w < collection.length;w++){
				
				if(collection[w].length != 1){
					outList[i].name = collection[w].split('')[0];
					outList[i].count += collection[w].replace(/[^0-9]/ig,"");
				}
				
				if(outList[i].name){
					outList[i].summary++;
				}else{
					y++;
					outList[i].name = collection[w];
					outList[i].summary += y;
				}
				
				if(collection[w] !== collection[w+1]){
					break;
				}
				
			}
			collection.splice(0,w+1);
		}
		return outList; 
}

