const productos = [
  // TENIS
  {
    id: 2,
    nombre: "Raqueta Babolat Pure Drive",
    precio: 179.99,
    categoria: "tenis",
    imagen: "fotos/raquetababolat.webp",
    descrip: "Potencia y control para jugadores avanzados.",
    fecha: "2024-06-23"
  },
  {
    id: 4,
    nombre: "Raqueta RS",
    precio: 149.99,
    categoria: "tenis",
    imagen: "fotos/rs.webp",
    descrip: "Diseño innovador con gran potencia.",
    fecha: "2024-06-02"
  },
  {
    id: 5,
    nombre: "Pack 3 Pelotas Dunlop",
    precio: 14.99,
    categoria: "tenis",
    imagen: "fotos/pack3pelotas.webp",
    descrip: "Pack de tres pelotas de alta durabilidad.",
    fecha: "2024-05-26"
  },
  {
    id: 6,
    nombre: "Grip Antideslizante",
    precio: 7.99,
    categoria: "tenis",
    imagen: "fotos/grip.webp",
    descrip: "Mejor agarre y comodidad.",
    fecha: "2024-06-15"
  },
  {
    id: 7,
    nombre: "Muñequeras Nike",
    precio: 9.99,
    categoria: "tenis",
    imagen: "fotos/munequeras.webp",
    descrip: "Absorbe el sudor y brinda soporte.",
    fecha: "2024-05-18"
  },

  // FÚTBOL
  {
    id: 8,
    nombre: "Camiseta Boca Juniors",
    precio: 89.99,
    categoria: "futbol",
    imagen: "fotos/boca.png",
    descrip: "Camiseta oficial temporada 2024.",
    fecha: "2024-06-10"
  },
  {
    id: 9,
    nombre: "Camiseta Real Madrid",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/realmadrid.webp",
    descrip: "Camiseta oficial blanca con detalles dorados.",
    fecha: "2024-05-05"
  },
  {
    id: 10,
    nombre: "Camiseta Barcelona",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/barcelona.jpg",
    descrip: "Camiseta oficial azulgrana.",
    fecha: "2024-06-14"
  },
  {
    id: 11,
    nombre: "Camiseta Liverpool",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/liverpool.jpg",
    descrip: "Camiseta oficial roja.",
    fecha: "2024-05-21"
  },
  {
    id: 12,
    nombre: "Camiseta PSG",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/psg.jpg",
    descrip: "Camiseta oficial azul con detalles rojos.",
    fecha: "2024-06-06"
  },
  {
    id: 13,
    nombre: "Camiseta Bayern Munich",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/bayern.jpg",
    descrip: "Camiseta oficial roja.",
    fecha: "2024-05-02"
  },
  {
    id: 14,
    nombre: "Botines Nike Mercurial",
    precio: 129.99,
    categoria: "futbol",
    imagen: "fotos/mercurial.jpg",
    descrip: "Botines ligeros para velocidad.",
    fecha: "2024-06-19"
  },
  {
    id: 15,
    nombre: "Botines Adidas Predator",
    precio: 129.99,
    categoria: "futbol",
    imagen: "fotos/predator.webp",
    descrip: "Control y precisión en cada pase.",
    fecha: "2024-05-28"
  },
  {
    id: 16,
    nombre: "Botines Puma Future",
    precio: 119.99,
    categoria: "futbol",
    imagen: "fotos/future.webp",
    descrip: "Diseño innovador y ajuste perfecto.",
    fecha: "2024-06-04"
  },
  {
    id: 17,
    nombre: "Botines Under Armour Magnetico",
    precio: 109.99,
    categoria: "futbol",
    imagen: "fotos/magn.webp",
    descrip: "Comodidad y tracción superior.",
    fecha: "2024-05-22"
  },
  {
    id: 18,
    nombre: "Pelota Liga Argentina",
    precio: 49.99,
    categoria: "futbol",
    imagen: "fotos/pelotaarg.webp",
    descrip: "Pelota oficial de la Liga Profesional.",
    fecha: "2024-05-11"
  },
  {
    id: 19,
    nombre: "Pelota Premier League",
    precio: 59.99,
    categoria: "futbol",
    imagen: "fotos/pelotapremier.jpg",
    descrip: "Pelota oficial de la Premier League.",
    fecha: "2024-06-08"
  },

  // BASKET
  {
    id: 20,
    nombre: "Remera Boston Celtics",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/celtics.jpg",
    descrip: "Remera oficial Boston Celtics.",
    fecha: "2024-05-17"
  },
  {
    id: 21,
    nombre: "Remera LA Lakers",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/lakers.jpg",
    descrip: "Remera oficial LA Lakers.",
    fecha: "2024-06-26"
  },
  {
    id: 22,
    nombre: "Remera Timberwolves",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/wolves.jpg",
    descrip: "Remera oficial Timberwolves.",
    fecha: "2024-05-20"
  },
  {
    id: 23,
    nombre: "Remera Chicago Bulls",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/bulls.jpg",
    descrip: "Remera oficial Chicago Bulls.",
    fecha: "2024-06-01"
  },
  {
    id: 24,
    nombre: "Remera Brooklyn Nets",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/nets.jpg",
    descrip: "Remera oficial Brooklyn Nets.",
    fecha: "2024-05-13"
  },
  {
    id: 25,
    nombre: "Remera Indiana Pacers",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/pacers.jpg",
    descrip: "Remera oficial Indiana Pacers.",
    fecha: "2024-06-18"
  },
  {
    id: 26,
    nombre: "Remera Golden State Warriors",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/warr.webp",
    descrip: "Remera oficial Golden State Warriors.",
    fecha: "2024-05-24"
  },
  {
    id: 27,
    nombre: "Zapatillas Nike Air Zoom BB",
    precio: 139.99,
    categoria: "basket",
    imagen: "fotos/nikeairzoom.jpg",
    descrip: "Zapatillas de alto rendimiento para basket.",
    fecha: "2024-06-12"
  },
  {
    id: 28,
    nombre: "Zapatillas Adidas Harden Vol.5",
    precio: 139.99,
    categoria: "basket",
    imagen: "fotos/adidashardem.jpg",
    descrip: "Zapatillas signature de James Harden.",
    fecha: "2024-05-16"
  },
  {
    id: 29,
    nombre: "Pelota Spalding NBA",
    precio: 49.99,
    categoria: "basket",
    imagen: "fotos/pelotabasket.jpg",
    descrip: "Pelota oficial de la NBA.",
    fecha: "2024-06-05"
  },

  // RUNNING
  {
    id: 30,
    nombre: "Zapatillas Adidas Ultraboost",
    precio: 179.99,
    categoria: "running",
    imagen: "fotos/ultraboost.jpg",
    descrip: "Amortiguación y retorno de energía.",
    fecha: "2024-05-07"
  },
  {
    id: 31,
    nombre: "Zapatillas Adidas Adizero",
    precio: 159.99,
    categoria: "running",
    imagen: "fotos/adizero.jpg",
    descrip: "Ligereza para máxima velocidad.",
    fecha: "2024-06-20"
  },
  {
    id: 32,
    nombre: "Zapatillas Nike Pegasus",
    precio: 169.99,
    categoria: "running",
    imagen: "fotos/pegasus.jpg",
    descrip: "Versatilidad y comodidad.",
    fecha: "2024-05-30"
  },
  {
    id: 33,
    nombre: "Zapatillas Nike ZoomX",
    precio: 189.99,
    categoria: "running",
    imagen: "fotos/zoomx.jpg",
    descrip: "Máxima respuesta y ligereza.",
    fecha: "2024-06-09"
  },
  {
    id: 34,
    nombre: "Zapatillas Asics Gel-Kayano",
    precio: 159.99,
    categoria: "running",
    imagen: "fotos/asicsgel.webp",
    descrip: "Soporte y estabilidad premium.",
    fecha: "2024-05-23"
  },
  {
    id: 35,
    nombre: "Zapatillas Reebok Floatride",
    precio: 139.99,
    categoria: "running",
    imagen: "fotos/reebok.webp",
    descrip: "Ligereza y amortiguación.",
    fecha: "2024-06-03"
  },
  {
    id: 36,
    nombre: "Zapatillas Puma Velocity Nitro",
    precio: 129.99,
    categoria: "running",
    imagen: "fotos/pumazapas.jpg",
    descrip: "Comodidad y velocidad.",
    fecha: "2024-05-29"
  }
];


