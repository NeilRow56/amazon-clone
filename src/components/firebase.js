// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBEKJFDqsImbjCHYVG6COK0VRlWfV7d3rc',
	authDomain: 'auth-development-6d851.firebaseapp.com',
	projectId: 'auth-development-6d851',
	storageBucket: 'auth-development-6d851.appspot.com',
	messagingSenderId: '290145983806',
	appId: '1:290145983806:web:d2e5c682a4b56e9b0ca06f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
