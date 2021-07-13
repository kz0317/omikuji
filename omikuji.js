var username;
var username2;
var userresult;

username = prompt("お名前を教えて下さい。","");
username2 = "名無し"

if(username == ""){
    document.getElementById("name").innerHTML = username2;
}else{document.getElementById("name").innerHTML = username;}


var rand = Math.floor( Math.random() * 5) ;

if (rand == 0) {
    userresult = "大吉";
  }

  if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }

  document.getElementById("result").innerHTML = userresult;


  