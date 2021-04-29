/*var unArray = ["karthik", "abhi", "koli", "bharath"];
var pwArray = ["karthik123", "abhi123", "koli123", "bharath123"];*/

/*function register() {
    var un = document.getElementById("usern").value;
    var pw = document.getElementById("pword").value;
    var email = document.getElementById("email").value;
    var unArray;
    var emails = [];
    var pwArray;
    i = 0;
    unArray[i] = username;
    emails[i] = email;
    pwArray[i] = password;
    alert("congrats you have been sucessfully registered");
    i++;
    alert("Please fill the required fields in form");
}*/

function validate(a, b) {
    //var un = document.getElementById("usern").value;
    //var pw = document.getElementById("pword").value;
    //store(un, pw);
    var email = document.getElementById("email").value;
    //alert("email:" + Boolean(email))
    //alert("a:" + a)
    //alert("b:" + b)
    var register = false;
    //var error = false;
    if (email.length != 0) {
        register = true;
        email = null;
    }
    var unArray = ["karthik", "abhi", "koli", "bharath"];
    var pwArray = ["karthik123", "abhi123", "koli123", "bharath123"];
    var valid = false;
    unArray.splice(i, 0, "hi")
    pwArray.splice(i, 0, "bye")
        //alert(unArray)
        //alert(pwArray)
    i = unArray.length
    for (var i = 0; i < unArray.length; i++) {
        if ((a == unArray[i]) && (b == pwArray[i])) {
            valid = true;
            break;
        }
    }
    //alert("valid:" + valid)
    //alert("register:" + register)
    //alert("email:" + email)
    var x = ((valid) && (register))
    var y = ((a.length != 0) && (b.length != 0))
    if (x) {
        alert("Username and Password already exists please choose other credentials");
        document.getElementById("pword").value = "";
        document.getElementById("usern").value = "";
        document.getElementById("email").value = "";
    } else if ((!valid) && (!register)) {
        alert("Invalid Username and/or Password! Please try again.")
        document.getElementById("pword").value = "";
        document.getElementById("usern").value = "";
    } else if ((!valid) && (y)) {
        alert("congrats you have been sucessfully registered");
        i++;
        unArray.splice(i, 0, a);
        pwArray.splice(i, 0, b);
        //insertAt(unArray, i, a);
        //insertAt(pwArray, i, b);
        register = false;
        alert(unArray.length, unArray, pwArray)
    } else if (valid) {
        alert('You are logged in ' + a);
        location.replace("./index.html");
    }
    //You will not be able to submit this form without a successful login
}

/*function store(a, b) {
    var unArray = ["karthik", "abhi", "koli", "bharath"];
    var pwArray = ["karthik123", "abhi123", "koli123", "bharath123"];
    var valid = false;

    for (var i = 0; i < unArray.length; i++) {
        if ((a == unArray[i]) && (b == pwArray[i])) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert("You have been successfully login with user name " + un);
        window.location = "index.html";
    } else {
        alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
        document.getElementById("pword").value = "";
        document.getElementById("usern").value = "";
        document.getElementById("usern").focus();
    }
}*/