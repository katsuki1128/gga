// Firebaseの初期化とFirestore、Storageの設定を行うモジュール

// ▼firebaseプロジェクトとjavaScriptを連携させる
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

// firebase firestoreとやり取りをする設定
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy, //データのソート
    onSnapshot, // Firestore 上に保存されているデータを取得
    doc,
    deleteDoc,
    updateDoc,
    getDocs,
    getDoc,
    increment,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

// firebase storageとやり取りをする設定
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-storage.js";

// ウェブアプリのFirebaseの設定
const firebaseConfig = {
    apiKey: "",
    authDomain: "tvcha-9cae7.firebaseapp.com",
    projectId: "tvcha-9cae7",
    storageBucket: "tvcha-9cae7.appspot.com",
    messagingSenderId: "866848033597",
    appId: "1:866848033597:web:c6887382eb14ee58351354",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// FirebaseアプリとCloud Storageの連携を初期化しセットアップする
const storage = getStorage(app);

// dbに対してデータの追加や取得ができるようにする
const db = getFirestore(app);

// コレクションの名前を定義
const collectionName = "gga";

const q = query(collection(db, collectionName), orderBy("order", "desc"));


// 必要な変数と関数をエクスポート
export {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy, //データのソート
    onSnapshot, // Firestore 上に保存されているデータを取得
    doc,
    deleteDoc,
    updateDoc,
    getDocs,
    getDoc,
    increment,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    app,
    storage,
    db,
    collectionName,
    q
};