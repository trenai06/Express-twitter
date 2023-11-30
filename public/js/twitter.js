fetch("http://localhost:3000/posts")
  .then((response) => {
    posts = response.json();
    return posts;
  })

  .then((posts) => {
    console.log(posts);
    container = document.getElementById("container");

    for (let i = 0; i < posts.length; i++) {
      cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

      infoContainer = document.createElement("div");
      cardContainer.appendChild(infoContainer);

      infoContainer.classList.add("info-container");

      header = document.createElement("h1");
      picture = document.createElement("img");
      textbox = document.createElement("h4");
      paragraph = document.createElement("p");

      container.appendChild(cardContainer);
      header.classList.add("poster");

      header.innerText = posts[i].name;
      textbox.innerText = posts[i].tweet;
      paragraph.innerText = posts[i].likes;
      picture.src = posts[i].image;

      infoContainer.appendChild(header);
      infoContainer.appendChild(picture);
      infoContainer.appendChild(textbox);
      infoContainer.appendChild(paragraph);
      container.appendChild(cardContainer);
    }
  })

  .catch((error) => {
    console.log(error);
  });
