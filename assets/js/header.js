const headerLangs=document.querySelectorAll(".header-lang-item"),
      langLists = document.querySelectorAll('.header-lang-list li'),
      menuBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.menu-close'),
      menu= document.querySelector('.menu'),
      body= document.querySelector('body')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('ShowClose');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
});

headerLangs.forEach(lang => {
    lang.addEventListener("click", (()=>{
        lang.parentElement.classList.toggle("showLang")
    }));
});

langLists.forEach(list => {
    list.addEventListener('click', () => {
        list.parentElement.previousElementSibling.children[0].textContent = list.textContent
    })
});

document.addEventListener("click",(function(e){
    headerLangs.forEach(lang => {
        lang.contains(e.target)||(lang.parentElement.classList.remove("showLang"))
    })
}));