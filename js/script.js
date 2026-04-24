let carsData = [];

fetch('../assets/cars_data.json')
  .then(response => response.json())
  .then(data => {
    carsData = data;

    if (document.getElementById('featured-grid')) {
      renderFeaturedCars();
    }

    if (document.getElementById('cars-grid')) {
      renderCars(carsData);
    }

    if (document.getElementById('car-detail')) {
      renderCarDetails();
    }
  });

function createCarCard(car) {
  return `
    <div class="car-card">
      <div class="car-card-img">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        <div class="car-card-overlay"></div>
      </div>

      <div class="car-card-body">
        <h3>${car.name}</h3>
        <p class="car-price">$${car.price.toLocaleString()}</p>

        <div class="car-meta">
          <div class="meta-item">
            <span class="meta-val">${car.year}</span>
            <span class="meta-label">Year</span>
          </div>

          <div class="meta-item">
            <span class="meta-val">${car.fuel}</span>
            <span class="meta-label">Fuel</span>
          </div>

          <div class="meta-item">
            <span class="meta-val">${car.transmission}</span>
            <span class="meta-label">Type</span>
          </div>
        </div>

        <a href="car-details.html?id=${car.id}" class="btn-outline btn-full">
          View Details
        </a>
      </div>
    </div>
  `;
}

function renderFeaturedCars() {
  const grid = document.getElementById('featured-grid');

  if (!grid) return;

  grid.innerHTML = '';

  carsData.slice(0, 4).forEach(car => {
    grid.innerHTML += createCarCard(car);
  });

  initAnimations();
}

function renderCars(list) {
  const grid = document.getElementById('cars-grid');
  const countEl = document.getElementById('vehicles-count');

  if (!grid) return;

  grid.innerHTML = '';

  if (countEl) {
    countEl.textContent = list.length + ' vehicles available';
  }

  list.forEach((car, i) => {
    const div = document.createElement('div');
    div.innerHTML = createCarCard(car);

    const card = div.firstElementChild;
    card.style.animationDelay = (i * 0.08) + 's';
    card.classList.add('animate-fade-up');

    grid.appendChild(card);
  });

  initAnimations();
}

function applyFilters() {
  const brand = document.getElementById('filter-brand')?.value || '';
  const fuel = document.getElementById('filter-fuel')?.value || '';
  const price = document.getElementById('filter-price')?.value || '';

  const filtered = carsData.filter(car => {
    if (brand && car.brand !== brand) return false;
    if (fuel && car.fuel !== fuel) return false;

    if (price) {
      const [min, max] = price.split('-').map(Number);

      if (car.price < min || car.price > max) {
        return false;
      }
    }

    return true;
  });

  renderCars(filtered);
}

function renderCarDetails() {
  const container = document.getElementById('car-detail');

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const carId = parseInt(params.get('id'));

  const car = carsData.find(c => c.id === carId);

  if (!car) {
    container.innerHTML = `
      <p style="color:#fff;text-align:center;padding:4rem">
        Car not found.
      </p>
    `;
    return;
  }

  document.title = 'AutoMarket – ' + car.name;

  container.innerHTML = `
    <div class="car-images animate-fade-up">
      <div class="main-image">
        <img src="${car.image}" alt="${car.name}">
      </div>
    </div>

    <div class="car-info animate-fade-up">
      <span class="car-brand-tag">${car.brand}</span>
      <h1>${car.name}</h1>
      <p class="car-price-big">$${car.price.toLocaleString()}</p>

      <div class="specs-list">
        <div class="spec-item">
          <span class="spec-label">Year</span>
          <span class="spec-value">${car.year}</span>
        </div>

        <div class="spec-item">
          <span class="spec-label">Engine</span>
          <span class="spec-value">${car.engine}</span>
        </div>

        <div class="spec-item">
          <span class="spec-label">Fuel</span>
          <span class="spec-value">${car.fuel}</span>
        </div>

        <div class="spec-item">
          <span class="spec-label">Transmission</span>
          <span class="spec-value">${car.transmission}</span>
        </div>
      </div>

      <a href="contact.html" class="btn-primary">
        Contact Seller
      </a>
    </div>
  `;

  initAnimations();
}

function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-fade-up').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  const brand = document.getElementById('filter-brand');
  const fuel = document.getElementById('filter-fuel');
  const price = document.getElementById('filter-price');
  const reset = document.getElementById('reset-filters');

  if (brand) brand.addEventListener('change', applyFilters);
  if (fuel) fuel.addEventListener('change', applyFilters);
  if (price) price.addEventListener('change', applyFilters);

  if (reset) {
    reset.addEventListener('click', () => {
      brand.value = '';
      fuel.value = '';
      price.value = '';
      renderCars(carsData);
    });
  }
});