// Mengambil data dari file JSON menggunakan fetch API
// import data from "./artikel.json" assert { type: "json" };
// console.log(data);
fetch("artikel.json")
  .then((response) => response.json())
  .then((data) => {
    // Membuat sebuah variabel untuk menampung daftar card
    const daftarCard = document.getElementById("card-artikel");

    // Menggunakan loop untuk membuat card HTML untuk setiap objek dalam file JSON
    data.slice(0, 3).forEach((item) => {
      // Membuat elemen card
      const card = document.createElement("div");
      card.classList.add("col-lg-4 col-md-6");
      card.style.width = "18rem";

      // Menambahkan gambar pada card
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = item.gambar;
      img.alt = "gambar";
      // card.appendChild(img);

      // Menambahkan isi card
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      // card.appendChild(cardBody);

      const kategori = document.createElement("p");
      kategori.classList.add("card-text", "text-primary");
      kategori.textContent = item.kategori;
      // cardBody.appendChild(kategori);

      const judul = document.createElement("h5");
      judul.classList.add("card-title");
      judul.textContent = item.judul;
      // cardBody.appendChild(judul);

      const isi = document.createElement("p");
      isi.classList.add("card-text", "text-secondary");
      isi.textContent = item.isi;
      // cardBody.appendChild(isi);

      // Menambahkan elemen-elemen ke dalam card
      cardBody.appendChild(kategori);
      cardBody.appendChild(judul);
      cardBody.appendChild(isi);

      card.appendChild(img);
      card.appendChild(cardBody);

      // Menambahkan card ke dalam daftar card
      daftarCard.appendChild(card);
    });
  })
  .catch((error) => console.error(error));
