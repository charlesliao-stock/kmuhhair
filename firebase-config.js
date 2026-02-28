// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDprYNOmGoMHeXwjR4M9uX35bSzyL1ZYwY",
  authDomain: "kmuhhair.firebaseapp.com",
  projectId: "kmuhhair",
  storageBucket: "kmuhhair.firebasestorage.app",
  messagingSenderId: "457057316042",
  appId: "1:457057316042:web:d9c10250d68a84a4e6d833",
  measurementId: "G-1GH69KDZMZ"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 導出常用的服務供其他頁面使用
export const db = getFirestore(app);
export const auth = getAuth(app);
