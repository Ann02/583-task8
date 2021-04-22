let regExp = /^[A - Z]/;
str1 = "Abcdef";
str2 = "abcdef";

function upperCase(str) {
  if (regExp.test(str)) {
    alert("String's starts with uppercase character");
  } else {
    alert("String's not starts with uppercase character");
  }
}

upperCase(str1);
upperCase(str2);
