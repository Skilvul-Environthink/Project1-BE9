fetch("/artikel/artikel.json")
  .then((response) => response.json())
  .then((data) => {
    // Membuat sebuah variabel untuk menampung daftar card
    const daftarCard = document.getElementById("card-artikel");
    daftarCard.classList.add("row", "gy-4");

    // Menggunakan loop untuk membuat card HTML untuk setiap objek dalam file JSON
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("col-lg-4", "col-md-6", "card");
      card.style.marginLeft = "10px";
      card.style.width = "22rem";

      // Menambahkan gambar pada card
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = item.gambar;
      img.alt = "gambar";

      // Menambahkan isi card
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.style.padding = "0px";

      const kategori = document.createElement("p");
      kategori.classList.add("card-text", "text-primary");
      kategori.textContent = item.kategori;

      const judul = document.createElement("h5");
      judul.classList.add("card-title");
      judul.textContent = item.judul;

      const isi = document.createElement("p");
      isi.classList.add("card-text", "text-secondary");
      isi.textContent = item.isi;

      // Menambahkan elemen-elemen ke dalam card
      cardBody.appendChild(kategori);
      cardBody.appendChild(judul);
      cardBody.appendChild(isi);

      card.appendChild(img);
      card.appendChild(cardBody);

      // Menambahkan event listener saat card di klik
      card.addEventListener("click", () => {
        // Mengarahkan halaman ke detail-artikel.html
        window.location.href = "detail-artikel.html?id=" + item.id;
      });

      daftarCard.appendChild(card);
    });
  })
  .catch((error) => console.error(error));
