// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  query,
  where
  
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// GANTI DENGAN FIREBASE CONFIG ANDA
const firebaseConfig = {
  apiKey: "AIzaSyA2uMQ-SO6cfFcAmoKbaBNDh_N34TYU68o",
  authDomain: "insancemerlang-c6ff2.firebaseapp.com",
  projectId: "insancemerlang-c6ff2",
  storageBucket: "insancemerlang-c6ff2.firebasestorage.app",
  messagingSenderId: "996228614767",
  appId: "1:996228614767:web:715bac465789728e9b9b9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const tanamanCollection = collection(db, "tanaman")

export async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

const q = query(
  collection(db, "users"),
  where("username", "==", username),
  where("password", "==", password)
)

  const querySnapshot = await getDocs(collection(db, "users"));

  let found = false;

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    if (data.username === username && data.password === password) {
      found = true;
    }
  });

  if (found) {
    document.getElementById("status").innerText = "Login berhasil";
    // redirect
    window.location.href = "admin.html";
  } else {
    document.getElementById("status").innerText = "Username atau password salah"; 
  }
}
//  fungsi untuk logout 
export function logout() {
  // hapus status login dari localstorage
  localStorage.removeItem("isLogin")
  
  // redirect ke halaman login
  window.location.href = "login.html"
}
  
  