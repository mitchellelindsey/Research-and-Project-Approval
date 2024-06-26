// Add this JavaScript to handle the form toggling
document.getElementById('showSignupBtn').addEventListener('click', function() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'block';
        });
document.getElementById('showLoginBtn').addEventListener('click', function() {
            document.getElementById('signupForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
});

// Existing JavaScript for the signup and signin button functionalities
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let lastname = document.getElementById("lastname");
let number = document.getElementById("number");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  lastname.style.maxHeight = "0";
  number.style.maxHeight = "0";
  title.innerHTML = "Login";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  lastname.style.maxHeight = "60px";
  number.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};

// Toggling of the password
document.getElementById("togglePassword").addEventListener("click", function (e) {
  const passwordField = document.getElementById("password");
  const passwordFieldType = passwordField.getAttribute("type");
  const toggleButton = e.target;

  if (passwordFieldType === "password") {
      passwordField.setAttribute("type", "text");
      toggleButton.textContent = "Hide";
  } else {
  passwordField.setAttribute("type", "password");
  toggleButton.textContent = "";
  }
});
