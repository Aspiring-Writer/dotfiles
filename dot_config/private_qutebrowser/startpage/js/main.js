var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var time = hour + ":" + min;

// Greeting
function printGreeting(){
  if (time > "07:00" && time < "08:59"){
    var greeting = "You're up early, good job";
  }
  if (time > "09:00" && time < "11:59"){
    var greeting = "Let's make today a great day!";
  }
  if (time > "12:00" && time < "16:59"){
    var greeting = "Good Afternoon";
  }
  if (time > "17:00" && time < "19:59"){
    var greeting = "Good Evening";
  }
  if (time > "20:00" && time < "22:59"){
    var greeting = "It's time to wrap up for the day";
  }
  if (time > "23:00" && time < "06:59"){
    var greeting = "It's too late, time to get some sleep";
  }
  document.querySelector('.greeting').innerHTML = greeting;
}
printGreeting();

// Date
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function printDate(){
	var today = date.getDay();
	var weekday = days[today];
	var month = months[date.getMonth()];
	var day = date.getDate();
	if(min<10){
		var min = "0" + min;
	}
	document.querySelector('.date').innerHTML = weekday + ", " + month + " " + day + "," + " " + time;
	setTimeout(printTime,1000);
}
printDate();

// Search Form
const f = document.getElementById('form');
const q = document.getElementById('query');
const search_engine = 'https://www.startpage.com/sp/search?query=';

function submitted(event) {
  event.preventDefault();
  const url = search_engine + q.value;
  const win = window.open(url);
  win.focus();
}

f.addEventListener('submit', submitted);