let selects = document.querySelectorAll('.select-item'),
    selectLists = document.querySelectorAll('.select-list li'),
    showForm = document.querySelector('.featured .form-head'),
    showFilter = document.querySelector('.filter-head'),
    featureds = document.querySelectorAll('.featured-cards .card'),
    viewAllCard = document.querySelector('.featured-cards .view-all')

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

showForm.addEventListener('click', () => {
    showForm.parentElement.parentElement.parentElement.classList.toggle('showForm')
});

showFilter.addEventListener('click', () => {
    showFilter.parentElement.classList.toggle('showFilter')
});
viewAllCard.addEventListener('click', () => {
    featureds.forEach(card => {
        card.classList.remove('d-none')
    });
    viewAllCard.classList.add('d-none')
})

document.addEventListener("click",(function(e){
    selects.forEach(select => {
        select.contains(e.target)||(select.parentElement.classList.remove("showSelect"))
    })
}));


const travel = new Swiper('.travel-swiper', {
    watchOverflow: true,
    spaceBetween: 24,         
    pagination: {
        el: '.travel-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: '.travel-next',
          prevEl: '.travel-prev',
        },

        breakpoints: {
            slidesPerView: 1,
            320: {
                loop: false,
                grid: {
                    rows: 2,
                    fill: 'row'
                },  
            },
            768: {
                slidesPerView: 2,
                loop: true,
                grid: {
                    rows: 1,
                    fill: 'row'
                },  
            },
          }
  });


    // input mask
$(":input").inputmask();
$("#phone").inputmask({"mask": "+66(99) 999-99-99"});