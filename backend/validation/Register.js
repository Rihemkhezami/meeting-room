import isEmpty from "./isEmpty.js";
import validator from "validator";

export default function ValidateRegister(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirm = !isEmpty(data.confirm) ? data.confirm : "";

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "First name required";
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid email format";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email Required";
  }
  if (!isValidPhoneNumberFormat(data.phone)) {
    errors.phone = "Phone format required";
  }
  if (validator.isEmpty(data.phone)) {
    errors.phone = "Phone required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password required";
  }
  if (!isValidPasswordFormat(data.password)) {
    errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 6 characters long";
  }
  if (!validator.equals(data.password, data.confirm)) {
    errors.confirm = "Passwords not match";
  }
  if (validator.isEmpty(data.confirm)) {
    errors.confirm = "Confirm password required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

function isValidPhoneNumberFormat(phone) {
  const phoneRegex = /^[0-9]{8}$/; // Regex pour le format 8 chiffres
  return phoneRegex.test(phone);
}

function isValidPasswordFormat(password) {
    // Regex pour vérifier que le mot de passe contient au moins minuscule,majuscule, un chiffre et fait au moins 6 caractères
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  }
