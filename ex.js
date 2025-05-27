
var allFields = {
  fname: "",
  lname: "",
  emails: "",
  pwd: "",
  birthday: "",
  city: "",
  bio: "",
  tandc: "",
};
var allErrore = {
  fnameError: "",
  lnameError: "",
  emailsError: "",
  pwdError: "",
  birthdayError: "",
  cityError: "",
  bioError: "",
  tandcError: "",
};
function setValue(e) {
  let field = e.target.id;
  // console.log(field);
  let val = e.target.value;
  console.log(field, val)
  if (field.includes("gender")) {
    field = "gender";
    let genderVal = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;
    val = genderVal == undefined ? "" : genderVal;
  }
  allFields[field] = val;
}

// 
var str = "I have a cat, a dog, and a goat.";
var mapObj = {
  cat: "dog",
  dog: "goat",
  goat: "cat"
};
str = str.replace(/cat|dog|goat/gi, function (matched) {
  return mapObj[matched];
});

//
// function setValue(e) {
//   let field = e.target.id;
//   let val = e.target.value;
//   if (field.includes("gender")) {
//     field = "gender";
//     let genderVal = document.querySelector(
//       'input[name="gender"]:checked'
//     )?.value;
//     val = genderVal == undefined ? "" : genderVal;
//   } else if (field == "agreeTerms") {
//     val = document.getElementById(field).checked ? true : "";
//   }
//   checkError(field, val);
//   allFields[field] = val;
// }


// dates
const today = new Date().toISOString().split("T")[0];
document.getElementById("birthday").setAttribute("max", today);

// form
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  ValidityState();
});
// define validate function
const validate = () => {
  const fname = fname.value.trim();
  const lname = lname.value.trim();
  const email = email.value.trim();
  const pwd = pwd.value.trim();
  const conpwd = conpwd.value.trim();

  // validate fname
  if (fname === "") {
    setErrormsg(fname, "*name must be required");
  } else if (fname.length < 2) {
    setErrormsg(fname, "*name must be between 3 and 10 character");
  } else {
    setErrormsg(fname);
  }
};
// function setValue(e) {
//   let field = e.target.id;
//   let val = e.target.value;
//   if (field.includes('gender')) {
//     field = 'gender';
//     let genderVal = document.querySelector('input[name="gender"]:checked')?.value
//     val = genderVal == undefined ? "" : genderVal;
//   } else if (field == 'agreeTerms') {
//     val = document.getElementById(field).checked ? true : "";
//   }
//   checkError(field, val);
// }
//
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// function myFunction() {

// Eventlistener
// var errmsg = document.querySelectorAll("text-denger");
// errmsg.forEach(function (error) {
//   error.textContent = "";
// });
// var return true;

//  first name
// function myfun() {
//   let a = document.getElementById("fname").value;
//   if (a == "") {
//     document.getElementById("error").innerHTML = "*name must be required";
//     return false;
//   }
//   if (a.length < 3) {
//     document.getElementById("error").innerHTML =
//       "*name must be required 3 character";
//     return false;
//   }
//   if (a.length > 10) {
//     document.getElementById("error").innerHTML =
//       "*name must be less than 10  character";
//     return false;
//   }
//   let t = /^[A-Za-z]+$/;
//   if (a.match(t)) true;
//   else {
//     document.getElementById("error").innerHTML = "*only alphabets are allowed";
//     return false;
//   }
// }

// last name
// function myfun() {
//   let a = document.getElementById("lname").value;
//   if (a == "") {
//     document.getElementById("error2").innerHTML = "*name must be required";
//     return false;
//   }
//   if (a.length < 3) {
//     document.getElementById("error2").innerHTML =
//       "*name must be required 3 character";
//     return false;
//   }
//   if (a.length > 10) {
//     document.getElementById("error2").innerHTML =
//       "*name must be less than 10  character";
//     return false;
//   }
//   let t = /^[A-Za-z]+$/;
//   if (a.match(t)) true;
//   else {
//     document.getElementById("error").innerHTML = "*only alphabets are allowed";
//     return false;
//   }
// }

