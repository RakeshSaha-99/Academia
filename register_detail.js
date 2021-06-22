function RegisterDetails (registerDetailFirstName , registerDetailLastName,
    registerDetailPhoneNo,registerDetailLanNo,registerDetailDOB,registerDetailAddress1,registerDetailAddress2,
    registerDetailCity,registerDetailDistrict,registerDetailZip,registerDetailClass,registerDetailSection,registerDetailBatch){


    this.registerDetailFirstName= registerDetailFirstName;
    this.registerDetailLastName =registerDetailLastName;
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


}



function registerDetailsSubmit(){
     console.log("Hello World");
    // event.preventDefault();
    var registerDetailFirstName = document.getElementById("regiterDetailFirstName").value
    //console.log(registerDetailFirstName);
    var registerDetailLastName= document.getElementById("registerDetailLastName").value;
    //console.log(registerDetailLastName);
    // var registerDetailEmail= document.getElementById("registerDetailEmail").value;
    // var registerDetailPassword = document.getElementById("registerDetailPassword").value;
    
    var registerDetailPhoneNo = document.getElementById("registerDetailPhoneNo").value;
    var registerDetailLanNo= document.getElementById("registerDetailLanNo").value;
    var registerDetailDOB= document.getElementById("registerDetailDOB").value;
    var registerDetailAddress1 = document.getElementById("registerDetailAddress1").value;

    var registerDetailAddress2 = document.getElementById("registerDetailAddress2").value;
    var registerDetailCity= document.getElementById("registerDetailCity").value;
    var registerDetailDistrict= document.getElementById("registerDetailDistrict").value;
    var registerDetailZip = document.getElementById("registerDetailZip").value;

    var registerDetailClass = document.getElementById("registerDetailClass").value;
    var registerDetailSection= document.getElementById("registerDetailSection").value;
    console.log(registerDetailSection)
    var registerDetailBatch= document.getElementById("registerDetailBatch").value;

    var registerDetailConstractor = new  RegisterDetails (registerDetailFirstName , registerDetailLastName,
        registerDetailPhoneNo,registerDetailLanNo,registerDetailDOB,registerDetailAddress1,registerDetailAddress2,
        registerDetailCity,registerDetailDistrict,registerDetailZip,registerDetailClass,registerDetailSection,registerDetailBatch)

    var registerDetailJsonData = JSON.stringify(registerDetailConstractor);
    
    //e.preventDefault()
    if(registerDetailFirstName == "" || registerDetailLastName == ""||
        registerDetailPhoneNo == ""||registerDetailLanNo == ""||registerDetailDOB == ""||registerDetailAddress1==""||registerDetailAddress2==""||
        registerDetailCity == ""||registerDetailDistrict == ""||registerDetailZip == ""||registerDetailClass == ""||registerDetailSection == ""||registerDetailBatch == ""){
            alert("something is wrong");
            e.preventDefault();
        } 
    else {
        //e.preventDefault()
        localStorage.setItem("registerDetail",registerDetailJsonData);
        console.log(registerDetailJsonData);
        fetch('https://web-exam-college.herokuapp.com/student', {
            method: 'post',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(registerDetailConstractor)
        })
        .then(response => console.log(response))
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        alert("Success");
        window.location.href = "login.html";
    }

}


document.getElementById("formDetailRegister").addEventListener("click", function(event){
    event.preventDefault()
});