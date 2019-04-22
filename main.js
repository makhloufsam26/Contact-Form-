// Initialize Firebase
var config = {
   apiKey: "AIzaSyA7Zlug1g5Dl79WKQG-XL7hpEumjIvfKd8",
   authDomain: "contact-form-22042019.firebaseapp.com",
   databaseURL: "https://contact-form-22042019.firebaseio.com",
   projectId: "contact-form-22042019",
   storageBucket: "contact-form-22042019.appspot.com",
   messagingSenderId: "520193488990"
};
firebase.initializeApp(config);

// Reference message collection
let messagesRef = firebase.database().ref("messages");

//  Get form from HTML
const contactForm = document.getElementById("contactForm");
// Listen to form Submit
contactForm.addEventListener("submit", submitForm);

// Submit Form
function submitForm(e) {
   e.preventDefault();

   var name = getInputVal("name");
   var company = getInputVal("company");
   var email = getInputVal("email");
   var phone = getInputVal("phone");
   var message = getInputVal("message");

   // Save Messages
   saveMessages(name, company, email, phone, message);

   //Show alet message
   document.querySelector(".alert").style.display = "block";

   // Hide alet message after 3 seconds
   setTimeout(function() {
      document.querySelector(".alert").style.display = "none";
   }, 3000);

   // Clear the form
   const contactForm = document.getElementById("contactForm").reset();
}

// Function to get form value
function getInputVal(id) {
   return document.getElementById(id).value;
}

// Save message to firebase
const saveMessages = (name, company, email, phone, message) => {
   var newMessagesRef = messagesRef.push();
   newMessagesRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
   });
};