// email
// function myfun() {
//   var email = document.validation.email.value;
//   if(email.indexOf('@')<=0) {
//     document.getElementById("error3").innerHTML = "*invalid @ position";
//     return false;
//   }
//   if((email.charAt(email.length-4)!='.') && (email.charAt(a.length-3)!='.') ){
//     document.getElementById("error3").innerHTML = "*invalid . position";
//     return false;
//   }

// }

// password
function myfun() {
  let pwd = document.getElementById("pwd").value;

  if (pwd == "") {
    document.getElementById("error4").innerHTML = "* please fill password";
    return false;
  }
}

// validate.email
// function myfun() {
//   var email = document.validation.email.value;
//   if(email.indexOf('@')<=0) {
//     document.getElementById("error3").innerHTML = "*invalid @ position";
//     return false;
//   }
//   if((email.charAt(email.length-4)!='.') && (email.charAt(a.length-3)!='.') ){
//     document.getElementById("error3").innerHTML = "*invalid . position";
//     return false;
//   }

// }
// first name
// if (a.length > 10) {
//   document.getElementById("error").innerHTML =
//     "*name must be less than 10  character";
//   return false;
// }
// let t = /^[A-Za-z]+$/;
// if (a.match(t)) true;
// else {
//   document.getElementById("error").innerHTML = "*only alphabets are allowed";
//   return false;
// }

// select city
// function myfun() {
//     var city = document.myform.city.value;
//     if(city=="") {
//         document.getElementById("city").innerHTML = "*select one";
//         document.myform.city.focus();
//     }
// }

//    checkbob tickmark

function myfun() {
  //    var term= document.form.container;
  var term = document.getElementById("term").value;
  for (i = 0; i < term.length; i++) {
    if (term[i].checked == true) return true;
  }
  document.getElementById("error7").innerHTML = "please tickmark";
  return false;
}
// tickmark
function myfun() {
  var tandc = document.form.container;
  var tandc = document.getElementById("tandc").value;

  if (tandc == "") {
    document.getElementById("error7").innerHTML = "*name must be required";
    return false;
  }
}

// if (!tandc.chacked) {
//   document.getElementById("error7").innerHTML =
//     "*please agree terms and conditions";
//   return false;
// }

// birthday
function myfun() {
  var birthday = document.getElementById("birthday").value;
}
if (birthday == "") {
  document.getElementById("error5").innerHTML = "*please enter your birthday";
  return false;
}
// dynamic function step by step
// var registrationForm, elSelectGender, elGenderHint, elTerms, elTermsHint; // Declare variables
// registrationForm = document.getElementById("registrationForm"); // Store elements
// elSelectGender = document.getElementById("gender");
// elGenderHint = document.getElementById("genderHint");
// elTerms = document.getElementById("terms");
// elTermsHint = document.getElementById("termsHint");
// elName = document.getElementById("firstName");
// elNameHint = document.getElementById("nameHint");

// function checkName(event) {
//   if (elSelectGender.valueOf() == null) {
//     // If name not entered
//     elNameHint.innerHTML = "You must insert your name."; // Show message
//     event.preventDefault(); // Don't submit form
//   }
// }

function checkGender(event) {
  if (elSelectGender.valueOf() == "Select an option:") {
    // If gender not selected
    elGenderHint.innerHTML = "You must select a gender."; // Show message
    event.preventDefault(); // Don't submit form
  }
}

