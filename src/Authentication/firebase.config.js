import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAElcaY8sJR46FkPoQwXy6zpQWQUh1oVWg",
  authDomain: "lost-and-found-fdb58.firebaseapp.com",
  projectId: "lost-and-found-fdb58",
  storageBucket: "lost-and-found-fdb58.appspot.com",
  messagingSenderId: "286077573191",
  appId: "1:286077573191:web:ea05ae95217b8cdf25f962"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
