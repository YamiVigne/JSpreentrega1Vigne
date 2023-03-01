// alerta bienvenida
alert("¡Hola! ¡Bienvenido a mi rincón de compras!");

// prompt (Emergente) Solicitar informacion al usuario
const NOMBRE = prompt("Ingresa tu nombre asi nos conocemos mejor")
console.log(NOMBRE)

alert("¡Genial " + NOMBRE + " , si llegasté a mi página es para aprender a comprar al exterior desde Argentina !");
const EDAD = prompt(" Ahora ingresa tu edad")
console.log(EDAD)

if (EDAD >= 18) {
    alert("Perfecto! Estas en el lugar indicado ... ~ ")
   
   }else{
       alert("Al ser menor, no vas a poder realizar compras ni gastos a tu nombre, sino bajo el consentimiento de un adulto .")
   }
   
// ============= Calcular impuestos streaming ============= 
const VALOR_STREAMING = 0.76

function NETFLIX(){
    let elegirPLAN = parseInt (
    prompt(" " + NOMBRE + " ¿Que plan queres adquirir?: \n 1. PLAN BÁSICO \n 2. PLAN ESTÁNDAR \n 3. PLAN PREMIUM")
    );
        switch (elegirPLAN) {
            case 1:
                alert("Elegiste el PLAN BÁSICO que vale $699 al mes, puedes ver en 1 dispositivo compatible a la vez y en HD")
                break
            
            case 2:
                alert("Elegiste el PLAN ESTÁNDAR que vale $1299 al mes, puedes ver en 2 dispositivos compatibles a la vez y en Full HD")
                break
            
            case 3:
                alert("Elegiste el PLAN PREMIUM que vale $1899 al mes, puedes ver en 4 dispositivos compatibles a la vez y en Ultra HD")
                break
                        
            default:
                alert("No eligiste nada");
                break
                
        }

        const PRECIO = prompt("Ingresa el precio del Plan")

            const TOTAL = PRECIO * (1 + VALOR_STREAMING)
            const FRASE = "El valor final del Plan es de $" + TOTAL + " con impuestos"

                alert(FRASE)
    }
   
function SPOTIFY(){
    let planINDIVIDUAL = 279
    let planFAMILIAR = 489

    let elegirPLAN = parseInt (
    prompt(" " + NOMBRE + " ¿Que plan queres adquirir?: \n 1. PLAN INDIVIDUAL \n 2. PLAN FAMILIAR")
    );
        switch (elegirPLAN) {
            case 1:
                alert("Elegiste el PLAN INDIVIDUAL vale $279")
                
                const MULTI = planINDIVIDUAL * (1 + VALOR_STREAMING) 
                console.log(MULTI)

                const FRASE = "El valor final del Plan es de $" + MULTI + " con impuestos"
                    alert(FRASE)

                break
            
            case 2:
                alert("Elegiste el PLAN FAMILIAR vale $489")
                const MULTIPLICACION = planFAMILIAR * (1 + VALOR_STREAMING) 
                console.log(MULTIPLICACION)

                const FRASE1 = "El valor final del Plan es de $" + MULTIPLICACION + " con impuestos"
                    alert(FRASE1)

                break
            
            default:
                alert(" " + NOMBRE + " No eligiste nada");
                break
                    
        }

}

function HBO(){

    let planMENSUAL = 499
    let planTRIMESTRAL = 1349
    let planANUAL = 4299

    let elegirPLAN = parseInt (
    prompt(" " + NOMBRE + " ¿Que plan queres adquirir?: \n 1. PLAN MENSUAL \n 2. PLAN TRIMESTRAL \n 3. PLAN ANUAL")
    );
        switch (elegirPLAN) {
            case 1:
                alert("Elegiste el PLAN MENSUAL vale $499")
                
                const MULTI = planMENSUAL * (1 + VALOR_STREAMING) 
                console.log(MULTI)

                const FRASE = "El valor final del Plan es de $" + MULTI + " con impuestos"
                    alert(FRASE)

                break
            
            case 2:
                alert("Elegiste el PLAN TRIMESTRAL vale $1349")
                const MULTIPLICACION = planTRIMESTRAL * (1 + VALOR_STREAMING) 
                console.log(MULTIPLICACION)

                const FRASE1 = "El valor final del Plan es de $" + MULTIPLICACION + " con impuestos"
                    alert(FRASE1)

                break

                
            case 3:
                alert("Elegiste el PLAN ANUAL vale $4299")
                const MULTIPLI1 = planANUAL * (1 + VALOR_STREAMING) 
                console.log(MULTIPLI1)

                const FRASE2 = "El valor final del Plan es de $" + MULTIPLI1 + " con impuestos"
                    alert(FRASE2)

                break
            
            default:
                alert(" " + NOMBRE + " No eligiste nada");
                break
                    
        }

}
   
function YOUTUBE(){

}
