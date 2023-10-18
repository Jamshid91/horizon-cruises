let selects = document.querySelectorAll('.select-item'),
    selectLists = document.querySelectorAll('.select-list li'),
    modalSucces = document.querySelector('.modal-succes'),
    form = document.getElementById('form'),
    userName = document.getElementById('userName'),
    userPhone = document.getElementById('phone'),
    guests = document.getElementById('guests'),
    userEmail = document.getElementById('userEmail'),
    message = document.getElementById('message'),
    submitBtn = document.getElementById('submitForm');


submitBtn.addEventListener('click', (e) => {
  checkInputs()

let successName = userName.parentElement.children[2].classList;
let successEmail = userEmail.parentElement.children[2].classList;
let successGuests = guests.parentElement.children[2].classList;
let successMessage = message.parentElement.children[2].classList;

if(successName == 'success' && successEmail == 'success' && successGuests == 'success' && successMessage == 'success') {
//   submitBtn.type = 'submit'   
form.classList.add('d-none')
form.nextElementSibling.classList.remove('d-none')
}
});



function checkInputs() {
  const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const userPhoneValue = userPhone.value.trim();
    const guestsValue = guests.value.trim();
    const messageValue = message.value.trim();

  if(userNameValue === '') {
    setErrorFor(userName, '#00000026', '#00000005', '')
  } else if(!isName(userNameValue)) {
    setErrorFor(userName, '#F3F3F3', '#E47169', '*Введите имя на латинице')
  } else {
    setSuccesFor(userName);
    userName.parentElement.children[2].classList.add('success');
  }


  if(userEmailValue === '') {
    setErrorFor(userEmail, '#00000026', '#00000005', '')
  } else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, '#F3F3F3', '#E47169', '*Введите Email')
  } else {
    setSuccesFor(userEmail)
    userEmail.parentElement.children[2].classList.add('success');
  }

  if(userPhoneValue === '') {
    setErrorFor(userPhone, '#00000026', '#00000005', '')
  } else {
    setSuccesFor(userPhone)
    userPhone.parentElement.children[2].classList.add('success');
  }

if(guestsValue === '') {
    setErrorFor(guests, '#00000026', '#00000005', '')
} else {
  setSuccesFor(guests)
  guests.parentElement.children[2].classList.add('success');
}
  
if(messageValue === '') {
    setErrorFor(message, '#00000026', '#00000005', '')
} else if(!isName(messageValue)) {
  setErrorFor(message, '#F3F3F3', '#E47169', '*Пишите латинскими буквами')
} else {
  setSuccesFor(message)
  message.parentElement.children[2].classList.add('success');
}
}

function setErrorFor(input, bg, border, message) {
    let small = input.parentElement.children[2]
    small.innerText = message
    input.classList.add('inputError');
    input.style.background = bg;
    input.style.border = `1px solid ${border}`;
}

function setSuccesFor(input) {
    input.style.background = '#F3F3F3';
    input.style.border = `1px solid #56A868`;
    input.classList.remove('inputError');
    input.classList.add('inputSucces');
    let small = input.parentElement.children[2]
    small.innerText = ''
} 

function isName(name) {
    return /[A-Za-z0-9]/.test(name)
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


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
      delay: 4000,
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