//funciones 

//mostrar productos en el carrito
function mostrarProdsCarrito() {
  const container = document.getElementById('cartItems'); //traigo los items que estan en el carrito
  container.innerHTML = ''; //para asegurarme que no se agregue lo que habia antes
  const carrito = obtenerCarrito(); 
  for (let clave in carrito) { //recorre cada producto
    const producto = productos.find(function(p) { //busca el objeto completo en productos para tener nombre y precio
      return p.id == clave;
    });
    const cantidad = carrito[clave];
    const div = document.createElement('div'); //lo creo en html, nombre/precioxcantidad/boton para eliminar
    div.innerHTML = `
      <span>${producto.nombre} (x${cantidad})</span>
      <span>$${(producto.precio * cantidad).toFixed(2)}</span>
      <button data-id="${clave}" class="removeBtn">✕</button>
    `;
    container.appendChild(div); //lo agrego
  }
  const botones = container.querySelectorAll('.removeBtn'); //le doy la funcionalidad al boton de sacar del carrito
  for (let i = 0; i < botones.length; i++) {
    (function(boton){
      const clave = boton.getAttribute('data-id');
      boton.addEventListener('click', function(){
        quitarDelCarrito(clave);
      });
    })(botones[i]);
  }
  actualizarTotalCarrito();
}

