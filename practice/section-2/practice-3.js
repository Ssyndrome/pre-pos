'use strict';

function countSameElements(collection) {
function countSameElements(collection){
		
		//算出输入数组有多少个不同值
		var res = [collection[0]];
		for(var x = 1; x < collection.length; x++){
			if ((collection[x].indexOf('[')) !== -1){
				collection[x] = getObject1(collection[x]);
			}
			if ((collection[x].indexOf(':')) !== -1){
				collection[x] = getObject2(collection[x]);
			}
			if ((collection[x].indexOf('-')) !== -1){
				collection[x] = getObject3(collection[x]);
			}
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
			var y = 0;
			outList[i] = {name:null,summary:0};
			for(var w = 0;w < collection.length;w++){
				
				if (collection[w].indexOf('[') !== -1){
					collection[w] = getObject1(collection[w]);
					outList[i].name = collection[w];
					outList[i].summary = outList[i].summary+getNumber1(collection[w]);	
				}
				if(collection[w].indexOf(':') !== -1){
					collection[w] = getObject2(collection[w]);
					outList[i].name = collection[w];
					outList[i].summary += getNumber2(collection[w]);	
				}
				if(collection[w].indexOf('-') !== -1){
					collection[w] = getObject3(collection[w]);
					outList[i].name = collection[w];
					outList[i].summary += getNumber3(collection[w]);
				}
				
				if(collection[w] == collection[w+1]){
					continue;
				}
				if(outList[i].name){
					outList[i].summary++;
				}else{
					y++;
					outList[i].name = collection[w];
					outList[i].summary += y;
				}
				
				
			}
			collection.splice(0,w+1);
		}
		return outList; 
}

//切割[]字符串中的数字
function getNumber1(a){
	var b = new Array;
	var c = new Array;
	b = a.split('[');
	c = (b[1]).split(']');
	return JSON.parse(c[0]);
}
//切割:字符串中的数字
function getNumber2(a){
	var b = new Array;
	b = a.split(':');
	return JSON.parse(b[1]);
}

//切割-字符串中的数字
function getNumber3(a){
	var b = new Array;
	b = a.split('-');
	return JSON.parse(b[1]);
}
//切割[]字符串中的对象
function getObject1(a){
	var b = new Array;
	b = a.split('[');
	return b[0];
}
//切割:字符串中的对象
function getObject2(a){
	var b = new Array;
	b = a.split(':');
	return b[0];
}

//切割-字符串中的对象
function getObject3(a){
	var b = new Array;
	b = a.split('-');
	return b[0];
}
}
