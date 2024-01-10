window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".sec-1-navbar");
  if (window.scrollY >= 100) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var loginLi = document.getElementById("loginLi");
  var logoutLi = document.getElementById("logoutLi");
  var profilePic = document.getElementById("profilePic");

  // Hide login button, show logout button, and display user profile pic
  loginLi.style.display = "none";
  logoutLi.style.display = "block";
  profilePic.src = profile.getImageUrl();
  profilePic.alt = "Profile Picture";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    var loginLi = document.getElementById("loginLi");
    var logoutLi = document.getElementById("logoutLi");

    // Hide logout button, show login button
    logoutLi.style.display = "none";
    loginLi.style.display = "block";
  });
}

// // Function to toggle display of the login form
// function toggleLoginForm() {
//   var loginForm = document.getElementById("loginForm");
//   loginForm.style.display =
//     loginForm.style.display === "block" ? "none" : "block";
// }

// // Function to perform login
// function performLogin() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   // Make a POST request to the server for login
//   fetch("http://localhost:5000/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert(data.message); // Display a message from the server
//       toggleLoginForm(); // Close the login form if login is successful
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("Login failed. Please try again."); // Display an error message
//     });
// }

// // Event listener for the login button
// document.getElementById("loginButton").addEventListener("click", function () {
//   toggleLoginForm();
// });

// // Add this JavaScript code at the end of your HTML or in a separate script file

// // Get necessary elements
// const sliderDivs = document.querySelector('.sec-7-blog-slider-divs');
// const slideWidth = document.querySelector('.sec-7-blog-slider-innr').offsetWidth;
// let currentIndex = 0;
// let intervalId;

// // Function to change slide
// function changeSlide(direction) {
//   // Clear the previous auto-slide interval
//   clearInterval(intervalId);

//   currentIndex = currentIndex + direction;

//   // Check boundaries
//   if (currentIndex < 0) {
//     currentIndex = 0;
//   } else if (currentIndex > 2) { // Assuming there are 3 slides
//     currentIndex = 2;
//   }

//   // Calculate new position
//   const newPosition = -currentIndex * slideWidth;

//   // Apply transition effect
//   sliderDivs.style.transition = 'transform 0.3s ease-in-out';

//   // Move to the new position
//   sliderDivs.style.transform = `translateX(${newPosition}px)`;

//   // Start auto-slide after a delay (3 seconds)
//   startAutoSlide();
// }

// // Function to start auto-slide
// function startAutoSlide() {
//   intervalId = setInterval(() => {
//     changeSlide(1);
//   }, 3000);
// }

// // Start auto-slide initially
// startAutoSlide();

// // Reset transition when animation ends
// sliderDivs.addEventListener('transitionend', () => {
//   sliderDivs.style.transition = 'none';
// });

// // Pause auto-slide on button click
// document.getElementById('prevBtn').addEventListener('click', () => {
//   clearInterval(intervalId);
// });

// document.getElementById('nextBtn').addEventListener('click', () => {
//   clearInterval(intervalId);
// });

// // Resume auto-slide after a period of inactivity (3 seconds)
// document.addEventListener('mousemove', () => {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {
//     startAutoSlide();
//   }, 3000);
// });

// let timeoutId;
