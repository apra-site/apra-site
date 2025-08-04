const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 500){
        navEl.classList.add('navbar-scrolled')
    }else if(window.scrollY < 500){
        navEl.classList.remove('navbar-scrolled')
    }
});


const toggler = document.getElementById('customToggler');
const navbarMenu = document.getElementById('collapsibleNavbar');
const mainContent = document.getElementById('mainContent');
const closeBtn = document.getElementById('closeMenu');
const navLinks = document.querySelectorAll('#collapsibleNavbar .nav-link');

// Fade duration must match CSS
const transitionDuration = 700;

function openMenu() {
  mainContent.classList.add('hidden');
  navbarMenu.classList.add('fullscreen');
  // Trigger fade-in
  setTimeout(() => {
    navbarMenu.classList.add('show');
  }, 700);
}

function closeMenu() {
  // Start fade-out
  navbarMenu.classList.remove('show');

  // After fade-out completes
  setTimeout(() => {
    navbarMenu.classList.remove('fullscreen');
    mainContent.classList.remove('hidden');
  }, 700);
}

toggler.addEventListener('click', () => {
  const isOpen = navbarMenu.classList.contains('show');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeBtn.addEventListener('click', closeMenu);

// Close when clicking any nav link, AFTER fade-out
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Optional: prevent default navigation for smoother effect

    // Start fade-out
    navbarMenu.classList.remove('show');

    setTimeout(() => {
      navbarMenu.classList.remove('fullscreen');
      mainContent.classList.remove('hidden');

      // Then navigate (optional)
      const targetHref = link.getAttribute('href');
      if (targetHref && targetHref !== '#') {
        window.location.href = targetHref;
      }
    }, 700);
  }, 700);
});



// Set your target date (e.g., June 1, 2025)
const targetDate = new Date("2025-11-08T15:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
}

// Update every minute
updateCountdown();
setInterval(updateCountdown, 60000);



const map = L.map('churchmap').setView([39.2358829, 20.5306762], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([39.2358829, 20.5306762])
  .addTo(map)
  .bindPopup('Ιερός Ναός Αγίου Δημητρίου, Καλιράχη')
  


const emap = L.map('eventmap').setView([39.2315395, 20.6158042], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(emap);

L.marker([39.2315395, 20.6158042])
  .addTo(emap)
  .bindPopup('Το παλαιό Κλίσμα')
  