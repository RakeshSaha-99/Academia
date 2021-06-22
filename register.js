function Register (emailRegister, passwordRegister, confirmEmailRegister, confirmPasswordRegister){
    this.emailRegister = emailRegister;
    this.passwordRegister = passwordRegister;
    this.confirmEmailRegister = confirmEmailRegister;
    this.confirmPasswordRegister = confirmPasswordRegister;
}

function funcRegister(){
    var emailRegister = document.getElementById("emailRegister").value;
    var passwordRegister = document.getElementById("passwordRegister").value;
    var confirmEmailRegister = document.getElementById("confirmEmailRegister").value;
    var confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;
    //console.log(emailRegister, passwordRegister, confirmEmailRegister, confirmPasswordRegister);
    //console.log("Clicked");
    if(emailRegister==confirmEmailRegister && passwordRegister==confirmPasswordRegister){
        //alert("Registered Successful");
        console.log("success")
        var registerData = new Register (emailRegister, passwordRegister, confirmEmailRegister, confirmPasswordRegister);
        console.log(registerData);
        //console.log(JSON.stringify(registerData));
        localStorage.setItem("Registration",JSON.stringify(registerData));
        window.location.href = "register_detail.html";
        //e.preventDefault()
    } else {
        alert("Something is Wrong There")
        e.preventDefault(); 
    }
    
}
document.getElementById("formRegister").addEventListener("click", function(event){
    event.preventDefault()
});