//guardo en el navegador la info del carrito
function guardarCarrito(carrito) {
  localStorage.cart = JSON.stringify(carrito); //local storage solo acepta cadena de caracteres, por eso lo convierto
}

//me da el objeto con el estado del carrito
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('cart') || '{}'); //recupero el texto que habia guardado y lo vuelvo a convertir en un objeto
}

//mantiene actualizado el contador del carrito
function actContCarrito() {
  const carrito = obtenerCarrito(); //lee el localstorage
  let articulos = 0;
  for (let clave in carrito) { //acumula el total del carrito
    articulos += carrito[clave];
  }
  const cont = document.getElementById('cartCount');
  cont.textContent = articulos; //actualiza el contador
}

//agregar al carrito y actualizar contador total
function agregarAlCarrito(id) {
  const carrito = obtenerCarrito(); //estado actual del carrito
  carrito[id] = (carrito[id] || 0) + 1; //agrego una unidad
  guardarCarrito(carrito);
  actContCarrito();
  mostrarProdsCarrito();
  actualizarTotalCarrito();
  document.getElementById('sidebarCart').classList.add('open'); //abro del sidebar
}

//eliminar del carrito y actualizar contador total
function quitarDelCarrito(id) {
  const carrito = obtenerCarrito();
  if (!carrito[id]) return; //salir si no existe
  carrito[id]--; //resta una unidad al carrito
  if (carrito[id] === 0) delete carrito[id]; // si ya no quedan de ese producto en el carrito lo elimina
  guardarCarrito(carrito);
  actContCarrito();
  mostrarProdsCarrito();
  actualizarTotalCarrito();
}

//abre y cierra la barra lateral del carrito
const botonCarrito  = document.getElementById('cartButton');
const barraCarrito  = document.getElementById('sidebarCart');
const botonCerrar   = document.getElementById('closeCart');

//abrir sidebar
botonCarrito.addEventListener('click', function(){
  barraCarrito.classList.add('open');
});

//cerrar sidebar
botonCerrar.addEventListener('click', function(){
  barraCarrito.classList.remove('open');
});

//botón de compra
const botonCompra = document.getElementById('buyButton'); //traigo el boton de compra
botonCompra.addEventListener('click',function(){
  alert('¡Gracias por comprar en Futix!');
  localStorage.removeItem('cart'); //borro el carrito del localstorage
  actContCarrito();
  mostrarProdsCarrito(); 
  actualizarTotalCarrito(); 
});

