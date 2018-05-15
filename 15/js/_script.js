function Manager(x, element) {
	


	let firstRaw	= false;
	let lastRaw	= false;
	let firstColumn	= false;
	let lastColumn	= false;

	/*алгоритм для первой строки*/
/*	if (Arr[x-1] <= rawQuantity){
		firstRaw = true;
		
	};

	if (Arr[x-1] >= (quantity - rawQuantity + 1)){
		lastRaw = true;
		
	};

	if ( (Arr[x-1] % columnQuantity) == 1 ){
		firstColumn = true;
		
	}

	if ((Arr[x-1] % columnQuantity) == 0 ){
		lastColumn = true;
	}*/

	if (Arr[x-1] <= rawQuantity){
		firstRaw = true;
		
	};

	if (Arr[x-1] >= (quantity - rawQuantity + 1)){
		lastRaw = true;
		
	};

	if ( (Arr[x-1] % columnQuantity) == 1 ){
		firstColumn = true;
		
	}

	if ((Arr[x-1] % columnQuantity) == 0 ){
		lastColumn = true;
	}			
		console.log("firstRaw= ", firstRaw);
		console.log("lastRaw= ", lastRaw);
		console.log("firstColumn= ", firstColumn);
		console.log("lastColumn= ", lastColumn);


	if(!firstRaw){
		UpCompare();
		//console.log("UpCompare working!")
	}

	if(!lastRaw){
		DownCompare();
		//console.log("DownCompare working!")
	}

	if(!firstColumn){
		LeftCompare();
		//console.log("LeftCompare working!")
	}

	if(!lastColumn){
		RightCompare();
		//console.log("RightCompare working!")
	}


	function UpCompare(){

		if(Arr[x-1 - rawQuantity] == quantity){
			let b = Arr[x-1];
			let a = Arr[x-1 - rawQuantity];
			Arr[x-1] = a;
			Arr[x-1 - rawQuantity] = b;
			Drawer();
		}
	}

	function RightCompare(){
		console.log();
		if(Arr[x-1 + 1] == quantity){
		let b = Arr[x-1];
		let a = Arr[x-1 + 1];
		console.log(Arr[x-1], Arr[x-1 + 1]);
		Arr[x-1] = a;
		Arr[x-1 + 1] = b;
		console.log(Arr[x-1], Arr[x-1 + 1]);

		Drawer();
		}
	}

	function DownCompare(){
		
		if(Arr[x-1 + rawQuantity] == quantity){
			let b = Arr[x-1];
			let a = Arr[x-1 + rawQuantity];
			Arr[x-1] = a;
			Arr[x-1 + rawQuantity] = b;
			Drawer();
		}
		
	}

	function LeftCompare(){
		
		if(Arr[x-1 - 1] == quantity){
		let b = Arr[x-1];
		let a = Arr[x-1 - 1];
		Arr[x-1] = a;
		Arr[x-1 - 1] = b;
		Drawer();
		}
	}

};



function Picker(x, oldValue, newValue) {
	
	for (var i = 0; i < Arr.length; i++) {
		//console.log();
		for (var k = 0; k < Arr[i].length; k++) {
	 		//console.log("i= ", i, "k= ", k);
	 		if (Arr[i][k] == x){
	 			//console.log((Arr[i][k] == x), (Arr[i][k]), "i= ", i, "k= ", k)
	 			if (i > 0){
					
					if (Arr[i-1][k] == 16){
						//console.log(Arr[i][k], Arr[i-1][k]);
						console.log(Arr[0]);
						console.log(Arr[1]);
						console.log(Arr[2]);
						console.log(Arr[3]);
						oldValue = Arr[i][k];
						newValue = Arr[i-1][k];
						Arr[i][k] = newValue;
						Arr[i-1][k] = oldValue;
						
					}				
				}

				if (i < 3){

					if (Arr[i+1][k] == 16){
						console.log(Arr[0]);
						console.log(Arr[1]);
						console.log(Arr[2]);
						console.log(Arr[3]);
						oldValue = Arr[i][k];
						newValue = Arr[i+1][k];
						Arr[i][k] = newValue;
						Arr[i+1][k] = oldValue;
					}
				}

				
				if (k > 0){ 
						if (Arr[i][k-1] == 16){
						console.log(Arr[0]);
						console.log(Arr[1]);
						console.log(Arr[2]);
						console.log(Arr[3]);
						oldValue = Arr[i][k];
						newValue = Arr[i][k-1];
						Arr[i][k] = newValue;
						Arr[i][k-1] = oldValue;	
					}			
				}

				if (k < 3) {

						if (Arr[i][k+1] == 16){
						console.log(Arr[0]);
						console.log(Arr[1]);
						console.log(Arr[2]);
						console.log(Arr[3]);
						oldValue = Arr[i][k];
						newValue = Arr[i][k+1];
						Arr[i][k] = newValue;
						Arr[i][k+1] = oldValue;
					};

				};	 			

	 		};
		};
	};

};
