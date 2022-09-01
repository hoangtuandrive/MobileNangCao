fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        var html = "";
        posts.forEach((post) => {
          html += `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`;
        });
        var postBlock = document.getElementById("posts-block");
        return (postBlock.innerHTML = html);
      })
    .catch((err) => {
        console.log("Error");
    });