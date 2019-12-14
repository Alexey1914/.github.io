function plus() {

	var one1, two2, plus;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);

	plus = one1+two2;

	document.getElementById("Resalt").innerHTML = plus;
}

function minus() {

	var one1, two2, plus;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);
	plus = one1-two2;
	document.getElementById("Resalt").innerHTML = plus;
}

function mnozhit() {

	var one1, two2, mnozhit;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);
	mnozhit = one1*two2;
	document.getElementById("Resalt").innerHTML = mnozhit;
}

function delenie() {

	var one1, two2, delenie;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);
	delenie = one1/two2;
	document.getElementById("Resalt").innerHTML = delenie;
}

function ostatoc() {

	var one1, two2, ostatoc;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);
	ostatoc = one1%two2;
	document.getElementById("Resalt").innerHTML = ostatoc;
}

function stepen() {

	var one1, two2, stepen;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);
	stepen = one1**two2;
	document.getElementById("Resalt").innerHTML = stepen;
}

function koren() {

	var one1, two2, koren;

	one1 = document.getElementById("one").value;
	one1 = parseInt(one1);
    
    two2 = document.getElementById("two").value;
	two2 = parseInt(two2);
	koren = Math.sqrt(one1,two2);
	document.getElementById("Resalt").innerHTML = koren;
}
function factorial(){
var a, b, n, i;
	
n = document.getElementById("one").value;
n = PareInt(n);
a = n;
b = 1;
for (i = 1, i <= n, i++) {
		b = a*b;
		a--;
document.getElementById("Resalt").innerHTML = b;
}
}
