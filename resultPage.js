var jsonData = JSON.parse(localStorage.getItem("registerDetail"));

var studentName = jsonData.registerDetailFirstName + " " + jsonData.registerDetailLastName;
var marks = jsonData.marks;

var greetingResult = document.getElementById("greetingResult");
greetingResult.innerHTML = studentName + ", Result of your today's exam";

var percentResult = document.getElementById("percentResult");
percentResult.innerHTML = " Congraulation - you got " +  ((marks/20)*100) + "% marks";

var marksResult = document.getElementById("marksResult");
marksResult.innerHTML = "Total You got " + marks + " out of 20";