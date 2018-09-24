/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

// функция принимает в качестве аргумента массив занчений
module.exports = function getLoveTrianglesCount(array =[]) {
	
	// где len - длина массива
	// k - переменная счётчик определяющая количество вхождений
	let k = 0, len = array.length, a, b, c;

	for ( let i = 0; i < len; i++) {
		
		a = array[i];
		b = array[a - 1];
		c = array[b - 1];
		
		if( c === i + 1 && b > c && b > a){
			k++;	
		};
		
	};
	//ответ количество наших любовных треугольников
	return k;	
};