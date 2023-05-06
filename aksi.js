let user = localStorage.getItem("user");
const avatar = document.querySelector(".avatar-wrapper img");
const dropdownMenu = document.getElementById("dropdown-menu");
const logoutBtn = document.getElementById("logout-btn");
user = JSON.parse(user);
console.log(user);
avatar.addEventListener("click", function () {
  dropdownMenu.style.display = "block";
});
const menu = document.getElementById("menu-navbar");
const subMenu = document.createElement("li");

logoutBtn.addEventListener("click", function () {
  console.log("Logout clicked");
  window.location.href = "/log.html"; // redirect to logout page
});

// Mengambil data dari file JSON menggunakan fetch API
fetch("aksi.json")
  .then((response) => response.json())
  .then((data) => {
    // Membuat sebuah variabel untuk menampung daftar card
    const daftarCard = document.getElementById("card-aksi");
    daftarCard.classList.add("row", "gy-4");

    // Menggunakan loop untuk membuat card HTML untuk setiap objek dalam file JSON
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("col-lg-4", "col-md-6", "card");
      card.style.marginLeft = "17px";
      card.style.width = "21rem";

      // Menambahkan gambar pada card
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = item.img;
      img.alt = "gambar";

      // Menambahkan isi card
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "mt-auto");
      card.style.padding = "0px";

      const tittle = document.createElement("h5");
      tittle.classList.add("card-title");
      tittle.textContent = item.tittle;

      const pendukung = document.createElement("p");
      pendukung.classList.add("card-text", "text-secondary");
      pendukung.textContent = item.pendukung;

      const cardFooter = document.createElement("div");
      cardFooter.classList.add("card-footer", "bg-success");

      const footer = document.createElement("h5");
      footer.classList.add("card-title");
      footer.textContent = "Pelajari Selengkapnya";

      // Menambahkan elemen-elemen ke dalam card
      cardBody.appendChild(tittle);
      cardBody.appendChild(pendukung);
      cardFooter.appendChild(footer);

      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);

      // Menambahkan event listener pada elemen "Pelajari Selengkapnya"
      footer.addEventListener("click", () => {
        window.location.href = "/detail-aksi.html";
      });

      daftarCard.appendChild(card);
    });
  })
  .catch((error) => console.error(error));
