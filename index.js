// alerta bienvenida
function solicitarUsuario() {
    alert("Bienvenido a Perifericos Center");
    let usuario = prompt("Ingresa tu nombre");
    while (usuario === "") {
      usuario = prompt("Ingresa tu nombre!!!!");
    }

    let edad = prompt("Ahora ingresa tu edad");
    console.log(edad);
    if (edad >= 18) {
        alert("Perfecto! Estas en el lugar indicado ... ~ ")
    }else{
        alert("Al ser menor, no vas a poder realizar compras ni gastos a tu nombre. Necesitas un adulto responsable que te ayude a concretar la compra")
    }
  }

// productos
  function mostrarSetup() {
    let setup;
    do {
      setup = parseInt
      (prompt("Elegí los periféricos que necesitas para tu pc : \n 1) Teclado \n 2) Mouse \n 3) Joystick \n 4) Webcam \n 5) Parlantes \n 6) Microfonos"))
    } while (setup != 1 && setup != 2 && setup != 3 && setup != 4 && setup != 5 && setup != 6)
    switch (setup) {
          case 1:
            return "Teclado";
          case 2: 
            return "Mouse";
          case 3: 
            return "Joystick";      
          case 4:
            return "Webcam";
          case 5: 
            return "Parlantes";
          case 6: 
            return "Microfonos";    
  
    }
  }
// precios
  function validarPrecio(setup){
      if(setup==="Teclado"){
        return 6999;
    }
    else if(setup==="Mouse"){
        return 2180;
    }
    else if(setup==="Joystick"){
        return 6480;
    }
    else if(setup==="Webcam"){
        return 7499;
    }
    else if(setup==="Parlantes"){
        return 3420;
    }
    else {
        return 5170;
    }
  }
  
// cobro
  function cobrar(nombre,precio){
     alert("Estas por comprar el siguiente périferico para tu pc: " + nombre +" \nPrecio: $"+ precio) 
      let pago = parseInt(prompt("¿Con cuanto dinero abonas?"))
      if(pago> precio){
          alert("¡Gracias por tu compra! Tu vuelto es "+ "$" + (pago - precio))
      }
              
      else if (pago === precio) {
          alert("¡Gracias por tu compra!!");
      }
      else {
          alert ("No te alcanza !!!!")
      }
  }
  
  solicitarUsuario();
  let setupNombre = mostrarSetup();
  let precioSetup = validarPrecio(setupNombre);
  cobrar(setupNombre,precioSetup);
  
  
  