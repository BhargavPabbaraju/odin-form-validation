import "./styles.css";
import { countriesList as countries } from "./countries";

function validateEmail() {
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
  const input = document.getElementById("zip");
  const error = document.getElementById("zip-error");
  const length = input.value.length;
  error.style.display = "block";
  if (input.validity.valueMissing) {
    error.innerText = "Zip code is required";
  } else if (length < 6) {
    error.innerText = `Zipcode must have exactly 6 digits. Please enter ${6 - length} more digits`;
  } else if (length > 6) {
    error.innerText = `Zipcode must have exactly 6 digits. Please remove ${length - 6} digits`;
  } else {
    error.style.display = "none";
  }
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

function onSubmit(e) {
  e.preventDefault();
  const error = document.getElementById("submit-error");
  const text = document.getElementById("success-text");
  text.innerText = "";
  error.style.display = "none";
  if (!e.target.form.checkValidity()) {
    error.style.display = "block";
  } else {
    text.innerText = "Yay you completed the form! 🙌";
  }
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

  const zip = document.getElementById("zip");
  zip.addEventListener("input", validateZipCode);
  zip.addEventListener("mouseup", validateZipCode);

  const submit = document.getElementById("submit");
  submit.addEventListener("click", onSubmit);
}

renderCountryOptions();
addValidationEvents();
