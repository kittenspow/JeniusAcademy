function validateForm() {
    var fname = document.getElementById('fname');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var pass = document.getElementById('pass');
    var passC = document.getElementById('passC');
 
    // validate first name
    if (fname.value.length < 1){
        alert("First name must be filled out");
    }
    
    // validate surname
    else if (surname.value.length < 1){
        alert("Surname must be filled out");
    }

    // validate email
    else if (email.value.length < 1){
        alert("Email must be filled out");
    }
    // if the email has to be gmail
    // else if(!email.value.endsWith("@gmail.com")){
    //     alert("Input a valid email address");
    // }
    else if (!validateEmail(email.value)){
        alert("Input a valid email address");
    }

    // validate phone number
    else if(phone.value.length < 1){
        alert("Phone number must be filled out");
    }
    else if(phone.value.length < 10 || phone.value.length > 13){
        alert("Input a valid phone number");
    }

    // validate password
    else if(passC.value.length < 1){
        alert("Password must be filled out");
    }
    else if(pass.value.length < 8){
        alert("Password should be at least 8 characters");
    }
    else if(passC.value.length < 1){
        alert("Password confirmation must be filled out");
    }

    // validate password and password confirmation
    else if(pass.value !== passC.value){
        alert("Passwords do not match");
    }
    else {
        alert("Registration Successful. Welcome to JeniusAcademy!");
    }
}

// validate email
function validateEmail(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");
    let dotSymbol = emailAddress.lastIndexOf(".");
    let spaceSymbol = emailAddress.indexOf(" ");

    if ((atSymbol != -1) && 
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        (dotSymbol > atSymbol + 1) &&
        (emailAddress.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
        return true;
    } else {
        return false;
    }
}