//cargar productos por categoría
function cargarProdPorCat(){
  const listas = document.querySelectorAll('.productos-lista'); //traigo todas las listas de productos
  listas.forEach(function(lista){ //por cada lista
    const cat = lista.closest('section').id; //agarro la categoria del id de la seccion
    const filtrados = productos.filter(function(p){ //filtro productos de esa categoria
      return p.categoria === cat;
    });
    filtrados.forEach(function(p){ //por cada producto filtrado
      const div = document.createElement('div'); //creo el div del producto
      div.className = 'producto'; //le pongo la clase producto
      div.innerHTML =
        '<img src="'+p.imagen+'" alt="'+p.nombre+'">'+ //imagen del producto
        '<h3>'+p.nombre+'</h3>'+ //nombre
        '<p>'+p.descrip+'</p>'+ //descripcion
        '<p>$'+p.precio.toFixed(2)+'</p>'+ //precio
        '<button class="btn-agregar" data-id="'+p.id+'">Agregar al carrito</button>'; //boton pa agregar
      lista.appendChild(div); //lo agrego a la lista
    });
  });
  const btns = document.querySelectorAll('.btn-agregar'); //traigo botones de agregar
  btns.forEach(function(b){ //por cada boton
    b.addEventListener('click',function(){ //le asigno el click para agregar
      agregarAlCarrito(b.getAttribute('data-id')); //agarro id del data y agrego
    });
  });
}

//carousel de últimos productos por fecha en el inicio
function generarCarruselUltimos(){
  const container = document.getElementById('recientes-inner'); //traigo contenedor del carousel
  if(!container) return; //si no existe salgo
  const ultimos = productos.slice() //clono array
    .sort(function(a,b){ //ordeno de mas nuevo a mas viejo
      return new Date(b.fecha) - new Date(a.fecha);
    })
    .slice(0,10); //me quedo con los 10 mas nuevos

  const porSlide = 4; //cantidad por slide
  for(let i=0; i<ultimos.length; i+=porSlide){ //armo grupos de 4
    const prodGroup = document.createElement('div'); //creo el div del slide
    prodGroup.className = 'carousel-item'+(i===0?' active':''); //activo el primero
    let inner = '<div class="d-flex justify-content-center gap-4">'; //inicio fila
    ultimos.slice(i,i+porSlide).forEach(function(p){ //por cada producto del grupo
      inner +=
        '<div class="producto" style="width:18rem;">'+
          '<img src="'+p.imagen+'" alt="'+p.nombre+'" class="w-100" style="height:180px;object-fit:contain;">'+ //imagen
          '<h3 style="font-size:1.1rem;">'+p.nombre+'</h3>'+ //nombre
          '<p>'+p.descrip+'</p>'+ //descripcion
          '<p>$'+p.precio.toFixed(2)+'</p>'+ //precio
          '<button class="btn-agregar" data-id="'+p.id+'">Agregar al carrito</button>'+ //boton para agregar
        '</div>';
    });
    inner += '</div>'; //cierro fila
    prodGroup.innerHTML = inner; //seteo html del slide
    container.appendChild(prodGroup); //lo agrego al carousel
  }
  const btns2 = container.querySelectorAll('.btn-agregar'); //traigo botones del carousel
  btns2.forEach(function(b){ //por cada boton
    b.addEventListener('click',function(){ //le asigno click pa agregar
      agregarAlCarrito(b.getAttribute('data-id')); //agarro id y agrego
    });
  });
}

//actualizar total del carrito
function actualizarTotalCarrito(){
  const carrito = obtenerCarrito(); //traigo carrito del storage
  let suma = 0;
  for(let clave in carrito){ //por cada producto en el carrito
    const producto = productos.find(function(p){ //busco datos del producto
      return p.id==clave;
    });
    if(producto) suma += producto.precio*carrito[clave]; //sumo precio por cantidad
  }
  document.getElementById('cartTotal').textContent='Total: $'+suma.toFixed(2); //muestro el total
}

//inicializar al cargar la página
document.addEventListener('DOMContentLoaded',function(){ //cuando arranca la página
  actContCarrito(); //actualizo contador
  mostrarProdsCarrito(); //pinto productos en el carrito
  actualizarTotalCarrito(); //actualizo total
  cargarProdPorCat(); //cargo productos x categoría
  generarCarruselUltimos(); //armo carousel de recientes
});
