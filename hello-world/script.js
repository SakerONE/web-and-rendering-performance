var p = document.getElementById('p'),
	index = 0;

setInterval(function(){
	p.innerText = ++index;
}, 1000);