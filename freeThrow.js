

function act() {
	let en = document.getElementById('ename')
	setInterval(function(){en.style.color = "blue";}, 3000)
	let cn = document.getElementById('cname')
	setInterval(function(){cn.style.color = "purple";}, 5000)
	setInterval(function(){cn.style.fontweight = "500";}, 7000)
	let tn = document.getElementById('tname')
	let sn = document.getElementById('sname')
	setInterval(function(){sn.style.color = "blue";}, 9000)
	setInterval(function(){tn.style.color = "purple";}, 12000)
	
	
}