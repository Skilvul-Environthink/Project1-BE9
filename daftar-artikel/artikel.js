// Mengambil data dari file JSON menggunakan fetch API
fetch("/daftar-artikel/artikel.json")
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

      // Menambahkan tombol "Baca Selanjutnya"
      const bacaSelanjutnya = document.createElement("button");
      bacaSelanjutnya.classList.add("btn", "btn-primary", "mt-3");
      bacaSelanjutnya.textContent = "Baca Selanjutnya";

      // Menambahkan elemen link ke dalam card
      const link = document.createElement("a");
      link.href = "/detail-artikel.html"; // Atur href sesuai halaman detail-artikel yang ada di proyek Anda
      link.style.color = "black"; // Atur warna tulisan link menjadi hitam
      link.addEventListener("mouseover", () => {
        link.style.color = "blue"; // Saat di-hover, ubah warna tulisan link menjadi biru
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "black"; // Saat keluar dari hover, ubah warna tulisan link menjadi hitam kembali
      });
      link.appendChild(bacaSelanjutnya);
      cardBody.appendChild(kategori);
      cardBody.appendChild(judul);
      cardBody.appendChild(isi);
      cardBody.appendChild(link);

      // Menambahkan gambar dan card body ke dalam card
      card.appendChild(img);
      card.appendChild(cardBody);

      // Menambahkan event listener untuk redirect ke halaman detail-artikel saat card di klik
      card.addEventListener("click", () => {
        window.location.href = link.href;
      });

      // Menambahkan event listener untuk redirect ke halaman detail-artikel saat tombol "Baca Selanjutnya" di klik
      bacaSelanjutnya.addEventListener("click", () => {
        window.location.href = link.href;
      });

      // Menambahkan card ke dalam daftar card
      daftarCard.appendChild(card);
    });
  })
  .catch((error) => console.error(error));
// Menambahkan tombol "Baca Selanjutnya"
const bacaSelanjutnya = document.createElement("button");
bacaSelanjutnya.classList.add("btn", "btn-primary", "mt-3");
bacaSelanjutnya.textContent = "Baca Selengkapnya";

// Menambahkan elemen link ke dalam card
const link = document.createElement("a");
link.href = "/detail-artikel.html"; // Atur href sesuai halaman detail-artikel yang ada di proyek Anda
link.style.color = "black"; // Atur warna tulisan link menjadi hitam
link.classList.add("text-decoration-none"); // Menambahkan kelas CSS "text-decoration-none" agar tidak ada underline pada link
link.addEventListener("mouseover", () => {
  link.style.color = "blue"; // Saat di-hover, ubah warna tulisan link menjadi biru
});
link.addEventListener("mouseout", () => {
  link.style.color = "black"; // Saat keluar dari hover, ubah warna tulisan link menjadi hitam kembali
});
link.appendChild(bacaSelanjutnya);
cardBody.appendChild(kategori);
cardBody.appendChild(judul);
cardBody.appendChild(isi);
cardBody.appendChild(link);