function checkTerms(event) {
  if (!elTerms.checked) {
    // If check-box ticked
    elTermsHint.innerHTML = "You must agree to the terms."; // Show message
    event.preventDefault(); // Don't submit form
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
registrationForm.addEventListener("submit", checkName, false);
registrationForm.addEventListener("submit", checkGender, false);
registrationForm.addEventListener("submit", checkTerms, false);

// query selector
// var errmessage = document.querySelectorall("")
// errmsg.forEach(function(error) {
//   error.textcontent = ""
// });
// var validate=true;

// return false > validate=false;

//

// validate.email;
// function myfun() {
//   var emails = document.validation.email.value;
//   if (emails.indexOf("@") <= 0) {
//     document.getElementById("error3").innerHTML = "*invalid @ position";
//     return false;
//   }
//   if (
//     emails.charAt(emails.length - 4) != "." &&
//     emails.charAt(emails.length - 3) != "."
//   ) {
//     document.getElementById("error3").innerHTML = "*invalid . position";
//     return false;
//   }
// }

// password
// function myfun() {
//   var pwd = document.getElementById("pwd").value;

//   if (pwd == "") {
//     document.getElementById("error4").innerHTML = "* please fill password";
//     return false;
//   }
//   if (pwd.length < 5 || pwd.length > 10) {
//     document.getElementById("error4").innerHTML =
//       "*name must be between 5 and 10 character";
//     return false;
//   }
// }

{
  /* <script type="text/javascript">
    function Validate() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }
</script> */
}
if (!checkbox.chacked)
  // birthday
  // function myfun() {
  //   var birthday = document.getElementById("birthday").value;

  //   if (birthday == "") {
  //     document.getElementById("error5").innerHTML = "*please enter your birthday";
  //     return false;
  //   }
  // }

  // bio
  // function myfun() {
  //   var bio = document.getElementById("bio").value;

  //   if (bio == "") {
  //     document.getElementById("error6").innerHTML = "*name must be required";
  //     return false;
  //   }
  // }

  //
  // if (emails.indexOf("@") <= 0) {
  //   document.getElementById("error3").innerHTML = "*invalid @ position";
  //   validate= false;
  // }
  // if (
  //   emails.charAt(emails.length - 4) != "." &&
  //   emails.charAt(emails.length - 3) != "."
  // ) {
  //   document.getElementById("error3").innerHTML = "*invalid . position";
  //   validate= false;
  // }

  //
  // if (fname.length < 3 || fname.length > 10) {
  //   document.getElementById("error").innerHTML =
  //     "*name must be between 3 and 10 character";
  //   // return false;
  // }
  // if (!isNaN(fname)) {
  //   document.getElementById("error").innerHTML = "*only alphabets are allowed";
  //   // return false;
  // }

  //

  // if (lname.length < 3 || lname.length > 10) {
  //   document.getElementById("error2").innerHTML =
  //     "*name must be between 3 and 10 character";
  //   // return false;
  // }
  // if (!isNaN(lname)) {
  //   document.getElementById("error2").innerHTML = "*only alphabets are allowed";
  //   // return false;
  // }

  //
  document.getElementById("myForm").addEventListener("submit", function (e) {
    const errDiv = document.getElementById("err");
    errDiv.innerHTML = "";
    const err = [];
    if (this.name.value.trim() == "") err.push("Name is empty");
    if (this.sku.value.trim() == "") err.push("SKU is empty");
    if (+this.price.value == 0) err.push("Price is empty");

    if (err.length) {
      errDiv.innerHTML = err.join("<br/>");
      e.preventDefault(); // stop submit
    }
  });

// html

//   <!-- <div class="form-group">
//   <div for="sel1">Select City :</div>

//   <select class="form-select form-select-sm" name="city" id="city">
//     <option value="">Select City</option>
//     <option value="Bilimora">Bilimora</option>
//     <option value="Navsari">Navsari</option>
//     <option value="Surat">Surat</option>
//     <option value="Valsad">Valsad</option>
//   </select>
//   <span class="text-danger" id="error8"></span>
//   <br />
// </div> -->
// <!-- gender -->
// <!-- <div class="col-sm-6 ">
//   <div for="gender">Select Gender :</div>
//   <label><input type="radio" name="optradio" checked />Male </label>

//   <label class="radio-inline">
//     <label><input type="radio" name="optradio" />Female </label>
//   </label>
//   <label class="radio-inline">
//     <label><input type="radio" name="optradio" />Other </label>
//   </label>
// </div> -->
// <!-- birthday -->
// <!-- <div class="col-sm-6">
//   <label for="birthday">Date of Birth : </label>
//   <input type="date" id="birthday" name="birthday" />
//   <span class="text-danger" id="error5"></span>
// </div>
// <br />-->

// <!-- <div class="form-group col-sm mt-4">
// <label class="control-label col-sm mt-2" for="pwd"
//   >Password :
// </label>

// <div class="col-sm-6 ">
//   <input
//     type="password"
//     class="form-control"
//     id="pwd"
//     placeholder="Enter password"
//     name="pwd"
//   />
//   <span class="text-danger" id="error4"></span>
// </div>
// </div> -->
// <!-- <br /> -->
// <!-- confirm password -->
// <!-- <div class="form-group col-sm mt-4">
// <label class="control-label col-sm mt-2" for="conpwd"
//   > Confirm Password :
// </label>

// <div class="col-sm-6">
//   <input
//     type="conpassword"
//     class="form-control"
//     id="conpwd"
//     placeholder="Confirm password"
//     name="conpwd"
//   /> -->
// <!-- <span>Enter valid password</span> -->
// <!-- <span class="text-danger"  id="error4"></span>
// </div>
// </div> -->

// <!-- <div class="form-group">
// <div class="control-label col-sm mt-2" for="email">Email :</div>
// <div class="col-sm-6">
//   <input
//     type="text"
//     class="form-control"
//     id="emails"
//     placeholder="Enter email"
//     name="emails"
//   />
//   <span class="text-danger" id="error3"></span>
// </div>
// </div>

// <div class="form-group">
// <div for="sel1">Select City :</div>

// <select
//   class="form-select form-select-sm-6"
//   name="city"
//   id="city"
// >
//   <option value="">Select City</option>
//   <option value="Bilimora">Bilimora</option>
//   <option value="Navsari">Navsari</option>
//   <option value="Surat">Surat</option>
//   <option value="Valsad">Valsad</option>
// </select>
// <span class="text-danger" id="error8"></span>
// <br />
// </div> -->



// lokesh task
// // const form = document.querySelector("form");
// // var isSubmitted = false;
// // var ErrorCount = 0;
// // var Gpass = "";
// const form = document.querySelector("form");
// var isSubmitted = false;
// var ErrorCount = 0;
// var Gpass ="";
// var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,10}$/;
// var emailvalidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
// let fValues = {
//   fname: "",
//   lname: "",
//   gender: "",
//   dateOfBirth: "",
//   email: "",
//   city: "",
//   password: "",
//   RePassword: "",
//   bio: "",
//   TandC: "",
// };
// var errorObj = {
//   fname:"Enter First name",
//   lname:"Enter Last Name",
//   gender: "Select Gender",
//   dateOfBirth: "Select Birth Date",
//   email: "Enter Email",
//   city: "Select City",
//   password: "Enter Password",
//   RePassword: "Enter RePassword",
//   bio: "Enter Bio",
//   TandC: "Agree Terms & Conditions",
// };

// let fError = {
//   fnameError: "",
//   lnameError: "",
//   genderError: "",
//   dateOfBirthError: "",
//   emailError: "",
//   cityError: "",
//   passwordError: "",
//   RePasswordError: "",
//   bioError: "",
//   TandCError: "",
// };
// let allFields = Object.keys(fError);
// let allfvalues = Object.keys(fValues);

// const today = new Date().toISOString().split('T')[0];
// document.getElementById("dateOfBirth").setAttribute("max", today);


// function seterror(id, error) {
//   fError[id] = error;
//   if (error.length > 0) {
//     if (document.getElementById(id)) {
//       document.getElementById(id).innerHTML = error;
//     }
//   } else {
//     if (document.getElementById(id + "Error"))
//       document.getElementById(id + "Error").innerHTML = error;
//   }
// }

// function validateForm(field) {
//   if (field != "form") {
//     if (field == "TandC") {
//       fValues[field] = document.getElementById(field).checked;
//       if (document.getElementById(field).checked == false) {
//         seterror(field + "Error", "Please Agree Terms & Conditions");
//       } else {
//         seterror(field, "");
//       }
//     } else if (field == "gender") {
//       document.getElementsByName("Gender").forEach((element) => {
//         if (element.checked) {
//           fValues[field] = element.value;
//           seterror(field, "");
//         }
//       });
//     }
//     else if (field == "email") {
//       fValues[field] = document.getElementById(field)?.value;
//       if(fValues[field].match(emailvalidate)) {
//         seterror(field, "");
//       }else{
//         seterror(field + "Error", "Please Enter Valid Mail");
//       }
//     }
//     else if (field == "password") {
//       fValues[field] = document.getElementById(field)?.value;
//       if (fValues[field].length < 8) {
//         seterror(field + "Error", "Password To Short");
//       } else if(fValues[field].match(regularExpression)) {
//         seterror(field + "Error", "Password Must Be Strong");

//       }else{
//         Gpass = fValues[field];
//         seterror(field, "");
//         console.log(Gpass);
//       }
//     }else if (field == "RePassword") {
//       fValues[field] = document.getElementById(field)?.value;
//       console.log( fValues[field]);
//       if (fValues[field] != Gpass) {
//         seterror(field + "Error", "Password Does't Match");
//       } else {
//         seterror(field, ""); 
//       }
//     }
//      else {
//       fValues[field] = document.getElementById(field)?.value;
//       console.log( fValues[field]);

//       if (document.getElementById(field).value == "") {
//         seterror(field + "Error", "Please Enter " + field);
//       } else {
//         seterror(field, "");
//       }
//     }
//   } else if (field == "form") {
//     allfvalues.forEach((f) => {
//       if (fValues[f] == "") {
//         seterror(f + "Error", "Please " + errorObj[f]);
//       } else {
//         seterror(f + "Error", "");
//       }
//     });

//     ErrorCount = 0;
//     isSubmitted = false;

//     allFields.forEach((f) => {
//       if (fError[f].length != 0) {
//         ErrorCount = parseInt(ErrorCount) + 1;
//       }
//     });
//     if (ErrorCount == 0) {
//       isSubmitted = true;
//     }
//     if (isSubmitted == true) {
//       alert("SuccessFully Submited");
//       window.location.reload();
//     }
//   } 

// }

// else if (field == "cpwd" && values["pwd"] == values["cpwd"]) {
//   errors[field + "Error"] = "";
// } 



{/* <Grid item xs={12} >
                        <FormControl fullWidth size="small">
                           <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={["DateField"]}>
                                 <Controller
                                    control={control}

                                    render={({ field }) => (
                                       <DatePicker
                                          label="Date of Birth"
                                          format="DD/MM/YYYY"
                                          maxDate={dayjs()}
                                          onChange={(date) => {
                                             const formattedDate = date ? dayjs(date).format("DD/MM/YYYY") : "";
                                             field.onChange(formattedDate)
                                          }}
                                          slotProps={{
                                             textField: {
                                                size: "small",
                                                fullWidth: true,
                                             },
                                          }}
                                       />
                                    )}
                                    {...register("dateOfBirth", {
                                       required: 'Enter your birthdate',
                                    })}
                                 />
                                 {errors.dateOfBirth && (
                                    <p className={styles.error}>
                                    </p>
                                 )}
                              </DemoContainer>
                           </LocalizationProvider>
                           {errors.dateOfBirth && (
                              <p className={styles.signup} me-2>
                                 {errors.dateOfBirth.message}
                              </p>
                           )}
                        </FormControl>
                     </Grid> */}
<>


  <Grid item xs={12} sm={6}>
    <FormControl fullWidth size="small">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DateField"]}
          sx={{ paddingTop: 0 }}
        >
          <Controller
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Date of Birth"
                format="DD/MM/YYYY"
                maxDate={dayjs()}
                onChange={(date) => {
                  const formattedDate = date
                    ? dayjs(date).format(
                      "DD/MM/YYYY"
                    )
                    : "";
                  field.onChange(formattedDate);
                }}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                  },
                }} />
            )}
            {...register("dateOfBirth", {
              required: "Enter your birthdate",
            })} />
          {errors.dateOfBirth && (
            <p className={styles.error}></p>
          )}
        </DemoContainer>
      </LocalizationProvider>
      {errors.dateOfBirth && (
        <p className={styles.signup} me-2>
          {errors.dateOfBirth.message}
        </p>
      )}
    </FormControl>
  </Grid></>