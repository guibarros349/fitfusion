
function toggleDark() {
  document.documentElement.classList.toggle('dark');
}

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  auth.signInWithEmailAndPassword(email, senha)
    .then(user => carregarUsuario(user.user))
    .catch(err => alert("Erro ao logar: " + err.message));
}

function registrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  auth.createUserWithEmailAndPassword(email, senha)
    .then(user => carregarUsuario(user.user))
    .catch(err => alert("Erro ao cadastrar: " + err.message));
}

function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(result => carregarUsuario(result.user));
}

function carregarUsuario(user) {
  document.getElementById("usuario").classList.remove("hidden");
  document.getElementById("userEmail").textContent = user.email;
  carregarHistorico(user.uid);

  document.getElementById("avaliacaoForm").onsubmit = async function (e) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target).entries());
    const mensagem = `📊 Avaliação de ${user.email}\nIdade: ${form.idade}, Peso: ${form.peso}kg, Altura: ${form.altura}cm, Objetivo: ${form.objetivo}`;

    await db.collection("usuarios").doc(user.uid).collection("historico").add({
      ...form,
      data: new Date(),
      mensagem
    });

    const link = `https://wa.me/5561994195767?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
    e.target.reset();
    carregarHistorico(user.uid);
  };
}

async function carregarHistorico(uid) {
  const lista = document.getElementById("historico");
  lista.innerHTML = '';
  const docs = await db.collection("usuarios").doc(uid).collection("historico").orderBy("data", "desc").get();
  docs.forEach(doc => {
    const d = doc.data();
    lista.innerHTML += `<li>${d.objetivo} - ${new Date(d.data.toDate()).toLocaleString()}</li>`;
  });
}

auth.onAuthStateChanged(user => {
  if (user) carregarUsuario(user);
});
