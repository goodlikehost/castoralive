function openModal() {
  document.getElementById("signupModal").style.display = "block";
}

function closeModal() {
  document.getElementById("signupModal").style.display = "none";
}

function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("signinForm").classList.add("hidden");
}

function showSignin() {
  document.getElementById("signinForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}
