const carsData = [
  {
    id: 1,
    name: "BMW M4 Competition",
    brand: "BMW",
    price: 74900,
    year: 2024,
    fuel: "Gasoline",
    transmission: "Automatic",
    mileage: "1,200 miles",
    engine: "3.0L Twin-Turbo I6",
    description: "Experience pure driving pleasure with the BMW M4 Competition. This high-performance coupe combines exceptional power with sophisticated luxury, featuring a twin-turbocharged engine delivering exhilarating acceleration and precise handling.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=800&q=80",
      "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Mercedes-AMG GT",
    brand: "Mercedes",
    price: 89900,
    year: 2024,
    fuel: "Gasoline",
    transmission: "Automatic",
    mileage: "850 miles",
    engine: "4.0L V8 Biturbo",
    description: "The Mercedes-AMG GT is the perfect synthesis of performance and elegance. With a handcrafted V8 engine and a low, wide stance, this sports car delivers breathtaking performance with unmistakable AMG character.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80"
    ]
  },
  {
    id: 3,
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    price: 106100,
    year: 2024,
    fuel: "Gasoline",
    transmission: "Manual",
    mileage: "320 miles",
    engine: "3.0L Twin-Turbo Flat-6",
    description: "The Porsche 911 Carrera is an icon of automotive engineering. Combining a legendary rear-engine layout with cutting-edge technology, it delivers an unmatched driving experience that has defined sports car excellence for decades.",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    brand: "Audi",
    price: 142400,
    year: 2024,
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "150 miles",
    engine: "Dual Electric Motors",
    description: "The Audi RS e-tron GT represents the future of performance electric vehicles. With breathtaking acceleration from two powerful electric motors and a sleek Gran Turismo body, it redefines what an electric sports car can be.",
    images: [
      "https://images.unsplash.com/photo-1606986628253-cfcd9c24bbb2?w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    id: 5,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    price: 108990,
    year: 2024,
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "200 miles",
    engine: "Tri Motor Electric",
    description: "The Tesla Model S Plaid is the fastest accelerating production car ever made. With three electric motors delivering over 1,000 horsepower and a 0-60 mph time under 2 seconds, it shatters every expectation of what a sedan can do.",
    images: [
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80",
      "https://images.unsplash.com/photo-1571987502227-9231b837d92a?w=800&q=80",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80"
    ]
  },
  {
    id: 6,
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    price: 274390,
    year: 2024,
    fuel: "Gasoline",
    transmission: "Automatic",
    mileage: "90 miles",
    engine: "5.2L V10",
    description: "The Lamborghini Huracán EVO is a masterpiece of Italian supercar engineering. Its naturally aspirated V10 engine screams to 8,500 rpm, delivering raw, visceral performance that only Lamborghini can provide.",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=800&q=80"
    ]
  },
  {
    id: 7,
    name: "McLaren 720S",
    brand: "McLaren",
    price: 299000,
    year: 2024,
    fuel: "Gasoline",
    transmission: "Automatic",
    mileage: "450 miles",
    engine: "4.0L V8 Twin-Turbo",
    description: "The McLaren 720S is a tour de force of engineering excellence. Born from McLaren's racing DNA, it combines carbon fiber construction with a cutting-edge twin-turbocharged V8 to deliver supercar performance in a beautifully sculpted package.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"
    ]
  },
  {
    id: 8,
    name: "Range Rover Sport SVR",
    brand: "Range Rover",
    price: 115000,
    year: 2024,
    fuel: "Gasoline",
    transmission: "Automatic",
    mileage: "1,800 miles",
    engine: "5.0L Supercharged V8",
    description: "The Range Rover Sport SVR combines Land Rover's legendary all-terrain capability with sports car performance. A supercharged V8 engine powers this executive SUV to 60 mph in under 5 seconds while still offering supreme off-road prowess.",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=800&q=80"
    ]
  }
];

function createCarCard(car) {
  return `
    <div class="car-card">
      <div class="car-card-img">
        <img src="${car.images[0]}" alt="${car.name}" loading="lazy"/>
        <div class="car-card-overlay"></div>
      </div>
      <div class="car-card-body">
        <h3>${car.name}</h3>
        <p class="car-price">$${car.price.toLocaleString()}</p>
        <div class="car-meta">
          <div class="meta-item"><span class="meta-val">${car.year}</span><span class="meta-label">Year</span></div>
          <div class="meta-item"><span class="meta-val">${car.fuel}</span><span class="meta-label">Fuel</span></div>
          <div class="meta-item"><span class="meta-val">${car.transmission}</span><span class="meta-label">Type</span></div>
        </div>
        <a href="car-details.html?id=${car.id}" class="btn-outline btn-full">View Details</a>
      </div>
    </div>
  `;
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-fade-up').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }
});