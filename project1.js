// for (let i = 0; i < 100; i++) {
//   $('#age').append(`
//     <option value="${[i]}">${[i]}</option>
// `)
// };

//  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCSVExCfvP9TwDQacXgj1lwu1E1uXcq7KI",
//     authDomain: "quickiehelp-b8fb4.firebaseapp.com",
//     databaseURL: "https://quickiehelp-b8fb4.firebaseio.com",
//     projectId: "quickiehelp-b8fb4",
//     storageBucket: "quickiehelp-b8fb4.appspot.com",
//     messagingSenderId: "1008999421520"
//   };
//   firebase.initializeApp(config);


// var database = firebase.database();

//     var firstName = "";
//     var lastName = "";
//     var email = "";
//     var password = "";
//     var age = 0;
//     var gender = "";

    
    
//     // Capture Button Click
//     $("#submitButton").on("click", function() {

//       event.preventDefault();
      
//       firstName = $("#firstName").val().trim();
//       lastName = $("#lastName").val().trim();
//       email = $("#email").val().trim();
//       password = $("#password").val().trim();
//       age = $("#age").val().trim();
//       gender = $("#gender").val().trim();

//       // createAcount();
//       $("#submitButton").submit(function() {
//   $(this).find("button[type='submit']").prop('disabled',true);
// });
    

      
//       database.ref().push().set({
//       	firstName: firstName,
//       	lastName: lastName,
//         email: email,
//         password: password,
//         age: age,
//         gender: gender

        
//       });
//       console.log(database);
//     });

//  database.ref().on("value", function(snapshot) {
     
//     }, function(errorObject) {
//       console.log("Errors handled: " + errorObject.code);
//     });
// console.log("test");





//  ///////////////////////////////////////////////////////////////////////////////////////////

//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
    

//     document.getElementById("logOut").style.display = "block";
//     // document.getElementById("loginDiv").style.display = "none";


//     var user = firebase.auth().currentUser;

//     if (user != null) {

//       var emailId = user.email;
//       var emailVerified = user.emailVerified;
//       if (emailVerified) {
//         document.getElementById("verification").style.display = "none";
//       }
//       else {
//                 document.getElementById("verification").style.display = "block";

//       }
//       document.getElementById("userPara").innerHTML = "Welcome User! :" + emailId + "<br/>Verified: " + emailVerified;
//       // $("#notiSign").append("<h4>Welcome : " + emailId);
      
//     }
//   } else {
//     // No user is signed in.

//      document.getElementById("userDiv").style.display = "none";
//     document.getElementById("loginDiv").style.display = "block";

//     // $("#notiSign").hide("<h4>Welcome : " + emailId);
//   }
// });

//   function createAcount() {
//           // $("#emailField").val();
//     var userEmail = $("#emailField").val();
//     var userPassword = $("#passwordField").val();

//     firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
//   // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   // ...
// });



//   }

//   function login() {

//     var userEmail = $("#emailField").val();
//     var userPassword = $("#passwordField").val();

//     firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });




//   }

//   function sendVerification() {

//     var user = firebase.auth().currentUser;

//     user.sendEmailVerification().then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });

//   }

//   function logOut() {
//     var user = firebase.auth().signOut();
//   }

//   // On Clicks

//   $("#logOut").on("click", function() {
//     event.preventDefault();
//     logOut();
//   })

//   $("#submitButton").on("click", function() {
//     event.preventDefault();

//     createAcount();
//   })

//   $("#loginAcount").on("click", function() {
//     event.preventDefault();

//     login();
//   })

//   $("#verification").on("click", function() {
//     event.preventDefault();

//     sendVerification();
//   })


