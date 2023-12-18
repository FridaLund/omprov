// 7.1 Hämta användare (3p)
// Du ska använda Fetch för att hämta användarinformation
// från URL:en: https://jsonplaceholder.typicode.com/users.
// Visa endast användare som har ett användar-id som är
// högre än 5.
// Presentera användarnas namn, gatuadress (street) och
// företagsnamn på HTML-sidan.

const postEl = document.getElementById("posts");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const userOver5 = data.filter((user) => {
    return user.id > 5;
  });

  console.log("userOver5", userOver5);
  console.log(data);

  userOver5.forEach((user) => {
    const div = document.createElement("div");
    div.setAttribute("class", "post");
    div.innerHTML = `<h2>${user.name}</h2><p>${user.company.name}<br>${user.address.street}</p>`;

    postEl.appendChild(div);
  });
}

getPosts();

// 7.2 Styla varje användare (3p)
// Varje användare ska ha följande style:
// margin: 15px
// padding: 20px
// Texten på namnet ska vara bold och 24 pixlar
// Övrig text ska vara 16 pixlar
// Text-färgen ska ha färg-kod: #333333
// Backgrundsfärgen för varje användare ska ha färg-kod: #dddddd
// När man för muspekaren över en användare ska bakgrundsfärgen ändras till #eeeeee
// Visa användare i fyra kolumner för desktop och en kolumn för mobil
