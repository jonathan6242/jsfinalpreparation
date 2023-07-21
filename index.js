// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userList = document.querySelector(".user-list");

async function renderUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  
  userList.innerHTML = usersData.map(user => userHTML(user)).join("");
}

function showUserPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = window.location.pathname === "/index.html" ? (
    `${window.location.origin}/user.html`
  ) : (
    `${window.location.href}user.html`
  )
}

function userHTML(user) {
  return (
    `<div class="user" onclick="showUserPosts(${user.id})">
      <div class="user-card">
        <div class="user-card__container">
          <h3>${user.name}</h3>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
      </div>
    </div>`
  )
}

renderUsers();