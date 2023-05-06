let user = localStorage.getItem("user")
const avatar = document.querySelector('.avatar-wrapper img');
const dropdownMenu = document.getElementById('dropdown-menu');
const logoutBtn = document.getElementById('logout-btn');
user = JSON.parse(user)
console.log(user)
avatar.addEventListener('click', function() {
  dropdownMenu.style.display = 'block';
});
const menu = document.getElementById('menu-navbar')
const subMenu = document.createElement('li')

logoutBtn.addEventListener('click', function() {
  console.log('Logout clicked');
  window.location.href = "/log.html"; // redirect to logout page
});
