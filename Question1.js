function findDuplicate(arr){

	var dupArr = [];

	for (var i = 0; i < arr.length; i++){
		if (arr.slice(i+1).indexOf(arr[i]) > -1){
	  		if (dupArr.indexOf(arr[i]) === -1)
	    		dupArr.push(arr[i])
	  	}
	}

	return dupArr;
}

// Part B

function removeDuplicates(arr){
	 
	for (var i = 0; i < arr.length; i++){
		
		var dup = 0;

		while (dup >= 0){
			dup = arr.slice(i+1).indexOf(arr[i]);
			if (dup > -1){
				var arr1 = arr.slice(0, dup+1+i);
				var arr2 = arr.slice(dup+2+i);
				arr = arr1.concat(arr2);
			}							
		}
	}

	return arr;
}