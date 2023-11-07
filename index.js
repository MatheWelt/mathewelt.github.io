var num_1 = 1;
var num_2 = 1;
var sign = 1;
var sign_string = "";
document.getElementById("num_1").innerHTML = num_1.toString();
document.getElementById("num_2").innerHTML = num_2.toString();
if (sign == 1) {
  sign_string = " + "
}
if (sign == 2) {
  sign_string = " - "
}
if (sign == 3) {
  sign_string = " / "
}
if (sign == 4) {
  sign_string = " * "
}
document.getElementById("sign").innerHTML = sign_string;
