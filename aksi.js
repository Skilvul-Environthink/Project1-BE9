// Mengambil data dari file JSON menggunakan fetch API
// import data from "./aksi.json" assert { type: "json" };
// console.log(data);
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

      //   const button = document.createElement("a");
      //   button.classList.add("btn", "btn-success");
      //   button.href = "#";
      //   button.textContent = "Pelajari Selengkapnya";

      // Menambahkan elemen-elemen ke dalam card
      cardBody.appendChild(tittle);
      cardBody.appendChild(pendukung);
      cardFooter.appendChild(footer);
      //   cardFooter.appendChild(button);

      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);

      daftarCard.appendChild(card);

      console.log(daftarCard);
    });
  })
  .catch((error) => console.error(error));
