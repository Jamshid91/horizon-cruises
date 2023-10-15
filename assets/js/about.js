
   const  odometer1 = document.querySelector('.odometer1'),
          odometer2 = document.querySelector('.odometer2'),
          odometer3 = document.querySelector('.odometer3')

function addAdometer() {
  setTimeout(() => {
      odometer1.innerHTML = 10
  }, 500);
  setTimeout(() => {
      odometer2.innerHTML = 100
  }, 500);
  setTimeout(() => {
      odometer3.innerHTML = 2000
  }, 500);
}

// addAdometer()
window.addEventListener('scroll', () => {
const positionOdometer = odometer1.getBoundingClientRect().top;

const screenPosition = window.innerHeight;

if(screenPosition > positionOdometer) {
  addAdometer()
}
});

const about = new Swiper('.about-swiper', {
  watchOverflow: true,
  slidesPerView: 1, 
  loop: true,        
  pagination: {
      el: '.about-swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.about-swiper-next',
        prevEl: '.about-swiper-prev',
      },
});

const reviews = new Swiper('.reviews-swiper', {
  watchOverflow: true,
  slidesPerView: 3, 
  spaceBetween: 24,  
  loop: true,  
    navigation: {
        nextEl: '.reviews-swiper-next',
        prevEl: '.reviews-swiper-prev',
      },
  
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2, 
        },
        1024: {
            slidesPerView: 3, 
        },
      }
});