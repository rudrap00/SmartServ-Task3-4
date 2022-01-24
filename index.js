function validate() {
    var user = document.myForm.user.value;
    var pass = document.myForm.pass.value;
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var address = false;
    var password = false;

    address = user.match(format);
    password = (pass == "SmartServTest@123");

    if(address && password){
        document.getElementById("myForm").action = "dashboard.html";
        return true;
    }
        
    else{
        alert("Error: Wrong Password or Username");
        return false;
    }

}