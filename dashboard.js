function startExamButton(){
    var selectedSubject = document.getElementById("subject-choose").value;
    window.location.href = "examPage.html?q="+selectedSubject;
    //console.log(selectedSubject);
}