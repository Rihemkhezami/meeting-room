import isEmpty from "./isEmpty.js";
import validator from "validator";

export default function ValidateRoom(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.capacity = !isEmpty(data.capacity) ? data.capacity : "";


  if (validator.isEmpty(data.name)) {
    errors.name = "Required room name";
  }
  if (validator.isEmpty(data.capacity)) {
    errors.capacity = "Required room capacity";
  }
  if (!validator.isNumeric(data.capacity)) {
    errors.capacity = "Required type number";
  }
  
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
}


