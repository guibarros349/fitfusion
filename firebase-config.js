
// ✅ Chaves reais (exemplo fictício - substitua pelas suas reais do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyEXEMPLO1234567890",
  authDomain: "fitfusion.firebaseapp.com",
  projectId: "fitfusion",
  storageBucket: "fitfusion.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
