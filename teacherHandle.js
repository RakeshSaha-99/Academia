function TeacherSubmit(){
    var firstNameAdd = document.getElementById("firstNameAdd").value;
    var lastNameAdd = document.getElementById("lastNameAdd").value;
    var emailAdd = document.getElementById("emailAdd").value;
    var genderAdd = document.getElementById("genderAdd").value;
    var passwordAdd = document.getElementById("passwordAdd").value;

    //console.log(Option1Add, QuestionAdd, SubjectAdd, Answer);

    var addTeacherDetails = new TeacherAddConstructor(firstNameAdd, lastNameAdd, emailAdd, genderAdd, passwordAdd);
    console.log(JSON.stringify(addTeacherDetails));
    fetch('https://web-exam-college.herokuapp.com/teacher', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addTeacherDetails),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}

function TeacherDelete(){
    var TeacherId = document.getElementById("TeacherId").value;
    
    fetch('https://web-exam-college.herokuapp.com/teacher/' + TeacherId, {
        method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
}

function TeacherAddConstructor(firstNameAdd, lastNameAdd, emailAdd, genderAdd, passwordAdd){
    this.first_name = firstNameAdd;
    this.last_name = lastNameAdd;
    this.email = emailAdd;
    this.gender = genderAdd;
    this.passwordAdd = passwordAdd;
}