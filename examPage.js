// ExamPage name of student
var jsonData = JSON.parse(localStorage.getItem("registerDetail"));

var studentName = jsonData.registerDetailFirstName ;

var gettingName = document.getElementById("gettingName");
gettingName.innerHTML = "Hello, " + studentName ;



var addQuestionExam = document.getElementById("addQuestionExam");

var url = new URL(window.location.href);
var sub = url.searchParams.get("q");

var url = "https://web-exam-college.herokuapp.com/"+sub;
var obj;

var todaySubject = document.getElementById("todays-subject");
todaySubject.innerHTML="Subject : " + sub;

fetch(url)
  .then(res => res.json())
  .then(data => obj = data)

function getQuestion(){
  setTimeout(() => {
    getQuestionExam();
  }, 1500);
}

function getQuestionExam() {
    console.log(obj);
    for(var i=0; i<obj.length; i++){
        //console.log(obj[i]);
        var divQuestion = document.createElement("div");

        var question = document.createElement("h4");
        var br = document.createElement("br");

        question.innerHTML = (i+1) + " . " + obj[i].Question;
        divQuestion.appendChild(question);
        divQuestion.appendChild(br);

        // var optionQuestion1 = document.createElement("p");
        // var optionQuestion2 = document.createElement("p");
        // var optionQuestion3 = document.createElement("p");
        // var optionQuestion4 = document.createElement("p");
        // var selectedAnswer = document.createElement("input");

        // question.innerHTML = (i+1) + " . " + obj[i].Question;
        // optionQuestion1.innerHTML = "a . " + obj[i].Option1;
        // optionQuestion2.innerHTML = "b . " +obj[i].Option2;
        // optionQuestion3.innerHTML = "c . " +obj[i].Option3;
        // optionQuestion4.innerHTML = "d . " +obj[i].Option4;

        //option 1
        var inputValue = document.createElement('input');
        var labelValue = document.createElement('label');
        labelValue.innerHTML = obj[i].Option1;
        inputValue.type = "radio";
        inputValue.name = obj[i].Question;
        inputValue.value = obj[i].Option1;
        divQuestion.appendChild(inputValue);
        divQuestion.appendChild(labelValue);

        //option 2
        var inputValue2 = document.createElement('input');
        var labelValue2 = document.createElement('label');
        labelValue2.innerHTML = obj[i].Option2;
        inputValue2.type = "radio";
        inputValue2.name = obj[i].Question;
        inputValue2.value = obj[i].Option2;
        divQuestion.appendChild(inputValue2);
        divQuestion.appendChild(labelValue2);

        //option 3
        var inputValue3 = document.createElement('input');
        var labelValue3 = document.createElement('label');
        labelValue3.innerHTML = obj[i].Option3;
        inputValue3.type = "radio";
        inputValue3.name = obj[i].Question;
        inputValue3.value = obj[i].Option3;
        divQuestion.appendChild(inputValue3);
        divQuestion.appendChild(labelValue3);

        //option 4
        var inputValue4 = document.createElement('input');
        var labelValue4 = document.createElement('label');
        labelValue4.innerHTML = obj[i].Option4;
        inputValue4.type = "radio";
        inputValue4.name = obj[i].Question;
        inputValue4.value = obj[i].Option4;
        divQuestion.appendChild(inputValue4);
        divQuestion.appendChild(labelValue4);

        //Append
        
        // divQuestion.appendChild(optionQuestion1);
        // divQuestion.appendChild(optionQuestion2);
        // divQuestion.appendChild(optionQuestion3);
        // divQuestion.appendChild(optionQuestion4);
        // divQuestion.appendChild(selectedAnswer);

        addQuestionExam.appendChild(divQuestion);
    }
}

function submitAnswer(){
  var marks = 0;
  for(var i=0; i<obj.length; i++){
    var nameRadio = document.getElementsByName(obj[i].Question);
    for(var j=0; j<4; j++){
      if(nameRadio[j].checked && nameRadio[j].value == obj[i].Answer){
        marks++;
      }
    }
    //console.log(nameRadio)
  }
  var dataStudent = JSON.parse(localStorage.getItem("registerDetail"));
  console.log(dataStudent);
  const {registerDetailFirstName , registerDetailLastName,
    registerDetailPhoneNo,registerDetailLanNo,registerDetailDOB,registerDetailAddress1,registerDetailAddress2,
    registerDetailCity,registerDetailDistrict,registerDetailZip,registerDetailClass,registerDetailSection,registerDetailBatch} = dataStudent;

  var marksDataStudent = new MarksConstructor(registerDetailFirstName , registerDetailLastName,
    registerDetailPhoneNo,registerDetailLanNo,registerDetailDOB,registerDetailAddress1,registerDetailAddress2,
    registerDetailCity,registerDetailDistrict,registerDetailZip,registerDetailClass,registerDetailSection,registerDetailBatch, marks.toString());

  localStorage.setItem("registerDetail",JSON.stringify(marksDataStudent));

  window.location.href = "resultPage.html";
  //console.log(marks);
}

function MarksConstructor(registerDetailFirstName , registerDetailLastName,
  registerDetailPhoneNo,registerDetailLanNo,registerDetailDOB,registerDetailAddress1,registerDetailAddress2,
  registerDetailCity,registerDetailDistrict,registerDetailZip,registerDetailClass,registerDetailSection,registerDetailBatch, marks){
    this.registerDetailFirstName = registerDetailFirstName;
    this.registerDetailLastName = registerDetailLastName;
    this.registerDetailPhoneNo = registerDetailPhoneNo;
    this.registerDetailLanNo = registerDetailLanNo;
    this.registerDetailDOB = registerDetailDOB;
    this.registerDetailAddress1 = registerDetailAddress1;
    this.registerDetailAddress2 = registerDetailAddress2;
    this.registerDetailCity = registerDetailCity;
    this.registerDetailDistrict = registerDetailDistrict;
    this.registerDetailZip = registerDetailZip;
    this.registerDetailClass = registerDetailClass;
    this.registerDetailSection = registerDetailSection;
    this.registerDetailBatch = registerDetailBatch;
    this.marks = marks;
  }