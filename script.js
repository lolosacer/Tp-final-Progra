// Datos de productos (array de objetos visto en clase)
const products = [
  // TENIS
  {
    id: 1,
    nombre: "Raqueta Wilson Pro Staff",
    precio: 199.99,
    categoria: "tenis",
    imagen: "fotos/raquetawilsonprostaf.jpg",
    descrip: "Raqueta profesional de alto rendimiento.",
    fecha: "2024-05-01"
  },
  {
    id: 2,
    nombre: "Raqueta Babolat Pure Drive",
    precio: 179.99,
    categoria: "tenis",
    imagen: "fotos/raquetababolat.webp",
    descrip: "Potencia y control para jugadores avanzados.",
    fecha: "2024-05-02"
  },
  {
    id: 3,
    nombre: "Raqueta Head Radical",
    precio: 159.99,
    categoria: "tenis",
    imagen: "fotos/h.jpg",
    descrip: "Ligera y versátil para todo tipo de juego.",
    fecha: "2024-05-03"
  },
  {
    id: 4,
    nombre: "Zapatillas Nike Court Lite",
    precio: 89.99,
    categoria: "tenis",
    imagen: "fotos/nikecourt.jpg",
    descrip: "Comodidad y estilo en la pista.",
    fecha: "2024-05-04"
  },
  {
    id: 5,
    nombre: "Zapatillas Adidas SoleCourt",
    precio: 94.99,
    categoria: "tenis",
    imagen: "fotos/adidassolecourt.jpg",
    descrip: "Durabilidad y agarre excepcionales.",
    fecha: "2024-05-05"
  },
  // FÚTBOL
  {
    id: 6,
    nombre: "Botines Adidas Predator",
    precio: 129.99,
    categoria: "futbol",
    imagen: "fotos/botinespredator.jpg",
    descrip: "Control de balón perfecto.",
    fecha: "2024-05-06"
  },
  {
    id: 7,
    nombre: "Botines Nike Mercurial",
    precio: 139.99,
    categoria: "futbol",
    imagen: "fotos/botinesmercurial.jpg",
    descrip: "Rapidez y precisión.",
    fecha: "2024-05-07"
  },
  {
    id: 8,
    nombre: "Balón Nike Ordem",
    precio: 39.99,
    categoria: "futbol",
    imagen: "fotos/balonordem.jpg",
    descrip: "Vuelo estable y resistente.",
    fecha: "2024-05-08"
  },
  {
    id: 9,
    nombre: "Balón Adidas Conext21",
    precio: 44.99,
    categoria: "futbol",
    imagen: "fotos/balonconext21.jpg",
    descrip: "Calidad profesional.",
    fecha: "2024-05-09"
  },
  {
    id: 10,
    nombre: "Espinilleras Puma",
    precio: 24.99,
    categoria: "futbol",
    imagen: "fotos/espinilleraspuma.jpg",
    descrip: "Protección y comodidad.",
    fecha: "2024-05-10"
  },
  // BASKET
  {
    id: 11,
    nombre: "Zapatillas Nike LeBron",
    precio: 149.99,
    categoria: "basket",
    imagen: "fotos/nikelbron.jpg",
    descrip: "Potencia para tu juego.",
    fecha: "2024-05-11"
  },
  {
    id: 12,
    nombre: "Zapatillas Adidas Harden",
    precio: 139.99,
    categoria: "basket",
    imagen: "fotos/adidashardem.jpg",
    descrip: "Zapatillas signature de James Harden.",
    fecha: "2024-05-12"
  },
  {
    id: 13,
    nombre: "Pelota Spalding TF-1000",
    precio: 34.99,
    categoria: "basket",
    imagen: "fotos/spaldingtf1000.jpg",
    descrip: "Pelota oficial de torneos.",
    fecha: "2024-05-13"
  },
  {
    id: 14,
    nombre: "Pelota Molten GG7X",
    precio: 29.99,
    categoria: "basket",
    imagen: "fotos/moltengg7x.jpg",
    descrip: "Pelota FIBA aprobada.",
    fecha: "2024-05-14"
  },
  {
    id: 15,
    nombre: "Canasto de Entrenamiento",
    precio: 59.99,
    categoria: "basket",
    imagen: "fotos/canastoentrenamiento.jpg",
    descrip: "Accesorio para práctica en casa.",
    fecha: "2024-05-15"
  },
  // RUNNING
  {
    id: 16,
    nombre: "Zapatillas Asics Gel-Kayano",
    precio: 119.99,
    categoria: "running",
    imagen: "fotos/gelkayano.jpg",
    descrip: "Estabilidad y amortiguación.",
    fecha: "2024-05-16"
  },
  {
    id: 17,
    nombre: "Zapatillas New Balance 1080",
    precio: 114.99,
    categoria: "running",
    imagen: "fotos/nb1080.jpg",
    descrip: "Comodidad para largas distancias.",
    fecha: "2024-05-17"
  },
  {
    id: 18,
    nombre: "Reloj Garmin Forerunner",
    precio: 199.99,
    categoria: "running",
    imagen: "fotos/garminforerunner.jpg",
    descrip: "GPS y métricas de carrera.",
    fecha: "2024-05-18"
  },
  {
    id: 19,
    nombre: "Cinturón de Hidratación",
    precio: 29.99,
    categoria: "running",
    imagen: "fotos/cinturondehidratacion.jpg",
    descrip: "Mantente hidratado en ruta.",
    fecha: "2024-05-19"
  },
  {
    id: 20,
    nombre: "Auriculares Bluetooth",
    precio: 49.99,
    categoria: "running",
    imagen: "fotos/auricularesbt.jpg",
    descrip: "Música sin cables.",
    fecha: "2024-05-20"
  },
  // OTROS
  {
    id: 21,
    nombre: "Mochila Deportiva",
    precio: 69.99,
    categoria: "running",
    imagen: "fotos/mochila.jpg",
    descrip: "Espacio y confort.",
    fecha: "2024-05-21"
  },
  {
    id: 22,
    nombre: "Gorra Visera",
    precio: 19.99,
    categoria: "running",
    imagen: "fotos/gorra.jpg",
    descrip: "Protección solar.",
    fecha: "2024-05-22"
  },
  {
    id: 23,
    nombre: "Camiseta Técnica",
    precio: 24.99,
    categoria: "running",
    imagen: "fotos/camiseta.jpg",
    descrip: "Transpirable y ligera.",
    fecha: "2024-05-23"
  },
  {
    id: 24,
    nombre: "Medias Compresión",
    precio: 14.99,
    categoria: "running",
    imagen: "fotos/medias.jpg",
    descrip: "Soporte muscular.",
    fecha: "2024-05-24"
  },
  {
    id: 25,
    nombre: "Guantes de Entrenamiento",
    precio: 24.99,
    categoria: "running",
    imagen: "fotos/guantesentrenamiento.jpg",
    descrip: "Agarre y protección.",
    fecha: "2024-05-25"
  },
  {
    id: 26,
    nombre: "Cinta para Estiramiento",
    precio: 12.99,
    categoria: "running",
    imagen: "fotos/cintaestiramiento.jpg",
    descrip: "Ayuda a la flexibilidad.",
    fecha: "2024-05-26"
  },
  {
    id: 27,
    nombre: "Rodilleras elásticas",
    precio: 34.99,
    categoria: "running",
    imagen: "fotos/rodilleras.jpg",
    descrip: "Soporte para articulaciones.",
    fecha: "2024-05-27"
  },
  {
    id: 28,
    nombre: "Zapatillas Salomon Speedcross",
    precio: 139.99,
    categoria: "running",
    imagen: "fotos/speedcross.jpg",
    descrip: "Trail running extremo.",
    fecha: "2024-05-28"
  },
  {
    id: 29,
    nombre: "Pulsera de Actividad",
    precio: 59.99,
    categoria: "running",
    imagen: "fotos/pulseraactividad.jpg",
    descrip: "Monitor de pasos y calorías.",
    fecha: "2024-05-29"
  },
  {
    id: 30,
    nombre: "Suero Rehidratante",
    precio: 9.99,
    categoria: "running",
    imagen: "fotos/suero.jpg",
    descrip: "Reponer electrolitos.",
    fecha: "2024-05-30"
  },
  // EXTRAS
  {
    id: 31,
    nombre: "Cinta Kinesio",
    precio: 19.99,
    categoria: "running",
    imagen: "fotos/kinesio.jpg",
    descrip: "Prevención de lesiones.",
    fecha: "2024-05-31"
  },
  {
    id: 32,
    nombre: "Rodilleras de Velcro",
    precio: 29.99,
    categoria: "running",
    imagen: "fotos/rodillerasvelcro.jpg",
    descrip: "Ajuste al cuerpo.",
    fecha: "2024-06-01"
  },
  {
    id: 33,
    nombre: "Calcetines Antideslizantes",
    precio: 12.99,
    categoria: "running",
    imagen: "fotos/calcetines.jpg",
    descrip: "Seguridad en la pista.",
    fecha: "2024-06-02"
  },
  {
    id: 34,
    nombre: "Bandas Elásticas",
    precio: 14.99,
    categoria: "running",
    imagen: "fotos/bandas.jpg",
    descrip: "Resistencia variable.",
    fecha: "2024-06-03"
  },
  {
    id: 35,
    nombre: "Zapatillas Puma Clyde",
    precio: 119.99,
    categoria: "basket",
    imagen: "fotos/pumaclyde.jpg",
    descrip: "Classic retro style.",
    fecha: "2024-06-04"
  },
  {
    id: 36,
    nombre: "Pelota Spalding NBA",
    precio: 49.99,
    categoria: "basket",
    imagen: "fotos/pelotabasket.jpg",
    descrip: "Pelota oficial de la NBA.",
    fecha: "2024-06-05"
  }
];


