var url = "https://web-exam-college.herokuapp.com/teacher";
var obj;

fetch(url)
  .then(res => res.json())
  .then(data => obj = data)

function funcTeacherLogin(){
    var loginTeacherEmail = document.getElementById("loginTeacherEmail").value;
    var loginTeacherPassword = document.getElementById("loginTeacherPassword").value;
    var f=0;
    for(var i=0; i<obj.length; i++){
        if(obj[i].email == loginTeacherEmail && obj[i].password == loginTeacherPassword){
            f=1;
            alert("Login Successful");
            break;
        }
    }
    if(f==1){
        //alert("Success");
        window.location.href = "questionType.html";
    } else {
        event.preventDefault()
        alert("Not Correct");
    }
}

document.getElementById("btn-control").addEventListener("click", function(event){
    event.preventDefault()
});