const removeFromArray = function (...args) {

	let arrToMdf = args[0];
	let elsToDel = args.slice(1);

	console.log("Original Array: " + arrToMdf);

	elsToDel.map((element) => {

		let idx = arrToMdf.indexOf(element);

		if(idx === -1){
			return;
		}

		console.log("Indice a eliminar: " + idx);
		arrToMdf.splice(idx, 1);
		console.log("Array: " + arrToMdf);

		while ((idx = arrToMdf.indexOf(element, idx) !== -1)) {

			idx = arrToMdf.indexOf(element, idx);
			console.log("Indice a eliminar: " + idx);
			arrToMdf.splice(idx, 1);
			console.log("Array: " + arrToMdf);

		}

	});
	return arrToMdf;
};

// Do not edit below this line
module.exports = removeFromArray;