// UTILIDADES CART
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '{}');
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
  const cart = getCart();
  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);
  document.getElementById('cartCount').textContent = totalItems;
}

// AÑADIR Y QUITAR
function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  updateCartCount();
  renderCartItems();
}
function removeFromCart(id) {
  const cart = getCart();
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] === 0) delete cart[id];
  saveCart(cart);
  updateCartCount();
  renderCartItems();
}

// RENDER CARRITO
function renderCartItems() {
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  const cart = getCart();
  for (let id in cart) {
    const prod = products.find(p => p.id == id);
    const qty = cart[id];
    const div = document.createElement('div');
    div.innerHTML = `
      <span>${prod.nombre} (x${qty})</span>
      <span>$${(prod.precio * qty).toFixed(2)}</span>
      <button data-id="${id}" class="remove-btn">✕</button>
    `;
    container.appendChild(div);
  }
  // attach remove handlers
  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
  });
}

// SIDEBAR TOGGLE
const cartButton = document.getElementById('cartButton');
const sidebar = document.getElementById('sidebarCart');
const closeBtn = document.getElementById('closeCart');
cartButton.addEventListener('click', () => sidebar.classList.add('open'));
closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));

// COMPRAR
document.getElementById('buyButton').addEventListener('click', () => {
  alert('¡Gracias por comprar en Futix!');
  localStorage.removeItem('cart');
  updateCartCount();
  renderCartItems();
});

