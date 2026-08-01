//About filter functionality
const filterButtons = document.querySelectorAll('.about-btn');
const aboutCards = document.querySelectorAll('.about-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // reset semua tombol
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // tampilkan card sesuai filter
    aboutCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});



function showList(type) {
  // sembunyikan semua
  document.getElementById('module-list').classList.add('hidden');
  document.getElementById('ppt-list').classList.add('hidden');

  // tampilkan sesuai tombol
  if (type === 'module') {
    document.getElementById('module-list').classList.remove('hidden');
  } else if (type === 'ppt') {
    document.getElementById('ppt-list').classList.remove('hidden');
  }
}

//smooth scroll behaviour
document.querySelectorAll(a[href^="#"]).forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView( {
            behavior: 'smooth'
        });
    });
});

//Scroll Animation
const scrollElements = document.querySelectorAll('.about-card','.class-card','.class-card-mentor');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
 }, {threshold:0.1});

 scrollElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
 });
