const id = localStorage.getItem("id");
const input = document.querySelector("input");
const postList = document.querySelector(".post-list");

input.value = id;

async function renderPosts(userId) {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const postsData = await posts.json();
  
  postList.innerHTML = postsData.map(post => postHTML(post)).join("");
}

renderPosts(id);

function onSearchChange(e) {
  const id = e.target.value;
  renderPosts(id);
}

function postHTML(post) {
  return (
    `<div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
  )
}
