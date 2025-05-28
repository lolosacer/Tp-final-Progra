
const products = [
  // TENIS
  {
    id: 1,
    name: "Raqueta Wilson Pro Staff",
    price: 199.99,
    category: "tenis",
    image: "https://placehold.co/400x300/FF5E5B/ffffff?text=Raqueta+Wilson",
    description: "Raqueta profesional de alto rendimiento."
  },
  {
    id: 2,
    name: "Raqueta Babolat Pure Drive",
    price: 179.99,
    category: "tenis",
    image: "https://placehold.co/400x300/FFB400/ffffff?text=Raqueta+Babolat",
    description: "Potencia y control para jugadores avanzados."
  },
  {
    id: 3,
    name: "Raqueta Head Radical",
    price: 159.99,
    category: "tenis",
    image: "https://placehold.co/400x300/00A6ED/ffffff?text=Raqueta+Head",
    description: "Ligera y versátil para todo tipo de juego."
  },
  {
    id: 4,
    name: "Pack 3 Pelotas Dunlop",
    price: 14.99,
    category: "tenis",
    image: "https://placehold.co/400x300/00C49A/ffffff?text=3+Pelotas+Dunlop",
    description: "Pack de tres pelotas de alta durabilidad."
  },
  {
    id: 5,
    name: "Grip Antideslizante",
    price: 7.99,
    category: "tenis",
    image: "https://placehold.co/400x300/FF61A6/ffffff?text=Grip+Antideslizante",
    description: "Mejor agarre y comodidad."
  },
  {
    id: 6,
    name: "Muñequeras Nike",
    price: 9.99,
    category: "tenis",
    image: "https://placehold.co/400x300/7C3AED/ffffff?text=Muñequeras+Nike",
    description: "Absorbe el sudor y brinda soporte."
  },

  // FÚTBOL
  {
    id: 7,
    name: "Camiseta Boca Juniors",
    price: 89.99,
    category: "futbol",
    image: "https://placehold.co/400x300/0033A0/ffd100?text=Boca+Juniors",
    description: "Camiseta oficial temporada 2024."
  },
  {
    id: 8,
    name: "Camiseta Real Madrid",
    price: 99.99,
    category: "futbol",
    image: "https://placehold.co/400x300/ffffff/000000?text=Real+Madrid",
    description: "Camiseta oficial blanca con detalles dorados."
  },
  {
    id: 9,
    name: "Camiseta Barcelona",
    price: 99.99,
    category: "futbol",
    image: "https://placehold.co/400x300/004D98/A50044?text=Barcelona",
    description: "Camiseta oficial azulgrana."
  },
  {
    id: 10,
    name: "Camiseta Liverpool",
    price: 99.99,
    category: "futbol",
    image: "https://placehold.co/400x300/C8102E/ffffff?text=Liverpool",
    description: "Camiseta oficial roja."
  },
  {
    id: 11,
    name: "Camiseta PSG",
    price: 99.99,
    category: "futbol",
    image: "https://placehold.co/400x300/004170/ffffff?text=PSG",
    description: "Camiseta oficial azul con detalles rojos."
  },
  {
    id: 12,
    name: "Camiseta Bayern Munich",
    price: 99.99,
    category: "futbol",
    image: "https://placehold.co/400x300/DC052D/ffffff?text=Bayern+Munich",
    description: "Camiseta oficial roja."
  },
  {
    id: 13,
    name: "Botines Nike Mercurial",
    price: 129.99,
    category: "futbol",
    image: "https://placehold.co/400x300/FF5E5B/ffffff?text=Mercurial",
    description: "Botines ligeros para velocidad."
  },
  {
    id: 14,
    name: "Botines Adidas Predator",
    price: 129.99,
    category: "futbol",
    image: "https://placehold.co/400x300/11998E/ffffff?text=Predator",
    description: "Control y precisión en cada pase."
  },
  {
    id: 15,
    name: "Botines Puma Future",
    price: 119.99,
    category: "futbol",
    image: "https://placehold.co/400x300/00C49A/ffffff?text=Puma+Future",
    description: "Diseño innovador y ajuste perfecto."
  },
  {
    id: 16,
    name: "Botines Under Armour Magnetico",
    price: 109.99,
    category: "futbol",
    image: "https://placehold.co/400x300/FFB400/ffffff?text=Magnetico",
    description: "Comodidad y tracción superior."
  },
  {
    id: 17,
    name: "Pelota Liga Argentina",
    price: 49.99,
    category: "futbol",
    image: "https://placehold.co/400x300/2D1B69/ffffff?text=Liga+Argentina",
    description: "Pelota oficial de la Liga Profesional."
  },
  {
    id: 18,
    name: "Pelota Premier League",
    price: 59.99,
    category: "futbol",
    image: "https://placehold.co/400x300/FF61A6/ffffff?text=Premier+League",
    description: "Pelota oficial de la Premier."
  },

  // RUNNING
  {
    id: 19,
    name: "Zapatillas Adidas Ultraboost",
    price: 179.99,
    category: "running",
    image: "https://placehold.co/400x300/00A6ED/ffffff?text=Ultraboost",
    description: "Amortiguación y retorno de energía."
  },
  {
    id: 20,
    name: "Zapatillas Adidas Adizero",
    price: 159.99,
    category: "running",
    image: "https://placehold.co/400x300/FFB400/ffffff?text=Adizero",
    description: "Ligereza para máxima velocidad."
  },
  {
    id: 21,
    name: "Zapatillas Nike Pegasus",
    price: 169.99,
    category: "running",
    image: "https://placehold.co/400x300/FF5E5B/ffffff?text=Pegasus",
    description: "Versatilidad y comodidad."
  },
  {
    id: 22,
    name: "Zapatillas Nike ZoomX",
    price: 189.99,
    category: "running",
    image: "https://placehold.co/400x300/11998E/ffffff?text=ZoomX",
    description: "Máxima respuesta y ligereza."
  },
  {
    id: 23,
    name: "Zapatillas Asics Gel-Kayano",
    price: 159.99,
    category: "running",
    image: "https://placehold.co/400x300/7C3AED/ffffff?text=Gel-Kayano",
    description: "Soporte y estabilidad premium."
  },
  {
    id: 24,
    name: "Zapatillas Reebok Floatride",
    price: 139.99,
    category: "running",
    image: "https://placehold.co/400x300/00C49A/ffffff?text=Floatride",
    description: "Ligereza y amortiguación."
  },
  {
    id: 25,
    name: "Zapatillas Puma Velocity Nitro",
    price: 129.99,
    category: "running",
    image: "https://placehold.co/400x300/FF61A6/ffffff?text=Velocity+Nitro",
    description: "Comodidad y velocidad."
  },
  {
    id: 26,
    name: "Zapatillas New Balance Fresh Foam",
    price: 149.99,
    category: "running",
    image: "https://placehold.co/400x300/0033A0/ffffff?text=Fresh+Foam",
    description: "Amortiguación suave y soporte."
  },

  // BASKET
  {
    id: 27,
    name: "Remera Celtics",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/007A33/ffffff?text=Celtics",
    description: "Remera oficial Boston Celtics."
  },
  {
    id: 28,
    name: "Remera Lakers",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/552583/ffd100?text=Lakers",
    description: "Remera oficial LA Lakers."
  },
  {
    id: 29,
    name: "Remera Timberwolves",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/236192/ffffff?text=Timberwolves",
    description: "Remera oficial Timberwolves."
  },
  {
    id: 30,
    name: "Remera Chicago Bulls",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/CE1141/ffffff?text=Bulls",
    description: "Remera oficial Chicago Bulls."
  },
  {
    id: 31,
    name: "Remera Brooklyn Nets",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/000000/ffffff?text=Brooklyn+Nets",
    description: "Remera oficial Brooklyn Nets."
  },
  {
    id: 32,
    name: "Remera Indiana Pacers",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/002D62/ffd100?text=Pacers",
    description: "Remera oficial Indiana Pacers."
  },
  {
    id: 33,
    name: "Remera Golden State Warriors",
    price: 59.99,
    category: "basket",
    image: "https://placehold.co/400x300/1D428A/ffd100?text=Warriors",
    description: "Remera oficial Golden State Warriors."
  },
  {
    id: 34,
    name: "Zapatillas Nike Air Zoom BB",
    price: 139.99,
    category: "basket",
    image: "https://placehold.co/400x300/FFB400/ffffff?text=Air+Zoom+BB",
    description: "Zapatillas de alto rendimiento."
  },
  {
    id: 35,
    name: "Zapatillas Adidas Harden Vol. 5",
    price: 139.99,
    category: "basket",
    image: "https://placehold.co/400x300/00A6ED/ffffff?text=Harden+Vol+5",
    description: "Zapatillas signature de James Harden."
  },
  {
    id: 36,
    name: "Pelota Spalding NBA",
    price: 49.99,
    category: "basket",
    image: "https://placehold.co/400x300/FF5E5B/ffffff?text=Spalding+NBA",
    description: "Pelota oficial de la NBA."
  }
];

products.forEach(product => {
  const section = document.getElementById(product.category);
  if (section) {
    section.innerHTML += `
      <div class="producto">
        <img src="${product.image}" alt="${product.name}">
        <h3 class="producto-nombre">${product.name}</h3>
        <p class="producto-tipo">${product.description}</p>
        <p class="producto-precio">$${product.price}</p>
      </div>
    `;
  }
});

