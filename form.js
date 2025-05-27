var values = {
  fname: "",
  lname: "",
  emails: "",
  pwd: "",
  cpwd: "",
  gender: "",
  birthday: "",
  city: "",
  bio: "",
  tandc: "",
};
var errors = {
  fnameError: "",
  lnameError: "",
  emailsError: "",
  pwdError: "",
  cpwdError: "",
  genderError: "",
  birthdayError: "",
  cityError: "",
  bioError: "",
  tandcError: "",
};

var replaceerrors = {
  fname: "Enter First Name",
  lname: "Enter Last Name",
  emails: "enter Email",
  pwd: " Enter Password",
  cpwd: "Enter Confirm Password",
  gender: "Select Gender",
  birthday: "Select Birthday",
  city: "Select City",
  bio: "Enter Bio",
  tandc: "Agree Tearms and Conditions",
};

const emailsRegex = /^\S+@\S+\.\S+$/;
const pwdRegex = /^[a-zA-Z0-9!@#$%^&*]{8,12}$/;

let allFields = Object.keys(errors);
let allfvalues = Object.keys(values);

function setValue(e) {
  let field = e.target.id;
  let val = e.target.value.trim();
  if (field.includes("gender")) {
    field = "gender";
    let genderVal = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;

    val = genderVal == undefined ? "" : genderVal;
  } else if (field == "tandc") {
    val = document.getElementById(field).checked ? true : "";
  }
  values[field] = val;
  checkError(field, val);
}

function checkError(field, val) {
  // console.log(values["pwd"]);
  // console.log(values["cpwd"]);
  // console.log(values["pwd"] != values["cpwd"]);
  // return

  if (values[field] == "") {
    errors[field + "Error"] = field + " is required";
  } else if (field == "emails" && !emailsRegex.test(val)) {
    errors[field + "Error"] = "Invalid Email.";
  } 
  
  
  else if (field == "pwd" || field == "cpwd") {
    if (!pwdRegex.test(val)) {
      errors[field + "Error"] = "Incorrect " + field;
    } else if (
      values["pwd"].length > 0 &&
      values["cpwd"].length > 0 &&
      values["pwd"] != values["cpwd"]
    ) {
      errors["cpwdError"] = "Password & Confirm Password does not matched";
      document.getElementById('cpwdError').innerHTML=errors["cpwdError"];
    } else {
      errors["pwdError"] = "";
      errors["cpwdError"] = "";
      document.getElementById('cpwdError').innerHTML="";
    }
  }

  // else if (field == "pwd" && !pwdRegex.test(val)) {
  //   errors[field + "Error"] = "Incorrect " + field;
  // }
  //  else if (field == "cpwd" && values["pwd"] != values["cpwd"]) {
  //   errors[field + "Error"] = "not match " + field;
  // } else if (field == "pwd" && values["cpwd"] == values["pwd"]) {
  //   errors[field + "Error"] = "";
  // }

  else if ((field == "fname" || field == "lname") && !isNaN(val)) {
    errors[field + "Error"] = "number not allowed " + field;
  } else if (field == "birthday") {
    let todate = new Date();
    let birthdayDate = new Date(val);
    if (todate.getTime() < birthdayDate.getTime()) {
      errors[field + "Error"] = "Invalid " + field;
    } else {
      errors[field + "Error"] = "";
    }
  } else {
    errors[field + "Error"] = "";
  }
  document.getElementById(field + "Error").innerHTML = errors[field + "Error"];
}

function submitData() {
  let allField = Object.keys(values);
  allField.forEach((field) => {
    checkError(field, values[field]);
  });

  ErrorCount = 0;
  isSubmitted = false;

  allFields.forEach((f) => {
    if (errors[f].length != 0) {
      ErrorCount = parseInt(ErrorCount) + 1;
    }
  });
  if (ErrorCount == 0) {
    isSubmitted = true;
  }
  if (isSubmitted == true) {
    alert("SuccessFully Submited..");
    let form = document.querySelector("form");
    form.reset();
    // window.location.reload();
  }
}
