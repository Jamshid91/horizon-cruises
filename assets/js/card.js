let selects = document.querySelectorAll('.select-item'),
    selectLists = document.querySelectorAll('.select-list li')

    selects.forEach(select => {
      select.addEventListener('click', () => {
          select.parentElement.classList.toggle('showSelect')
      })
  });
  
  selectLists.forEach(list => {
      list.addEventListener('click', () => {
          list.parentElement.previousElementSibling.children[0].textContent = list.textContent
      })
  });

  document.addEventListener("click",(function(e){
    selects.forEach(select => {
        select.contains(e.target)||(select.parentElement.classList.remove("showSelect"))
    })
}));


const cardActive = new Swiper('.card-page-swiper-active', {
    speed: 500,
    effect: 'fade',
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    navigation: {
      nextEl: '.card-next',
      prevEl: '.card-prev',
    },
    pagination: {
      el: '.card-pagination',
      clickable: true,
    },
    });

  const card = new Swiper('.card-page-swiper', {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    slideToClickedSlide: true,
  });

  cardActive.controller.control = card;
  card.controller.control = cardActive;


  const ourClients = new Swiper('.our-clients-swiper', {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      },
    pagination: {
      el: '.our-clients-pagination',
      clickable: true,
    },
    });

  // input mask
$(":input").inputmask();
$("#phone").inputmask({"mask": "+66(99) 999-99-99"});