// CARGAR PRODUCTOS EN PÁGINAS
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCartItems();

  // Si estamos en productos.html
  document.querySelectorAll('.productos-lista').forEach(list => {
    const sectionId = list.closest('section').id;
    const filtered = products.filter(p => p.categoria === sectionId);
    filtered.forEach(p => {
      const div = document.createElement('div');
      div.className = 'producto';
      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descrip}</p>
        <p>$${p.precio.toFixed(2)}</p>
        <button class="btn-agregar" data-id="${p.id}">Agregar al carrito</button>
      `;
      list.appendChild(div);
    });
  });
  // handlers productos
  document.querySelectorAll('.btn-agregar').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });

  // Si estamos en index.html: generar carousel aleatorio
  const recContainer = document.getElementById('recientes-inner');
  if (recContainer) {
    // mezcla aleatoria
    const shuffled = products
      .map(p => ({ p, sort: Math.random() }))
      .sort((a,b) => a.sort - b.sort)
      .map(o => o.p)
      .slice(0, 10); // primeros 10
    const perSlide = 4;
    for (let i = 0; i < shuffled.length; i += perSlide) {
      const item = document.createElement('div');
      item.className = 'carousel-item' + (i === 0 ? ' active' : '');
      let inner = '<div class="d-flex justify-content-center gap-4">';
      shuffled.slice(i, i+perSlide).forEach(p => {
        inner += `
          <div class="producto" style="width: 18rem;">
            <img src="${p.imagen}" alt="${p.nombre}" class="w-100" style="height: 180px; object-fit: contain;">
            <h3 style="font-size:1.1rem;">${p.nombre}</h3>
            <p>${p.descrip}</p>
            <p>$${p.precio.toFixed(2)}</p>
            <button class="btn-agregar" data-id="${p.id}">Agregar al carrito</button>
          </div>
        `;
      });
      inner += '</div>';
      item.innerHTML = inner;
      recContainer.appendChild(item);
    }
    // reusar handlers en carousel recientes
    recContainer.querySelectorAll('.btn-agregar').forEach(btn => {
      btn.addEventListener('click', () => addToCart(btn.dataset.id));
    });
  }
});



// let products = [
//   // TENIS
//   {
//     id: 1,
//     nombre: "Raqueta Wilson Pro Staff",
//     precio: 199.99,
//     categoria: "tenis",
//     imagen: "fotos/raquetawilsonprostaf.jpg",
//     descrip: "Raqueta profesional de alto rendimiento.",
//     fecha: "2024-05-01"
//   },
//   {
//     id: 2,
//     nombre: "Raqueta Babolat Pure Drive",
//     precio: 179.99,
//     categoria: "tenis",
//     imagen: "fotos/raquetababolat.webp",
//     descrip: "Potencia y control para jugadores avanzados.",
//     fecha: "2024-05-02"
//   },
//   {
//     id: 3,
//     nombre: "Raqueta Head Radical",
//     precio: 159.99,
//     categoria: "tenis",
//     imagen: "fotos/h.jpg",
//     descrip: "Ligera y versátil para todo tipo de juego.",
//     fecha: "2024-05-03"
//   },
//   {
//     id: 4,
//     nombre: "Pack 3 Pelotas Dunlop",
//     precio: 14.99,
//     categoria: "tenis",
//     imagen: "fotos/pack3pelotas.webp",
//     descrip: "Pack de tres pelotas de alta durabilidad.",
//     fecha: "2024-05-04"
//   },
//   {
//     id: 5,
//     nombre: "Grip Antideslizante",
//     precio: 7.99,
//     categoria: "tenis",
//     imagen: "fotos/grip.webp",
//     descrip: "Mejor agarre y comodidad.",
//     fecha: "2024-05-05"
//   },
//   {
//     id: 6,
//     nombre: "Muñequeras Nike",
//     precio: 9.99,
//     categoria: "tenis",
//     imagen: "fotos/munequeras.webp",
//     descrip: "Absorbe el sudor y brinda soporte.",
//     fecha: "2024-05-06"
//   },

//   // FÚTBOL
//   {
//     id: 7,
//     nombre: "Camiseta Boca Juniors",
//     precio: 89.99,
//     categoria: "futbol",
//     imagen: "fotos/boca.png",
//     descrip: "Camiseta oficial temporada 2024.",
//     fecha: "2024-05-07"
//   },
//   {
//     id: 8,
//     nombre: "Camiseta Real Madrid",
//     precio: 99.99,
//     categoria: "futbol",
//     imagen: "fotos/realmadrid.webp",
//     descrip: "Camiseta oficial blanca con detalles dorados.",
//     fecha: "2024-05-08"
//   },
//   {
//     id: 9,
//     nombre: "Camiseta Barcelona",
//     precio: 99.99,
//     categoria: "futbol",
//     imagen: "fotos/barcelona.jpg",
//     descrip: "Camiseta oficial azulgrana.",
//     fecha: "2024-05-09"
//   },
//   {
//     id: 10,
//     nombre: "Camiseta Liverpool",
//     precio: 99.99,
//     categoria: "futbol",
//     imagen: "fotos/liverpool.jpg",
//     descrip: "Camiseta oficial roja.",
//     fecha: "2024-05-10"
//   },
//   {
//     id: 11,
//     nombre: "Camiseta PSG",
//     precio: 99.99,
//     categoria: "futbol",
//     imagen: "fotos/psg.jpg",
//     descrip: "Camiseta oficial azul con detalles rojos.",
//     fecha: "2024-05-11"
//   },
//   {
//     id: 12,
//     nombre: "Camiseta Bayern Munich",
//     precio: 99.99,
//     categoria: "futbol",
//     imagen: "fotos/bayern.jpg",
//     descrip: "Camiseta oficial roja.",
//     fecha: "2024-05-12"
//   },
//   {
//     id: 13,
//     nombre: "Botines Nike Mercurial",
//     precio: 129.99,
//     categoria: "futbol",
//     imagen: "fotos/mercurial.jpg",
//     descrip: "Botines ligeros para velocidad.",
//     fecha: "2024-05-13"
//   },
//   {
//     id: 14,
//     nombre: "Botines Adidas Predator",
//     precio: 129.99,
//     categoria: "futbol",
//     imagen: "fotos/predator.webp",
//     descrip: "Control y precisión en cada pase.",
//     fecha: "2024-05-14"
//   },
//   {
//     id: 15,
//     nombre: "Botines Puma Future",
//     precio: 119.99,
//     categoria: "futbol",
//     imagen: "fotos/future.webp",
//     descrip: "Diseño innovador y ajuste perfecto.",
//     fecha: "2024-05-15"
//   },
//   {
//     id: 16,
//     nombre: "Botines Under Armour Magnetico",
//     precio: 109.99,
//     categoria: "futbol",
//     imagen: "fotos/magn.webp",
//     descrip: "Comodidad y tracción superior.",
//     fecha: "2024-05-16"
//   },
//   {
//     id: 17,
//     nombre: "Pelota Liga Argentina",
//     precio: 49.99,
//     categoria: "futbol",
//     imagen: "fotos/pelotaarg.webp",
//     descrip: "Pelota oficial de la Liga Profesional.",
//     fecha: "2024-05-17"
//   },
//   {
//     id: 18,
//     nombre: "Pelota Premier League",
//     precio: 59.99,
//     categoria: "futbol",
//     imagen: "fotos/pelotapremier.jpg",
//     descrip: "Pelota oficial de la Premier.",
//     fecha: "2024-05-18"
//   },

//   // RUNNING
//   {
//     id: 19,
//     nombre: "Zapatillas Adidas Ultraboost",
//     precio: 179.99,
//     categoria: "running",
//     imagen: "fotos/ultraboost.jpg",
//     descrip: "Amortiguación y retorno de energía.",
//     fecha: "2024-05-19"
//   },
//   {
//     id: 20,
//     nombre: "Zapatillas Adidas Adizero",
//     precio: 159.99,
//     categoria: "running",
//     imagen: "fotos/adizero.jpg",
//     descrip: "Ligereza para máxima velocidad.",
//     fecha: "2024-05-20"
//   },
//   {
//     id: 21,
//     nombre: "Zapatillas Nike Pegasus",
//     precio: 169.99,
//     categoria: "running",
//     imagen: "fotos/pegasus.jpg",
//     descrip: "Versatilidad y comodidad.",
//     fecha: "2024-05-21"
//   },
//   {
//     id: 22,
//     nombre: "Zapatillas Nike ZoomX",
//     precio: 189.99,
//     categoria: "running",
//     imagen: "fotos/zoomx.jpg",
//     descrip: "Máxima respuesta y ligereza.",
//     fecha: "2024-05-22"
//   },
//   {
//     id: 23,
//     nombre: "Zapatillas Asics Gel-Kayano",
//     precio: 159.99,
//     categoria: "running",
//     imagen: "fotos/asicsgel.webp",
//     descrip: "Soporte y estabilidad premium.",
//     fecha: "2024-05-23"
//   },
//   {
//     id: 24,
//     nombre: "Zapatillas Reebok Floatride",
//     precio: 139.99,
//     categoria: "running",
//     imagen: "fotos/reebok.webp",
//     descrip: "Ligereza y amortiguación.",
//     fecha: "2024-05-24"
//   },
//   {
//     id: 25,
//     nombre: "Zapatillas Puma Velocity Nitro",
//     precio: 129.99,
//     categoria: "running",
//     imagen: "fotos/pumazapas.jpg",
//     descrip: "Comodidad y velocidad.",
//     fecha: "2024-05-25"
//   },
//   {
//     id: 26,
//     nombre: "Zapatillas New Balance Fresh Foam",
//     precio: 149.99,
//     categoria: "running",
//     imagen: "fotos/new.jpeg",
//     descrip: "Amortiguación suave y soporte.",
//     fecha: "2024-05-26"
//   },

//   // BASKET
//   {
//     id: 27,
//     nombre: "Remera Celtics",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/celtics.jpg",
//     descrip: "Remera oficial Boston Celtics.",
//     fecha: "2024-05-27"
//   },
//   {
//     id: 28,
//     nombre: "Remera Lakers",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/lakers.jpg",
//     descrip: "Remera oficial LA Lakers.",
//     fecha: "2024-05-28"
//   },
//   {
//     id: 29,
//     nombre: "Remera Timberwolves",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/wolves.jpg",
//     descrip: "Remera oficial Timberwolves.",
//     fecha: "2024-05-29"
//   },
//   {
//     id: 30,
//     nombre: "Remera Chicago Bulls",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/bulls.jpg",
//     descrip: "Remera oficial Chicago Bulls.",
//     fecha: "2024-05-30"
//   },
//   {
//     id: 31,
//     nombre: "Remera Brooklyn Nets",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/nets.jpg",
//     descrip: "Remera oficial Brooklyn Nets.",
//     fecha: "2024-05-31"
//   },
//   {
//     id: 32,
//     nombre: "Remera Indiana Pacers",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/pacers.jpg",
//     descrip: "Remera oficial Indiana Pacers.",
//     fecha: "2024-06-01"
//   },
//   {
//     id: 33,
//     nombre: "Remera Golden State Warriors",
//     precio: 59.99,
//     categoria: "basket",
//     imagen: "fotos/warr.webp",
//     descrip: "Remera oficial Golden State Warriors.",
//     fecha: "2024-06-02"
//   },
//   {
//     id: 34,
//     nombre: "Zapatillas Nike Air Zoom BB",
//     precio: 139.99,
//     categoria: "basket",
//     imagen: "fotos/nikeairzoom.jpg",
//     descrip: "Zapatillas de alto rendimiento.",
//     fecha: "2024-06-03"
//   },
//   {
//     id: 35,
//     nombre: "Zapatillas Adidas Harden Vol. 5",
//     precio: 139.99,
//     categoria: "basket",
//     imagen: "fotos/adidashardem.jpg",
//     descrip: "Zapatillas signature de James Harden.",
//     fecha: "2024-06-04"
//   },
//   {
//     id: 36,
//     nombre: "Pelota Spalding NBA",
//     precio: 49.99,
//     categoria: "basket",
//     imagen: "fotos/pelotabasket.jpg",
//     descrip: "Pelota oficial de la NBA.",
//     fecha: "2024-06-05"
//   }
// ];



// products.forEach(function(product) {
//     let section = document.getElementById(product.categoria);
//     if (section) {
//         let lista = section.querySelector('.productos-lista');
//         lista.innerHTML += `
//             <div class="producto-item">
//                 <div class="producto">
//                     <img src="${product.imagen}" alt="${product.nombre}">
//                     <h3 class="prodNombre">${product.nombre}</h3>
//                     <pfecha: "2024-05-"  class="prodTipo">${product.
//                descrip       
//                     }</p>
//                     <p class="prodPrecio">$${product.precio}</p>
//                     <button class="btn-agregar" data-id="${product.id}">Agregar al carrito</button>
//                 </div>
//             </div>
//         `;
//     }
// });

// let carrito = [];

// function actualizarCarrito(){
//   let total = localStorage.getItem("carrito") || 0;
//   let contador = document.getElementById("carritoContador");
//   if (contador){
//     contador.textContent = total
//   }
// }

// function agregarAlCarrito() {
//     let total = Number(localStorage.getItem('carrito')) || 0;
//     total += 1;
//     localStorage.setItem('carrito', total);
//     actualizarCarrito();
// }

// function quitarDelCarrito() {
//     let total = Number(localStorage.getItem('carrito')) || 0;
//     if (total > 0) {
//       total -= 1;
//       localStorage.setItem('carrito', total);
//     }
//     actualizarCarrito();
// }


// function fechaAEntero(fechaStr) {
//     let partes = fechaStr.split("-");
//     return parseInt(partes[0] + partes[1] + partes[2], 10);
// }

// let productosOrdenados = [];
// for (let i = 0; i < products.length; i++) {
//     productosOrdenados.push(products[i]);
// }

// for (let i = 0; i < productosOrdenados.length - 1; i++) {
//     for (let j = i + 1; j < productosOrdenados.length; j++) {
//         if (fechaAEntero(productosOrdenados[j].fecha) > fechaAEntero(productosOrdenados[i].fecha)) {
//             let temp = productosOrdenados[i];
//             productosOrdenados[i] = productosOrdenados[j];
//             productosOrdenados[j] = temp;
//         }
//     }
// }

// let ultimos10 = [];
// for (let i = 0; i < 12 && i < productosOrdenados.length; i++) {
//     ultimos10.push(productosOrdenados[i]);
// }

// let itemsPorSlide = 4; // Cambia este valor si querés más/menos productos por slide
// let carouselInner = document.getElementById("carousel-inner-ultimos");
// carouselInner.innerHTML = "";

// for (let i = 0; i < ultimos10.length; i += itemsPorSlide) {
//     let activeClass = (i === 0) ? "active" : "";
//     let slideHTML = '<div class="carousel-item ' + activeClass + '">';
//     slideHTML += '<div class="d-flex justify-content-center gap-4">';
//     for (let j = i; j < i + itemsPorSlide && j < ultimos10.length; j++) {
//         let product = ultimos10[j];
//         slideHTML +=
//             '<div class="producto-item" style="width: 18rem;">' +
//                 '<div class="producto">' +
//                     '<img src="' + product.imagen + '" alt="' + product.nombre + '" class="w-100" style="height: 180px; object-fit: contain;">' +
//                     '<h3 class="prodNombre" style="font-size:1.1rem;">' + product.nombre + '</h3>' +
//                     '<p class="prodTipo">' + product.descrip + '</p>' +
//                     '<p class="prodPrecio">$' + product.precio + '</p>' +
//                 '</div>' +
//             '</div>';
//     }
//     slideHTML += '</div></div>';
//     carouselInner.innerHTML += slideHTML;
// }