const firebaseConfig = {
  apiKey: "AIzaSyDtRFxHs2w_PzntrM8PrN6rsD8_PKBEpI8",
  authDomain: "mentor-connect-cf6ac.firebaseapp.com",
  databaseURL: "https://mentor-connect-cf6ac-default-rtdb.firebaseio.com",
  projectId: "mentor-connect-cf6ac",
  storageBucket: "mentor-connect-cf6ac.appspot.com",
  messagingSenderId: "727541961851",
  appId: "1:727541961851:web:3efdbb2365f4ff28377ede",
};
firebase.initializeApp(firebaseConfig);

let signUpDB = firebase.database().ref("signupForm");
document.getElementById("signupForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let Username = getElementVal("username");
  let Email = getElementVal("email");
  let Password = getElementVal("password");

  saveInfo(Username, Email, Password);

  //alert:
  document.querySelector(".signup_alert").style.display = "block";

  //removing alert:
  setTimeout(() => {
    document.querySelector(".signup_alert").style.display = "none";
  }, 1500);

  //reset form:
  document.getElementById("signupForm").reset();
}

const saveInfo = (Username, Email, Password) => {
  let newSignUpForm = signUpDB.push();

  newSignUpForm.set({
    Username: Username,
    email: Email,
    Password: Password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
