function check() {
    var name = document.inpform.name.value;
    var dob = document.inpform.dob.value;
    var gender = document.inpform.gender.value;
    var qualification = document.inpform.qualify.value;
    var mark = document.inpform.marks.value;
    var grade = document.inpform.grade.value;
    var eng = document.inpform.eng.checked;
    var tam = document.inpform.tam.checked;
    var hin = document.inpform.hin.checked;
    var tel = document.inpform.tel.checked;
    var mal = document.inpform.mal.checked;
    var kan = document.inpform.kan.checked;
    var urdu = document.inpform.urdu.checked;
    var fre = document.inpform.fre.checked;
    var address = document.inpform.addre.value;
    var contact = document.inpform.mobile.value;
    var email = document.inpform.mail.value;
    var date = new date();
    var day = date.getday();
    var month = date.getmonth();
    var year = date.getfullyear();
    var diff = date - dob;
    var age = (diff / 1000 * 24 * 60 * 60);
    var letters = /^[A-Za-z]{3,20}$/;
    var pattern = /^?(\d){3}?[.]?(\d){2}$/;
    var filter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[/#-.])$/;
    var tele = /^(\d){10}$/;
    if (name == "") {
        alert("This field should not be empty");
        return false;
    }
    else if (!(letters).test(name)) {
        alert("This field conditions are restricted");
        return false;
    }
    else if (dob == "") {
        alert("This field should not be empty");
        return false;
    }
    else if (gender == "") {
        alert("This field should not be empty , Choose one!");
        return false;
    }
    else if (qualification == "") {
        alert("This field should not be empty , Choose one!");
        return false;
    }
    else if (mark == "") {
        alert("This field should not be empty");
        return false;
    }
    else if (!(pattern).test(mark)) {
        alert("This field conditions are restricted");
        return false;
    }
    else if (grade == "") {
        alert("This field should not be empty");
        return false;
    }
    else if (address == "") {
        alert("This field should not be empty");
        return false;
    }
    else if (!(filter).test(address)) {
        alert("This field conditions are restricted");
        return false;
    }
    else if (contact == "") {
        alert("This field should not be empty");
        return false;
    }
    else if (!(tele).test(contact)) {
        alert("This field conditions are restricted");
        return false;
    }
    else if (email == "") {
        alert("This field should not be empty");
        return false;
    }
    else {
        alert("Form Submitted!!");
    }
    document.write("<h1><center><b>CANDIDATE DETAILS</b></center></h1>");
    document.write("<br><br>");
    document.write(" <b> Candidate name : </b> " + name);
    document.write("<br><br>");
    document.write(" <b> Date of Birth : </b> " + dob);
    document.write("<br><br>");
    document.write(" <b> Age : </b> " + age);
    document.write("<br><br>");
    document.write(" <b> Gender : </b> " + gender);
    document.write("<br><br>");
    document.write(" <b> Qualification : </b> " + qualification);
    document.write("<br><br>");
    document.write(" <b> Marks Scored : </b> " + mark);
    document.write("<br><br>");
    document.write(" <b> Grade : </b> " + grade);
    document.write("<br><br>");
    document.write(" <b> Languages Known : </b> ");
    if (eng) {
        document.write("English");
    }
    document.write(" , ");
    if (tam) {
        document.write("Tamil");
    }
    document.write(" , ");
    if (hin) {
        document.write("Hindi");
    }
    document.write(" , ");
    if (tel) {
        document.write("Telugu");
    }
    document.write(" , ");
    if (mal) {
        document.write("Malayalam");
    }
    document.write(" , ");
    if (kan) {
        document.write("Kannada");
    }
    document.write(" , ");
    if (urdu) {
        document.write("Urdu");
    }
    document.write(" , ");
    if (fre) {
        document.write("French");
    }
    document.write(" , ");
    document.write("<br><br>");
    document.write(" <b> Address : </b> " + address);
    document.write("<br><br>");
    document.write(" <b> Contact number : </b> " + contact);
    document.write("<br><br>");
    document.write(" <b> Email ID : </b> " + email);
    document.write("<br><br>");
}
