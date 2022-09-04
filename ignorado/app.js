//variables LET O VAR (VAR antiguo, ya no se usa)

let curso = "coderhouse";
console.log(curso);
let numeroDeAlumnos = 181;
console.log(numeroDeAlumnos);
let enCurso = true;
console.log(enCurso);

//tipos de datos
//números
//cadena de caracteres o STRINGS "coderhouse"
//buleanos o booleans TRUE O FALSE

//difencias entre LET y CONST
//let curso; (pueden iniciarlizarse vacias y luego definir un valor(ser redeclaradas)) en cambio Const debe definirse
    let curso1;    

    curso1 = "Js"

    console.log(curso)//solo para resultado de la consola
//
    //las variables const no pueden iniciar vacias y no pueden ser redeclaradas
  //  const curso2 = "Js";
    curso2 = "React";
/* operadores aritméticos
    let numero1 = "Coder";
    let numero2 = "House";

    let resultado = numero1 + " " + numero2;

    alert(resultado);

let nombre = prompt ("ingrese su nombre: ")
//prompt solo captura strings por lo tanto no puede con numeros

alert("hola " + nombre);*/
//parcear es transformar un dato en otro tipo de dato

let numero5 = parseFloat(prompt("ingrese un numero: "));
let numero6 = parseFloat(prompt("Ingrese otro numero: "));

let resultado = numero5 + numero6;

alert(resultado);