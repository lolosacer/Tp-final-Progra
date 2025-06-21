// Datos de productos (array de objetos visto en clase)
const products = [
  // TENIS
  {
    id: 1,
    nombre: "Raqueta Wilson Pro Staff",
    precio: 199.99,
    categoria: "tenis",
    imagen: "fotos/raquetawilson.jpg",
    descrip: "Raqueta profesional de alto rendimiento.",
    fecha: "2024-05-14"
  },
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
    id: 3,
    nombre: "Raqueta Head Radical",
    precio: 159.99,
    categoria: "tenis",
    imagen: "fotos/raquetahead.jpg",
    descrip: "Ligera y versátil para todo tipo de juego.",
    fecha: "2024-05-09"
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
    imagen: "fotos/warr.jpg",
    descrip: "Remera oficial Golden State Warriors.",
    fecha: "2024-05-24"
  },
  {
    id: 27,
    nombre: "Zapatillas Nike Air Zoom BB",
    precio: 139.99,
    categoria: "basket",
    imagen: "fotos/kineairzoom.jpg",
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
  },
  {
    id: 37,
    nombre: "Zapatillas New Balance Fresh Foam",
    precio: 149.99,
    categoria: "running",
    imagen: "fotos/new.jpeg",
    descrip: "Amortiguación suave y soporte.",
    fecha: "2024-06-07"
  },
  {
    id: 38,
    nombre: "Zapatillas New Balance 574",
    precio: 119.99,
    categoria: "running",
    imagen: "fotos/zapasnewbalance.jpeg",
    descrip: "Clásicas y cómodas para uso diario.",
    fecha: "2024-05-12"
  }
];



// funciones carrito

// me da el objeto con el estado del carrito
function getCart() { 
  return JSON.parse(localStorage.getItem('cart') || '{}');
}

// guardo en el navegador la info del carrito
function saveCart(cart) {
  localStorage.cart = JSON.stringify(cart);
}

// mantiene acutalizado al carrito
function updateCartCount() {
  let cart = getCart();
  let totalItems = 0;
  let productId;
  for (productId in cart) { //recorre cada producto para sumar sus cantidades y mostrarlas
    totalItems = totalItems + cart[productId];
  }

  let contador = document.getElementById('cartCount');
  contador.textContent = totalItems;
}

//agregar al carrito y actualizar contador total
function addToCart(id) { //uso el ida para identificar el producto correcto
  const cart = getCart();
  const sidebar = document.getElementById('sidebarCart');
  cart[id] = (cart[id] || 0) + 1; 
  saveCart(cart);
  updateCartCount();
  renderCartItems();
  updateCartTotal();
  sidebar.classList.add('open'); //que se vea el carrito al agregar
}
//eliminar del carrito y acutalizar contador total
function removeFromCart(id) { //uso el ida para identificar el producto correcto
  const cart = getCart();
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] === 0) delete cart[id]; //elimina el producto del carrito
  saveCart(cart);
  updateCartCount();
  renderCartItems();
  updateCartTotal();
}


//carrito
function renderCartItems() {
  const container = document.getElementById('cartItems');
  container.innerHTML = ''; //limpia el carrito
  const cart = getCart();
  for (let id in cart) { //crea un html para cada producto depende de su cantidad y precio
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
  let botones = container.querySelectorAll('.remove-btn');
  for (let i = 0; i < botones.length; i++) { //bucle para obtener la data-id y agregarle un boton de eliminar
    (function(btn) {
      let id = btn.getAttribute('data-id');
      btn.addEventListener('click', function() { //para eliminar si quiere
        removeFromCart(id);
      });
    })(botones[i]);
  }
  updateCartTotal(); //actualizo total
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
  updateCartTotal();
});

// CARGAR PRODUCTOS EN PÁGINAS
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCartItems();
  updateCartTotal();

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

function updateCartTotal() {
  const cart = getCart();
  let sum = 0;
  for (let id in cart) {
    const prod = products.find(p => p.id == id);
    if (prod) sum += prod.precio * cart[id];
  }
  // Asegura que muestre $0.00 si está vacío
  document.getElementById('cartTotal').textContent = 'Total: $' + sum.toFixed(2);
}


