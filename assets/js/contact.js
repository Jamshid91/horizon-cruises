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

  // input mask
$(":input").inputmask();
$("#phone").inputmask({"mask": "+66(99) 999-99-99"});