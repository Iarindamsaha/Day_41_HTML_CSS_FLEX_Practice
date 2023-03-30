function validate(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    
    if(username == "admin" && password == "hello"){
        alert("Login Successful");
        return true;
    }

    else{
        alert("Incorrect Information");
    }

}