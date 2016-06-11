'use strict'

var unit = {
	GCD: function(x, y){//функция нахождения наибольшего общего делителя (НОД) 
		if ((typeof(x) != "number") || (typeof(y) != "number")) console.log('Как же тебе не ая-яй?! Вводи только циферки!') // проверка на число
		else{
			var str = "НОД чисел "+ x +" и " + y;
			if(!x || !y) { // проверка на 0
//				console.log(str, NaN);
				return NaN;
			}else{
				if(x%1 || y%1){ // проверка на дробь
					console.log(str, undefined,", т.к. они не являются целыми");
					return undefined;
				}else{ //само вычисление
					x = Math.abs(x);
					y = Math.abs(y); 
					while (x != y)
						if(x > y) x = x - y;
						else y = y - x;
						return x;
				}
			}
		}
	},

	factor: function(z){//функция разложения на простые множители
	//	console.log(z);
		var factorRes = [];
		if (z <= 1 || (z%1)) return null;
		else{
			for (let i = 2; i <= Math.sqrt(z); i++) {
				if (!(z%i)){
					factorRes.push(i);
					z = z/i;
					i--;
				};
			};
		if (z > 1) factorRes.push(z);
		return factorRes;
		};
	},

	sort: function(arr){//функция сортировки

		function arrayItemTypeVerification(){//преобразует элементы массива в строки, если в массиве есть хоть одна строка 
			
			for (let value of arr) if (typeof(value) != "number") for (let k = 0; k < arr.length; k++) arr[k] = arr[k].toString();
		};

		arrayItemTypeVerification(arr);

		for(let i=0; i<arr.length-1; ){//непосредственно код сортировки "гномиком"
			if (arr[i] > arr[i+1]) arr.splice(i, 2, arr[i+1], arr[i]);
			if (arr[i-1] > arr[i]) i--;
			else i++;
		};
				
		return arr;
	},
};
