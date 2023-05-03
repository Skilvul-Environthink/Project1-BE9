console.log ("test")
function registerUser(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const url = "https://644f7899ba9f39c6ab6462c2.mockapi.io/API/V1/registrasi"; // ganti dengan URL API yang sesuai
  const data = {
    fullname: fullname,
    email: email,
    username: username,
    password: password
  };
  console.log (data)
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(json);
   window.location.href = "log.html"; // ganti dengan halaman login yang sesuai
  })
  .catch(error => console.error(error));
}