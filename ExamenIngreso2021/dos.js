function mostrar()
{
  let nombre;
  let tipoCursada;
  let cantidMaterias;
  let sexo;
  let notaPromedio;
  let edad;

  let flogMejorPromedio=1;
  let mejorPromedio=0;
  let nombreMejorPro;
  
  let nombreMasJovenL;
  let edadDelMasJovenL=0;
  let flogNombreMasJovenL=1;

  let cantidadDeMateriasL=0;
  let flogCantidadDeMatL=1;
  let nombreMasMatL;
  let edadMasMatL=0;

  let nombreMasCantidadMat;
  let edadMasCanMat=0;

  let cantidadDeMateriasP=0;
  let flogCantidadDeMatP=1;
  let nombreMasMatP;
  let edadMasMatP=0;

  let promedioSexoFe;
  let promedioSexoMas;

  let respuesta="s";

  while(respuesta=="s"){
    nombre=prompt("ingrese su nombre");
		
    while(!(isNaN(nombre)))
		{
			nombre=prompt("error reingrese su nombre");
		}
     tipoCursada=prompt("ingrese el tipo de cursada libre, presencial, remota");
     
     while(tipoCursada!="libre"&&tipoCursada!="presencial"&&tipoCursada!="remota"){
      tipoCursada=prompt("error reingrese el tipo de cursada libre, presencial, remota");
     }
     cantidMaterias=prompt("ingrese cantidad de materias mas de 0 y menos de 8");

     while(cantidMaterias<0||cantidMaterias>8){
      cantidMaterias=prompt("error reingrese cantidad de materias mas de 0 y menos de 8");
     }
     sexo=prompt("igrese su sexo f o m").toLowerCase();
     
     while(sexo!="f"&&sexo!="m"&&isNaN(sexo))
     {
       sexo=prompt("Error, Reigrese su sexo f o m").toLowerCase();
     }
     notaPromedio=prompt("ingrese nota promedio entre 0 y 10");
     
     while(notaPromedio<0||notaPromedio>10){
      notaPromedio=prompt("error reingrese nota promedio entre 0 y 10");
     }
     edad= parseInt(prompt("ingrese edad"));
     
     while(edad<0 || isNaN(edad))
     {
       edad= parseInt(prompt("error reingrese edad"));
     }

    if(respuesta=="s"){
      respuesta=prompt("desea ingresar mas alubnos");
    }
    switch(sexo){
      case "f":{
        if(flogMejorPromedio==1){
        flogMejorPromedio=0;
        mejorPromedio=notaPromedio;
        nombreMejorPro=nombre;
      }else if(mejorPromedio<notaPromedio){
        mejorPromedio=notaPromedio;
        nombreMejorPro=nombre;
      }
      break;
      }
    }
    switch(tipoCursada){
      case "libre":{
        if(flogCantidadDeMatL==1){
          flogCantidadDeMatL=0;
          cantidadDeMateriasL=cantidMaterias;
          nombreMasMatL=nombre;
          edadMasMatL=edad;
        }else if(cantidMateriasL>cantidMaterias){
          cantidadDeMateriasL=cantidMaterias;
          nombreMasMatL=nombre;
          edadMasMatL=edad;
        }
        if(flogNombreMasJovenL==1){
        flogNombreMasJovenL=0;
        nombreMasJovenL=nombre;
        edadDelMasJovenL=edad;          
        }else if(edadDelMasJovenL<edad){
          nombreMasJovenL=nombre;
         edadDelMasJovenL=edad;
        }
        break;
      }
        
      case "presencial":{
        if(flogCantidadDeMatP==1){
          flogCantidadDeMatP=0;
          cantidadDeMateriasP=cantidMaterias;
          nombreMasMatP=nombre;
          edadMasMatP=edad;
        }else if(cantidadDeMateriasP>cantidMaterias){
          cantidadDeMateriasP=cantidMaterias;
          nombreMasMatP=nombre;
          edadMasMatP=edad;
        }
        break;
      }
    }
    
    }
    if(cantidadDeMateriasL>cantidadDeMateriasP){
      nombreMasCantidadMat=nombreMasMatL;
      edadMasCanMat=edadMasMatL;
    }else if(cantidadDeMateriasP>cantidadDeMateriasL){
      nombreMasCantidadMat=nombreMasMatP;
      edadMasCanMat=edadMasMatP;
    }
    console.log("El nombre del mejor promedio que no sea masculino "+nombreMejorPro);
    console.log("El nombre del mas joven de los alumnos entre los que la dan libre "+nombreMasJovenL);
    console.log("La edad y nombre del que cursa mas materias que no sean en forma remota "+nombreMasCantidadMat+"y la edad de "+edadMasCanMat);
  }
  



/*
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino 222222

b) El nombre del mas joven de los alumnos entre los que la dan libre2222222

c) El promedio de nota por sexo´

d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/