function funcTeacherLogin(){
    var loginTeacherEmail = document.getElementById("loginTeacherEmail").value;
    var loginTeacherPassword = document.getElementById("loginTeacherPassword").value;
    var f=0;
    if (loginTeacherEmail=='admin' && loginTeacherPassword=='12345')
    {

        alert("Success");
        window.location.href = "teacherHandle.html";
    }
    else {
        event.preventDefault()
        alert("Not Correct");
    }
}

document.getElementById("btn-control").addEventListener("click", function(event){
    event.preventDefault()
});