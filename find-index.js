let arr = [{'key': 1, 'name': 'hisName'}, {'key': 2, 'name': 'myName'}, {'key': 3, 'name': 'otherName'}];
let indexASD;
arr.map(function (obj, index) {
	if (obj.name === 'myName') {
		indexASD = index;
	}
});
console.log(indexASD);