const apiUrl = "https://644f7899ba9f39c6ab6462c2.mockapi.io/API/V1/login";

// ambil data JSON dari API
fetch('https://644f7899ba9f39c6ab6462c2.mockapi.io/API/V1/login')
  .then(response => response.json())
  .then(data => {
    const form = document.querySelector(".login-form");

    // tambahkan event listener pada form login
    form.addEventListener("submit", event => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // cek apakah username dan password sesuai dengan data pada JSON
      const user = data.find(item => item.USERNAME === username && item.PASSWORD === password);
      if (user) {
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user))
        alert("Login berhasil");
        // redirect ke halaman dashboard setelah login berhasil
        window.location.href = "/home.html";
      } else {
        alert("Username atau password salah");
      }
    });
  })
  .catch(error => console.error(error));