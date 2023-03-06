function validate() {
    var username = document.login.uname.value;
    var password = document.login.passwd.value;
    var cmpassword = document.login.cnfmpasswd.value;
    var pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%&*-]){8,12}/;
    var letters = /^[A-Za-z]+$/;
    if (username == "") {
        alert("Username should not be blank");
        return false;
    }
    else if (!(letters).test(username)) {
        alert("Restricted Coditions of Username");
        return false;
    }
    else if (password == "") {
        alert("Password should not be blank");
        return false;
    }
    else if (cmpassword == "") {
        alert("Confirm Password should not be blank");
        return false;
    }
    else if (!(pass_expression).test(password)) {
        alert("Restricted Coditions of Password");
        return false;
    }
    else if (password != cmpassword) {
        alert("Passwords must match");
        return false;
    }
    else {
        alert("Everything is perfect");
    }
    alert("Thank you for Signing");
    document.write("<h1><center>User_Login Details</center></h1>");
    document.write("<br><br>")
    document.write(" <b> Hello Mr.<b>" + username);
    document.write("<br><br>")
    document.write("<h1><center>You are Signed-In Successfully!!</center></h1>")
}