var authState = JSON.parse(localStorage.getItem("auth"));
var studentDetails = JSON.parse(localStorage.getItem("registerDetail"));

console.log(authState, studentDetails.registerDetailFirstName)

if(authState.auth==true){
    document.querySelector("#checkLogin").innerHTML = studentDetails.registerDetailFirstName;
    document.querySelector("#checkRegister").innerHTML = "Logout";
}

function registerLogout(){
    var registerContent = document.querySelector("#checkRegister").innerHTML;
    console.log("P",registerContent)


    if(registerContent=="Logout"){
        localStorage.clear();
        window.location.reload();
    } 
    else {
        window.location.href = "https://github.com/RakeshSaha-99/Academia/blob/d43adc3e8e8f0a8862b16aa8ddc59e49af18c864/register.html";
    }
}
