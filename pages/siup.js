const addUs = () => {
  // first name has to be 2-20 letters
  let firstName = document.forms["form_ConfirmSign"]["firstname"].value;
  if (firstName.length <= 2 || firstName.length >= 20) {
    alert("Error, first name needs to be between 2-20 letters");
    return false;
  }
  // last name has to be 2-20 letters
  let lastName = document.forms["form_ConfirmSign"]["lastname"].value;
  if (lastName.length <= 2 || lastName.length >= 20) {
    alert("Error, last name needs to be between 2-20 letters");
    return false;
  }
  // email has to include @ and be Gmail/Yahoo
  let email = document.forms["form_ConfirmSign"]["ema"].value;
  if (email.indexOf("@yahoo") == -1 && email.indexOf("@gmail") == -1) {
    alert("Error, Email not valid");
    return false;
  }
  // password needs to include spacial symbols and be 2-10 charcters
  let pass = document.forms["form_ConfirmSign"]["Password"].value;
  if (pass.length <= 2 || pass.length >= 10 && pass.indexOf('!'-'/') ==-1) {
    alert(
      "Error, Password needs to be between 2-10 letters and include a spacial symbol"
    );
    return false;
  }
  // password conformation needs to match password
  let conpass = document.forms["form_ConfirmSign"]["cPassword"].value;
  if (conpass != pass) {
    alert("Error, passwords dont match");
    return false;
  }
  return true;
};
// checkbox shows password
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var x = document.getElementById("cpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }