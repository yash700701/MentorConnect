const firebaseConfig = {
  apiKey: "AIzaSyA_lb33IdxiF8bodY5oP-Cofg4_oCDpya0",
  authDomain: "mentorconnect-2ca0e.firebaseapp.com",
  databaseURL: "https://mentorconnect-2ca0e-default-rtdb.firebaseio.com",
  projectId: "mentorconnect-2ca0e",
  storageBucket: "mentorconnect-2ca0e.appspot.com",
  messagingSenderId: "819171036234",
  appId: "1:819171036234:web:67d37ba85543b03402eab3",
  measurementId: "G-VHB1W6YY2Y",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
let signupFormDB = firebase.database().ref("signupForm");
document.getElementById("signupForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let Username = getElementVal("username");
  let Email = getElementVal("email");
  let Password = getElementVal("password");

  console.log(Username, Email, Password);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
