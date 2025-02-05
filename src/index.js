import "./styles.css";
import { countriesList as countries } from "./countries";

//live validation
//auto validate upon leaving focus
// submit should tell if more errors or give a hi5

function validateEmail() {
  // check if email is null and say it's required
  //validate against an email regex and say inavlid email
  //clear errors

  const input = document.getElementById("email");
  const error = document.getElementById("email-error");
  error.style.display = "block";
  if (input.validity.valueMissing) {
    error.innerText = "Email is required";
  } else if (!input.validity.valid) {
    error.innerText = "Please enter a valid email. Example: a@a.com";
  } else {
    error.style.display = "none";
  }
}

function validatePassword() {
  // check if null and say it's required
  //validate length checks
  //clear errors
  const input = document.getElementById("password");
  const error = document.getElementById("pass-error");
  const maxLength = input.getAttribute("maxlength");
  const minLength = input.getAttribute("minlength");
  const length = input.value.length;
  error.style.display = "block";
  if (input.validity.valueMissing) {
    error.innerText = "Password is required";
  } else if (input.validity.tooShort) {
    error.innerText = `Password must be at least ${minLength} characters long. Please enter ${minLength - length} more characters`;
  } else if (input.validity.tooLong) {
    error.innerText = `Password must be at most ${maxLength} characters long. Please remove ${maxLength - length} characters`;
  } else if (!input.validity.valid) {
    error.innerText = "Invalid password";
  } else {
    error.style.display = "none";
  }
}

function validateConfirmPassword() {
  // check if null and say it's required
  //check if password is correct and if they match
  //clear errors
  const input = document.getElementById("conf-pass");
  const error = document.getElementById("conf-pass-error");
  const password = document.getElementById("password");
  error.style.display = "block";
  if (input.validity.valueMissing) {
    error.innerText = "Confirm your password";
  } else if (!password.validity.valid) {
    error.innerText = `Invalid password`;
  } else if (password.value !== input.value) {
    error.innerText = `Passwords do not match`;
  } else {
    error.style.display = "none";
  }
}

function validateZipCode() {
  // check if null and say it's required
  //check if length is exactly 6
  //clear errors
}

function renderCountryOptions() {
  const countriesSelect = document.getElementById("country");
  countriesSelect.replaceChildren();
  countries.map((country) => {
    const con = document.createElement("option");
    con.value = country;
    con.innerText = country;
    countriesSelect.appendChild(con);
  });
}

function addValidationEvents() {
  const email = document.getElementById("email");
  email.addEventListener("input", validateEmail);
  email.addEventListener("mouseup", validateEmail);

  const password = document.getElementById("password");
  password.addEventListener("input", validatePassword);
  password.addEventListener("mouseup", validatePassword);

  const confPassword = document.getElementById("conf-pass");
  confPassword.addEventListener("input", validateConfirmPassword);
  confPassword.addEventListener("mouseup", validateConfirmPassword);
}

renderCountryOptions();
addValidationEvents();
