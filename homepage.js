/**

* Code for form validation adapted from
* https://www.youtube.com/watch?v=In0nB0ABaUk&ab_channel=WebDevSimplified
* https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

* The form validation works by firstly storing all aspects of the form as variable. 
* Upon submission by user, it checks that each field is filled out correctly. If 
* any of them are not filled correctly, it will add a message to the variable "errorStr", 
* alert the user of the error and prevent them from submitting. 

* Accessed: 14 June, 2023

*/

$(document).ready(function () {
  $("#form").submit(async function (e) {
    e.preventDefault();
    const emailValue = $("#email").val();
    const nameValue = $("#name").val();
    const messageValue = $("#message").val();

    let errorStr = "";
    if (nameValue === "") {
      errorStr += "Name is required. ";
    }

    const API_KEY = "a580439c4fee4a93a15998a304f4c910";
    const API_URL = "https://emailvalidation.abstractapi.com/v1/?api_key=" + API_KEY;

    const sendEmailValidationRequest = async (emailAddress) => {
      const apiURL = new URL(API_URL);
      apiURL.searchParams.append("email", emailAddress);
      const apiResponse = await fetch(apiURL.toString());
      const data = await apiResponse.json();

      const isValid = data.is_valid_format.value;
      return isValid;
    };

    if (emailValue === "") {
      errorStr += "Email is required. ";
    } else {
      const isValid = await sendEmailValidationRequest(emailValue);
      if (!isValid) errorStr += "Please enter a valid email. ";
    }

    if (messageValue === "") {
      errorStr += "Message is required. ";
    }

    if (errorStr) {
      $("#error").text(errorStr);
      alert(errorStr);
    } else {
      e.currentTarget.submit();
    }
  });
});
