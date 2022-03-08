const burger = document.getElementById('burger');
const navList = document.getElementsByClassName('navList')[0];

function showHideMenu() {
  navList.classList.toggle('navShow');
}

burger.addEventListener('click', () => {
  showHideMenu()
});
navList.addEventListener('click', () => {
  showHideMenu()
});
