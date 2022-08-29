/**
 * Firebase Setup/Config
 */

 const firebaseConfig = {
    apiKey: "AIzaSyAjPSeWOfUsPB6vB9Cco7EbSqN-Ho4ugC8",
    authDomain: "yet-another-chat-mobile-dev.firebaseapp.com",
    projectId: "yet-another-chat-mobile-dev",
    storageBucket: "yet-another-chat-mobile-dev.appspot.com",
    messagingSenderId: "59113856566",
    appId: "1:59113856566:web:5749b6102901e0ac6f0297"
  };

  const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  }

  export {initFirebase};