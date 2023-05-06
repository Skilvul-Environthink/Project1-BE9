const avatar = document.querySelector('.avatar-wrapper img');
const dropdownMenu = document.getElementById('dropdown-menu');
const logoutBtn = document.getElementById('logout-btn');

avatar.addEventListener('click', function() {
  dropdownMenu.style.display = 'block';
});

logoutBtn.addEventListener('click', function() {
  console.log('Logout clicked');
  window.location.href = "/log.html"; // redirect to logout page
})
const apiUrl =
        "https://64532f80e9ac46cedf1f015f.mockapi.io/api/v1/detailartikel";

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const article = data[0];
          const titleElement = document.getElementById("title");
          const previewTextElement = document.getElementById("preview-text");
          const imageElement = document.getElementById("image");
          const contentElement = document.getElementById("content");

          titleElement.innerText = article.title;
          previewTextElement.innerText = article["priview-text"];
          imageElement.src = article.images;
          contentElement.innerText = article.content;
        })
        .catch((error) => console.log(error));

      