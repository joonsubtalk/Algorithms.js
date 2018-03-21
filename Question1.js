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