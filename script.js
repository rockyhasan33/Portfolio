const listItems = document.querySelector('.list-items');
const menuBtn = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.close');

// Menu-items On click to Add class Show-menu-list
menuBtn.addEventListener('click', () => {
    listItems.classList.add('show-list-items');
})

// for close menu list 
closeMenu.addEventListener('click', () => {
    listItems.classList.remove('show-list-items');
})