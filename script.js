
function limpiar() {
	document.getElementById("display").innerHTML = "";
}

function agregar(num) {
	var result = document.getElementById("display").innerHTML;

	result = result + "" + num;	

	if(result.length > 21){
		alert("Ingreso mayor al maximo posible");
		limpiar();	
	} else {
		document.getElementById("display").innerHTML = result;	
	}
}

function resolver() {
	var numero = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = eval(numero);
}

function eliminar() {
	var numero = document.getElementById("display").innerHTML;
	numero = numero.substring(0,numero.length - 1);
	document.getElementById("display").innerHTML = numero;
}

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    //console.log(code);
    switch(code){
		case 96:
		agregar('0');
		break;
		case 97:
		agregar('1');
		break;
		case 98:
		agregar('2');
		break;
		case 99:
		agregar('3');
		break;
		case 100:
		agregar('4');
		break;
		case 101:
		agregar('5');
		break;
		case 102:
		agregar('6');
		break;
		case 103:
		agregar('7');
		break;
		case 104:
		agregar('8');
		break;
		case 105:
		agregar('9');
		break;
		case 106:
		agregar('*');
		break;
		case 107:
		agregar('+');
		break;
		case 109:
		agregar('-');
		break;
		case 111:
		agregar('/');
		break;
		case 13:
		resolver();
		break;
		case 8:
		eliminar();
		break;
		}	
};
