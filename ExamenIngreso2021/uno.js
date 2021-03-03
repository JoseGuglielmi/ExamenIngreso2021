
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let tipoDeInflamable;
	let marca;

	let contadorAlcohol=0;
	let contadorIac=0;
	let contadorQuat=0;

	let cantidadAlcoholes=0;
	let cantidadIac=0;
	let cantidadQuat=0;

	let cantidadConbustible=0;
	let cantidadInifugo=0;
 	let cantidadExplocivos=0;
	
	let promedioCanAlcoholes=0;
	let promedioCanIac=0;
	let promedioCantQuat=0;


	let tipoMasInfamableCantidad;
	let cantidadDeInflamables=0;

	let precioMenorIac=0;
	
	let flogproductoMasCaro=1;
	let marcaMasCaro;
	let productoMasCaro;
	let precioMasCaro;

	for(i=0; i < 5; i++){
		producto=prompt("ingrece el producto: alcohol, iac o quat").toLowerCase();
		while(producto!="alcohol"&&producto!="iac"&&producto!=quat){
			producto=prompt("error reingrece el producto: alcohol, iac o quat").toLowerCase();
		}
		precio = parseInt(prompt("ingrese precio, entre 100 y 300"));

		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("Error, Reingrese precio, entre 100 y 300"));
		}
		cantidad = parseInt(prompt("ingrese cantidad que no sea mayor a 1000"));

		while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad) )
		{
			cantidad = parseInt(prompt("Error, Reingrese cantidad que no sea mayor a 1000"));
		}
		tipoDeInflamable=prompt("ingrese el tipo de infamable: ignífugo, combustible, explosivo");

		while(tipoDeInflamable!="ignifugo"&&tipoDeInflamable!="combustible"&&tipoDeInflamable!="explosivo"){
			tipoDeInflamable=prompt("error reingrese el tipo de infamable: ignífugo, combustible, explosivo");
		}
		marca = prompt("ingrese marca");

		switch(producto){
			case "alcohol":{
				cantidadAlcoholes=cantidadAlcoholes+cantidad;
				contadorAlcohol++;
				break;
			}
			case "iac":{
				cantidadIac=cantidadIac+cantidad;
				contadorIac++;
				if(precio<=200){
					precioMenorIac++;
				}
				break;
			}
			case "quat":{
				cantidadQuat=cantidadQuat+cantidad;
				contadorQuat++;
				break;
			}		
		}
		switch(tipoDeInflamable){
			case "combustible":{
				cantidadConbustible=cantidadConbustible+cantidad;
			}
			case "explosivo":{
				cantidadExplocivos=cantidadExplocivos+cantidad;
			}
			case "ignífugo":{
				cantidadInifugo=cantidadInifugo+cantidad;
			}
		}
		if(cantidadConbustible>cantidadExplocivos&&cantidadConbustible>cantidadInifugo){
			 tipoMasInfamableCantidad="conbustible";
			 cantidadDeInflamables=cantidadConbustible;
		}else if(cantidadExplocivos>=cantidadConbustible&&cantidadExplocivos>cantidadInifugo){
			tipoMasInfamableCantidad="explocivo";
			cantidadDeInflamables=cantidadExplocivos;
		}else if(cantidadInifugo>cantidadConbustible&&cantidadInifugo>cantidadExplocivos){
			tipoMasInfamableCantidad="inifugo";
			cantidadDeInflamables=cantidadInifugo;
		}
		if(flogproductoMasCaro==1){
			flogproductoMasCaro=0;
			marcaMasCaro=marca;
			productoMasCaro=productoMasCaro;
			precioMasCaro=precio;
		}else if(precioMasCaro<precio){
			marcaMasCaro=marca;
			productoMasCaro=productoMasCaro;
			precioMasCaro=precio;
		}

	}
	promedioCanAlcoholes=(cantidadAlcoholes/contadorAlcohol)*100;
	promedioCanIac=(cantidadIac/contadorIac)*100;
	promedioCantQuat=(cantidadQuat/contadorQuat)*100;

	console.log("El promedio de cantidad por tipo de producto:alcohol es "+promedioCanAlcoholes);
	console.log("El promedio de cantidad por tipo de producto: iac es "+promedioCanIac);
	console.log("El promedio de cantidad por tipo de producto: quat es "+promedioCantQuat);
	console.log("El tipo de inflamable con más cantidad de unidades en total de la compra es "+tipoMasInfamableCantidad);
	console.log("unidades con el precio mas bajo de iac: "+precioMenorIac);
	console.log("la marca y tipo del más caro de los productos es "+productoMasCaro+" y la marca "+marcaMasCaro);
}
/*
Se debe Informar al usuario lo siguiente:
b) El tipo de inflamable con más cantidad de unidades en total de la compra

c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total

d) la marca y tipo del más caro de los productos
Curso de ingreso UTN FRA
*/