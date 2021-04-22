str1 = "Qmail2gmail.com";
str2 = "Qmail2@gmail.com";
regExp1 = /@/;
regExp2 = /gmail/;
regExp3 = /\.com/;

function checkEmail(str) {
  alert(regExp1.test(str) && regExp2.test(str) && regExp3.test(str));
}

checkEmail(str1);
checkEmail(str2);
