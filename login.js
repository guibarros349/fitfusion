import { auth, provider } from './firebase-config.js';
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

document.getElementById('google-login').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then(result => {
      sessionStorage.setItem("user", JSON.stringify(result.user));
      window.location.href = 'dashboard.html';
    })
    .catch(error => {
      alert("Erro ao fazer login: " + error.message);
    });
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});