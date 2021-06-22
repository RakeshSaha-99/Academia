

function QuestionSubmit(){
    var SubjectAdd = document.getElementById("SubjectAdd").value;
    var QuestionAdd = document.getElementById("QuestionAdd").value;
    var Option1Add = document.getElementById("Option1Add").value;
    var Option2Add = document.getElementById("Option2Add").value;
    var Option3Add = document.getElementById("Option3Add").value;
    var Option4Add = document.getElementById("Option4Add").value;
    var Answer = document.getElementById("Answer").value;
    //console.log(Option1Add, QuestionAdd, SubjectAdd, Answer);

    if(SubjectAdd == "math"){
        var SubjectAddDetail = "Maths";
    } else if(SubjectAdd == "gk" ) {
        var SubjectAddDetail = "General Knowledge";
    } else if(SubjectAdd == "english"){
        var SubjectAddDetail = "English"
    }

    var addQuestionDetails = new QuestionAddConstructor(SubjectAddDetail, QuestionAdd, Option1Add, Option2Add, Option3Add, Option4Add, Answer);
    console.log(JSON.stringify(addQuestionDetails));
    fetch('https://web-exam-college.herokuapp.com/'+SubjectAdd, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addQuestionDetails),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}

function QuestionDelete(){
    var QuestionId = document.getElementById("QuestionId").value;
    var SubjectAdd = document.getElementById("SubjectDelete").value;
    console.log(SubjectAdd, QuestionId);
    fetch('https://web-exam-college.herokuapp.com/' + SubjectAdd + "/" + QuestionId, {
        method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
}

function QuestionAddConstructor(SubjectAddDetail, QuestionAdd, Option1Add, Option2Add, Option3Add, Option4Add, Answer){
    this.Subject = SubjectAddDetail;
    this.Question = QuestionAdd;
    this.Option1 = Option1Add;
    this.Option2 = Option2Add;
    this.Option3 = Option3Add;
    this.Option4 = Option4Add;
    this.Answer = Answer;
}