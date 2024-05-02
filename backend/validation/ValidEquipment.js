import isEmpty from "./isEmpty.js";
import validator from "validator";

export default function ValidateEquipment(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.stock = !isEmpty(data.stock) ? data.stock : "";


  if (validator.isEmpty(data.name)) {
    errors.name = "Required equipment name";
  }
  if (validator.isEmpty(data.stock)) {
    errors.stock = "Required equipment stock";
  }
  if (!validator.isNumeric(data.stock)) {
    errors.stock = "Required type number";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
}


