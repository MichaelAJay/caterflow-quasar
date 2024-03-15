import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth-store';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export default boot(({ app }) => {
  // Iniitialize stores
  const authStore = useAuthStore();

  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize services & service observers
  const auth = getAuth(firebaseApp);
  app.provide('firebaseAuth', auth);
  onAuthStateChanged(auth, (user) => {
    authStore.setUserAuthenticated(!!user);
  });
});
