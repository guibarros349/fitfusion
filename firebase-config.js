import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNr6pNrWBl1jawI9utddf_wT7Qnukj0w0",
  authDomain: "fitfusion-5b727.firebaseapp.com",
  databaseURL: "https://fitfusion-5b727-default-rtdb.firebaseio.com",
  projectId: "fitfusion-5b727",
  storageBucket: "fitfusion-5b727.firebasestorage.app",
  messagingSenderId: "9889974134",
  appId: "1:9889974134:web:04904a09b197fb60191c57",
  measurementId: "G-B6XMYDRQLB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };