function login() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("username", username);
    if (!localStorage.getItem("coins")) {
      localStorage.setItem("coins", "100"); // start with 100 coins
    }
    loadGame();
  } else {
    alert("Enter your username.");
  }
}

function loadGame() {
  const username = localStorage.getItem("username");
  const coins = localStorage.getItem("coins");

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("gameBox").style.display = "block";

  document.getElementById("userDisplay").innerText = username;
  document.getElementById("coinCount").innerText = coins;
}

function spinWheel() {
  let reward = Math.floor(Math.random() * 100 + 1);
  let coins = parseInt(localStorage.getItem("coins") || "0");
  coins += reward;
  localStorage.setItem("coins", coins);
  document.getElementById("coinCount").innerText = coins;
  alert(`You won ${reward} coins!`);
}

// Auto-load if already logged in
if (localStorage.getItem("username")) {
  window.onload = loadGame;
}
