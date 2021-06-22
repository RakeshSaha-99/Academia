function funcLogin(){
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById('loginPassword').value;

    var loginData = localStorage.getItem("Registration");
    var loginLocalstorage = JSON.parse(loginData);
    console.log(loginLocalstorage);

    localStorage.setItem("auth", JSON.stringify({auth: true}));

    if(loginEmail == loginLocalstorage.emailRegister && loginPassword == loginLocalstorage.passwordRegister){
        alert("Login Successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Login Error")
        event.preventDefault()
    }
}
document.getElementById("formInput").addEventListener("click", function(event){
    event.preventDefault()
});