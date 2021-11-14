//Elmentos del DOM
let button = document.getElementById("button");
let textExpe = document.getElementById("textExpresion");
let textoP = document.getElementById("texto");

//Expresiones
let aritmetica = new RegExp(
  "([0-9]+\\+[0-9]+)|" +
    "([0-9]+\\-[0-9]+)|" +
    "([0-9]+\\*[0-9]+)|" +
    "([0-9]+\\/[0-9]+)"
);

let asignacion = new RegExp("[a-zA-Z]+=[0-9]+");

let relacional = new RegExp(
  "([0-9]+>[0-9]+)|" +
    "([0-9]+<[0-9]+)|" +
    "([0-9]+>=[0-9]+)|" +
    "([0-9]+<=[0-9]+)|" +
    "([0-9]+==[0-9]+)|"
);

let logicos = new RegExp(
  "((TRUE|true|FALSE|false)&&(TRUE|true|FALSE|false))|" +
    "((TRUE|true|FALSE|false)\\|\\|(TRUE|true|FALSE|false))|" +
    "((TRUE|true|FALSE|false)!=(TRUE|true|FALSE|false))|" +
    "((TRUE|true|FALSE|false)==(TRUE|true|FALSE|false))|"
);

let alfanumerica = new RegExp("([a-zA-Z]+[0-9]*[a-zA-Z]*[0-9]*)+"); 


button.addEventListener("click", (e) => {
  //Expresion aritmetica
  if (aritmetica.test(textExpe.value)) {
    textoP.innerHTML =
      "Expresion aritmetica <br>" +
      "Son aquellas que utilizan" + //
      "operadores aritméticos y" + //
      "como operandos tienen" + //
      "datos numéricos.<br>" + //
      "Ej: 20+30";
    return;
  }
  if (asignacion.test(textExpe.value)) {
    textoP.innerHTML =
      "Expresion ASIGNACION <br>" +
      "Se utilizan para asignarle valores a las variables o" +
      "constantes. <br>" + //
      "Ej: x = 15";
    return;
  }

  if (relacional.test(textExpe.value)) {
    let temp = textExpe.value
      .replace("<=", "")
      .replace(">=", "")
      .replace("<", "")
      .replace(">", "")
      .replace("!=", "")
      .replace("==", "");

    if (Number(temp)) {
      textoP.innerHTML =
        "Expresion RELACIONAL <br>" +
        "Son las expresiones en las que" +
        "aparecen los operadores relacionales.<br>" +
        "Ej: 3>6 o 10>=10";
      return;
    }

    if(alfanumerica.test(textExpe.value) && !textExpe.value.includes("&")){
      textoP.innerHTML ="Expresion ALFANUMERICA";
      
      return;
    }  
    if(logicos.test(textExpe.value)){
      textoP.innerHTML ="Expresion LOGICA <br>"+
                        "Son aquellas que usan "+
                        "exclusivamente operadores lógicos.<br>"+
                        "Ej: 10<20 AND 40>25";
      return;
    }

    
  }

});
