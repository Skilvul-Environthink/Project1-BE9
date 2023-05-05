// Mengambil data dari file JSON menggunakan fetch API
// import data from "./artikel.json" assert { type: "json" };
// console.log(data);
fetch("artikel.json")
  .then((response) => response.json())
  .then((data) => {
    // Membuat sebuah variabel untuk menampung daftar card
    const daftarCard = document.getElementById("card-artikel");
    daftarCard.classList.add("row", "gy-4");

    // Menggunakan loop untuk membuat card HTML untuk setiap objek dalam file JSON
    data.forEach((item) => {
      //.slice(0, 3)
      // Membuat elemen card
      const card = document.createElement("div");
      card.classList.add("col-lg-4", "col-md-6");

      const containerCard = document.createElement("div");
      card.classList.add("card");

      // Menambahkan gambar pada card
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = item.gambar;
      img.alt = "gambar";

      // Menambahkan isi card
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

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

      card.appendChild(containerCard);
      // Menambahkan card ke dalam daftar card
      daftarCard.appendChild(card);

      console.log(daftarCard);
    });
  })
  .catch((error) => console.error(error));
