var values = {
  fname: "",
  lname: "",
  emails: "",
  pwd: "",
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
  birthdayError: "",
  cityError: "",
  bioError: "",
  tandcError: "",
};

const emailsRegex = /^\S+@\S+\.\S+$/;
function setValue(e) {
  let field = e.target.id;
  let val = e.target.value;
  console.log(field,val)
  if (field == "tandc") {
    val = document.getElementById(field).checked ? true : "";
  }
  checkError(field, val);
}

function checkError(field, val) {
  values[field] = val;
  if (values[field] == "") {
    errors[field + "Error"] = field + " is required";
  } else if (field == "emails" && !emailsRegex.test(val)) {
    errors[field + "Error"] = "Invalid " + field;
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

function submit() {
  let allField = Object.keys(values);
  allField.forEach((field) => {
    checkError(field, values[field]);
  });
}

function myfun() {
  // first name
  var fname = document.getElementById("fname").value.trim();
  if (fname == "") {
    document.getElementById("error").innerHTML = "*name must be required";
    // return false;
  } else if (fname.length < 3 || fname.length > 10) {
    document.getElementById("error").innerHTML =
      "*name must be between 3 and 10 character";
    // return false;
  } else if (!isNaN(fname)) {
    document.getElementById("error").innerHTML = "*only alphabets are allowed";
    // return false;
  } else {
    document.getElementById("error").innerHTML = "";
  }

  // last name
  var lname = document.getElementById("lname").value.trim();
  if (lname == "") {
    document.getElementById("error2").innerHTML = "*name must be required";
    // return false;
  } else if (lname.length < 3 || lname.length > 10) {
    document.getElementById("error2").innerHTML =
      "*name must be between 3 and 10 character";
    // return false;
  } else if (!isNaN(lname)) {
    document.getElementById("error2").innerHTML = "*only alphabets are allowed";
    // return false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  // email
  var emails = document.getElementById("emails").value.trim();
  if (emails == "") {
    document.getElementById("error3").innerHTML = "* please enter email";
    // return false;
  } else if (emails.indexOf("@") <= 0) {
    document.getElementById("error3").innerHTML = "*invalid @ position";
    // return false;
  } else if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("error3").innerHTML = "*invalid . position";
    // return false;
  } else {
    document.getElementById("error3").innerHTML = "";
  }
  //select city
  var city = document.getElementById("city").value;
  if (city == "") {
    document.getElementById("error8").innerHTML = "*select  your city";
    // return false;
  } else {
    document.getElementById("error8").innerHTML = "";
  }

  // passwd
  var pwd = document.getElementById("pwd").value.trim();
  if (pwd == "") {
    document.getElementById("error4").innerHTML = "* please fill password";
    // return false;
  } else if (pwd.length < 5 || pwd.length > 10) {
    document.getElementById("error4").innerHTML =
      "*passwd must be between 5 and 10 character";
    // return false;
  } else {
    document.getElementById("error4").innerHTML = "";
  }

  // confirm passwd
  var conpwd = document.getElementById("conpwd").value.trim();
  if (conpwd == "") {
    document.getElementById("error9").innerHTML = "* please fill password";
    // return false;
  } else if (pwd != conpwd) {
    document.getElementById("error9").innerHTML = "* Passwords do not match.";
    // return false;
  } else {
    document.getElementById("error9").innerHTML = "";
  }

  // birthday
  var birthday = document.getElementById("birthday").value;
  if (birthday == "") {
    document.getElementById("error5").innerHTML = "*please enter your birthday";
    // return false;
  } else {
    document.getElementById("error5").innerHTML = "";
  }

  // bio
  var bio = document.getElementById("bio").value.trim();
  if (bio == "") {
    document.getElementById("error6").innerHTML = "*please write comments";
    // return false;
  } else {
    document.getElementById("error6").innerHTML = "";
  }

  // tickmark
  var tandc = document.getElementById("tandc");
  if (!tandc.checked == true) {
    document.getElementById("error7").innerHTML =
      "*please agree terms and conditions";
  } else {
    document.getElementById("error7").innerHTML = "";
  }
  return true;
}
// dates
const today = new Date().toISOString().split("T")[0];
document.getElementById("birthday").setAttribute("max", today);
