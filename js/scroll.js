// Codigo para lograr el scroll de la pagina
//agrega un evento que se ejecuta solo después de que todos los elementos del DOM están disponibles.
document.addEventListener('DOMContentLoaded', function() {
    //toma todos los enlaces (<a>) cuyo atributo href comienza con # y devuelve una Lista de todos esos elementos.
    const links = document.querySelectorAll('a[href^="#"]');
    //toma el elemento header de la página y devuelve el primer elemento que coincide con el selector CSS.
    const header = document.querySelector('header');
    //toma la altura del header, incluyendo el padding y el borde.
    const headerHeight = header.offsetHeight;
  
    //pasa por cada enlace en la Lista links.
    for (const link of links) {
        //pone un evento de clic a cada enlace y define una función anónima que recibe el evento del clic como parámetro.
        link.addEventListener('click', function(e) {
        //elimina el comportamiento brusco (saltar) por defecto del enlace y ayuda a implementar el desplazamiento suave.    
        e.preventDefault();
        // toma el valor del atributo href del enlace y elimina el # utilizando substring(1)
        const targetId = this.getAttribute('href').substring(1);
        //usa el ID obtenido para seleccionar la sección objetivo en el documento y devuelve el elemento cuyo id coincide con targetId.
        const targetSection = document.getElementById(targetId);
  
        //verifica que la sección existe.
        if (targetSection) {
          //encuentra la posición vertical de la sección objetivo respecto al inicio del documento y la devuelve en píxeles.  
          let offset = targetSection.offsetTop;
          
          //ajusta la posición si el header es fijo en pantallas grandes, restando altura del header.
          if (window.innerWidth >= 768) {
            offset -= headerHeight;
          }
          
          //desplaza la ventana del navegador a la posición calculada.
          window.scrollTo({
            //especifica la posición vertical a la que debe ir.
            top: offset,
            //genera el desplazamiento suave.
            behavior: 'smooth'
          });
        }
      });
    }
  });
  