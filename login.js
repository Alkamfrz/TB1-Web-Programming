function checkForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "" || password == "") {
    document.getElementById("submit").style.backgroundColor = "#60adde";
    document.getElementById("submit").style.transition = "0.5s";
    document.getElementById("submit").style.cursor = "not-allowed";
  } else {
    document.getElementById("submit").style.backgroundColor = "#003366";
    document.getElementById("submit").style.transition = "0.5s";
    document.getElementById("submit").style.cursor = "pointer";
    }
}