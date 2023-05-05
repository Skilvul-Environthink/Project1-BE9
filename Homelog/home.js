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
  window.location.href = "/Project1-BE9/log.html"; // redirect to logout page
});

// Add script to dynamically load the Feather icons library
const featherScript = document.createElement('script');
featherScript.src = "https://unpkg.com/feather-icons";
document.body.appendChild(featherScript);

// Define the checkLoginStatus function
function checkLoginStatus() {
  // Code to check the login status goes here
}

checkLoginStatus(); // check login status

// Membuat fungsi untuk mengambil data dari API
async function getData() {
  try {
    const response = await fetch('https://64532f80e9ac46cedf1f015f.mockapi.io/api/v1/artikel');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Menambahkan link "Artikel Lainnya" ke halaman web
const ctaLanjut = document.getElementById('cta-lanjut');
ctaLanjut.addEventListener('click', async function(event) {
  event.preventDefault();
  const data = await getData();
  console.log(data); // Tampilkan data di console untuk keperluan debug
  
  // Di sini, Anda dapat menampilkan data di halaman web dengan cara yang sesuai
});

const button = document.getElementById('cta-lanjut');

button.addEventListener('click', () => {
  window.location.href = 'https://64532f80e9ac46cedf1f015f.mockapi.io/api/v1/artikel';
});

fetch('https://64532f80e9ac46cedf1f015f.mockapi.io/api/v1/artikel')
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.forEach(item => {
      output += `
        <div>
          <h3>${item.judul}</h3>
          <p>Kategori: ${item.kategori}</p>
          <img src="${item.image}" alt="${item.judul}">
          <p>${item.isicontent}</p>
        </div>
      `;
    });
    document.getElementById('artikel').innerHTML = output;
  });

