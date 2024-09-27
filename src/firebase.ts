import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyDzpjigfOnbPM9V5Kw7ZIThaXastRRnoPU",
  authDomain: "mobile-invitation-36523.firebaseapp.com",
  databaseURL: "https://mobile-invitation-36523-default-rtdb.firebaseio.com",
  projectId: "mobile-invitation-36523",
  storageBucket: "mobile-invitation-36523.appspot.com",
  messagingSenderId: "584203775987",
  appId: "1:584203775987:web:a2fa422dafe559e939ec86"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
