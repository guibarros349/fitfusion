document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) window.location.href = "index.html";
  document.getElementById('user-name').innerText = user.displayName;

  const peso = 70; // Exemplo
  document.getElementById('dieta').innerText = `Calorias diárias: ${peso * 30} kcal, Proteínas: ${peso * 2}g`;
  document.getElementById('treino').innerText = "Treino Full Body 3x/semana (segunda, quarta e sexta)";
});

document.getElementById('logout').addEventListener('click', () => {
  sessionStorage.removeItem("user");
  window.location.href = "index.html";
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});