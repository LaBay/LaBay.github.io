//"use strict"



/* get element */




var Position = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

//console.log(Arr);

document.addEventListener("click", function(event){
    /*var x = event.target.innerHTML;*/
    
    var elementNumber = event.target.innerHTML;

    var getPosition = event.target.

	//console.log("elementNumber= ", elementNumber);
	//Picker(elementNumber);
	Drawer();
	
});






function Drawer(){

	let j = 0;
	let l;
	
	for (var i = 0; i < Position.length; i++) {

		for (var k = 0; k < Position[i].length; k++) {
	 		
	 		l = "item_" + j;
						
			//console.log(l);
			document.getElementById(l).style.order = Position[i][k];
			j++;
		}
	}
	//console.log(Arr);
	
	/*console.log(Arr[0],Arr[1],Arr[2],Arr[3]);
	console.log(Arr[4],Arr[5],Arr[6],Arr[7]);
	console.log(Arr[8],Arr[9],Arr[10],Arr[11]);
	console.log(Arr[12],Arr[13],Arr[14],Arr[15]);*/

}


