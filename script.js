
let products = [
  // TENIS
  {
    id: 1,
    nombre: "Raqueta Wilson Pro Staff",
    precio: 199.99,
    categoria: "tenis",
    imagen: "fotos/raquetawilsonprostaf.jpg",
    descrip: "Raqueta profesional de alto rendimiento."
  },
  {
    id: 2,
    nombre: "Raqueta Babolat Pure Drive",
    precio: 179.99,
    categoria: "tenis",
    imagen: "fotos/raquetababolat.webp",
    descrip: "Potencia y control para jugadores avanzados."
  },
  {
    id: 3,
    nombre: "Raqueta Head Radical",
    precio: 159.99,
    categoria: "tenis",
    imagen: "fotos/h.jpg",
    descrip: "Ligera y versátil para todo tipo de juego."
  },
  {
    id: 4,
    nombre: "Pack 3 Pelotas Dunlop",
    precio: 14.99,
    categoria: "tenis",
    imagen: "fotos/pack3pelotas.webp",
    descrip: "Pack de tres pelotas de alta durabilidad."
  },
  {
    id: 5,
    nombre: "Grip Antideslizante",
    precio: 7.99,
    categoria: "tenis",
    imagen: "fotos/grip.webp",
    descrip: "Mejor agarre y comodidad."
  },
  {
    id: 6,
    nombre: "Muñequeras Nike",
    precio: 9.99,
    categoria: "tenis",
    imagen: "fotos/munequeras.webp",
    descrip: "Absorbe el sudor y brinda soporte."
  },

  // FÚTBOL
  {
    id: 7,
    nombre: "Camiseta Boca Juniors",
    precio: 89.99,
    categoria: "futbol",
    imagen: "fotos/boca.png",
    descrip: "Camiseta oficial temporada 2024."
  },
  {
    id: 8,
    nombre: "Camiseta Real Madrid",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/realmadrid.webp",
    descrip: "Camiseta oficial blanca con detalles dorados."
  },
  {
    id: 9,
    nombre: "Camiseta Barcelona",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/barcelona.jpg",
    descrip: "Camiseta oficial azulgrana."
  },
  {
    id: 10,
    nombre: "Camiseta Liverpool",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/liverpool.jpg",
    descrip: "Camiseta oficial roja."
  },
  {
    id: 11,
    nombre: "Camiseta PSG",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/psg.jpg",
    descrip: "Camiseta oficial azul con detalles rojos."
  },
  {
    id: 12,
    nombre: "Camiseta Bayern Munich",
    precio: 99.99,
    categoria: "futbol",
    imagen: "fotos/bayern.jpg",
    descrip: "Camiseta oficial roja."
  },
  {
    id: 13,
    nombre: "Botines Nike Mercurial",
    precio: 129.99,
    categoria: "futbol",
    imagen: "fotos/mercurial.jpg",
    descrip: "Botines ligeros para velocidad."
  },
  {
    id: 14,
    nombre: "Botines Adidas Predator",
    precio: 129.99,
    categoria: "futbol",
    imagen: "fotos/predator.webp",
    descrip: "Control y precisión en cada pase."
  },
  {
    id: 15,
    nombre: "Botines Puma Future",
    precio: 119.99,
    categoria: "futbol",
    imagen: "fotos/future.webp",
    descrip: "Diseño innovador y ajuste perfecto."
  },
  {
    id: 16,
    nombre: "Botines Under Armour Magnetico",
    precio: 109.99,
    categoria: "futbol",
    imagen: "fotos/magn.webp",
    descrip: "Comodidad y tracción superior."
  },
  {
    id: 17,
    nombre: "Pelota Liga Argentina",
    precio: 49.99,
    categoria: "futbol",
    imagen: "fotos/pelotaarg.webp",
    descrip: "Pelota oficial de la Liga Profesional."
  },
  {
    id: 18,
    nombre: "Pelota Premier League",
    precio: 59.99,
    categoria: "futbol",
    imagen: "fotos/pelotapremier.jpg",
    descrip: "Pelota oficial de la Premier."
  },

  // RUNNING
  {
    id: 19,
    nombre: "Zapatillas Adidas Ultraboost",
    precio: 179.99,
    categoria: "running",
    imagen: "fotos/ultraboost.jpg",
    descrip: "Amortiguación y retorno de energía."
  },
  {
    id: 20,
    nombre: "Zapatillas Adidas Adizero",
    precio: 159.99,
    categoria: "running",
    imagen: "fotos/adizero.jpg",
    descrip: "Ligereza para máxima velocidad."
  },
  {
    id: 21,
    nombre: "Zapatillas Nike Pegasus",
    precio: 169.99,
    categoria: "running",
    imagen: "fotos/pegasus.jpg",
    descrip: "Versatilidad y comodidad."
  },
  {
    id: 22,
    nombre: "Zapatillas Nike ZoomX",
    precio: 189.99,
    categoria: "running",
    imagen: "fotos/zoomx.jpg",
    descrip: "Máxima respuesta y ligereza."
  },
  {
    id: 23,
    nombre: "Zapatillas Asics Gel-Kayano",
    precio: 159.99,
    categoria: "running",
    imagen: "fotos/asicsgel.webp",
    descrip: "Soporte y estabilidad premium."
  },
  {
    id: 24,
    nombre: "Zapatillas Reebok Floatride",
    precio: 139.99,
    categoria: "running",
    imagen: "fotos/reebok.webp",
    descrip: "Ligereza y amortiguación."
  },
  {
    id: 25,
    nombre: "Zapatillas Puma Velocity Nitro",
    precio: 129.99,
    categoria: "running",
    imagen: "fotos/pumazapas.jpg",
    descrip: "Comodidad y velocidad."
  },
  {
    id: 26,
    nombre: "Zapatillas New Balance Fresh Foam",
    precio: 149.99,
    categoria: "running",
    imagen: "fotos/new.jpeg",
    descrip: "Amortiguación suave y soporte."
  },

  // BASKET
  {
    id: 27,
    nombre: "Remera Celtics",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/celtics.jpg",
    descrip: "Remera oficial Boston Celtics."
  },
  {
    id: 28,
    nombre: "Remera Lakers",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/lakers.jpg",
    descrip: "Remera oficial LA Lakers."
  },
  {
    id: 29,
    nombre: "Remera Timberwolves",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/wolves.jpg",
    descrip: "Remera oficial Timberwolves."
  },
  {
    id: 30,
    nombre: "Remera Chicago Bulls",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/bulls.jpg",
    descrip: "Remera oficial Chicago Bulls."
  },
  {
    id: 31,
    nombre: "Remera Brooklyn Nets",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/nets.jpg",
    descrip: "Remera oficial Brooklyn Nets."
  },
  {
    id: 32,
    nombre: "Remera Indiana Pacers",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/pacers.jpg",
    descrip: "Remera oficial Indiana Pacers."
  },
  {
    id: 33,
    nombre: "Remera Golden State Warriors",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/warr.webp",
    descrip: "Remera oficial Golden State Warriors."
  },
  {
    id: 34,
    nombre: "Zapatillas Nike Air Zoom BB",
    precio: 139.99,
    categoria: "basket",
    imagen: "fotos/nikeairzoom.jpg",
    descrip: "Zapatillas de alto rendimiento."
  },
  {
    id: 35,
    nombre: "Zapatillas Adidas Harden Vol. 5",
    precio: 139.99,
    categoria: "basket",
    imagen: "fotos/adidashardem.jpg",
    descrip: "Zapatillas signature de James Harden."
  },
  {
    id: 36,
    nombre: "Pelota Spalding NBA",
    precio: 49.99,
    categoria: "basket",
    imagen: "fotos/pelotabasket.jpg",
    descrip: "Pelota oficial de la NBA."
  }
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let section = document.getElementById(product.categoria);
    if (section) {
        let lista = section.querySelector('.productos-lista');
        lista.innerHTML += `
            <div class="producto">
                <img src="${product.imagen}" alt="${product.nombre}">
                <h3 class="prodNombre">${product.nombre}</h3>
                <p class="prodTipo">${product.descrip}</p>
                <p class="prodPrecio">$${product.precio}</p>
                <button class="btn btn-success w-100 mt-2 btn-agregar" data-id="${product.id}">Agregar al carrito</button>
            </div>
        `;
    }
}

let carrito = [];

function actualizarCarrito(){
  let total = localStorage.getItem("carrito") || 0;
  let contador = document.getElementById("carritoContador");
  if (contador){
    contador.textContent = total
  }
}

function agregarAlCarrito() {
    let total = Number(localStorage.getItem('carrito')) || 0;
    total += 1;
    localStorage.setItem('carrito', total);
    actualizarCarrito();
}

function quitarDelCarrito() {
    let total = Number(localStorage.getItem('carrito')) || 0;
    if (total > 0) {
      total -= 1;
      localStorage.setItem('carrito', total);
    }
    actualizarCarrito();
}


