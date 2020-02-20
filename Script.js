/*var change = document.getElementById("plus-neg");
change.classList.toggle("focused");
if(change.value =="neg"){
      change.classList.add('focused');
}
var changeAddlist = document.getElementById("add-text");
var changevaluecolor =  document.getElementById("value");*/

var change = document.getElementById('plus-neg');

change.addEventListener('click', chng);

function chng(event) {
	if (event.target.value === 'neg') change.classList.add('focused');
	else change.classList.remove('focused');

	// if (change.classList) {
	// 	change.classList.toggle('focused');
	// } else {
	// 	var classes = change.className.split(' ');
	// 	var i = classes.indexOf('focused');

	// 	if (i >= 0) classes.splice(i, 1);
	// 	else classes.push('focused');
	// 	change.className = classes.join(' ');
	// }
}
