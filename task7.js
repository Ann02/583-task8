let regExp1 = /\d\.\d|\d+/g;
let regExp2 = /^\d/;
let regExp3 = /[^\w\.]/gi;
let regExp4 = /_/g;

function check(login) {
  if (
    login.length < 2 ||
    login.length > 10 ||
    regExp2.test(login) ||
    regExp3.test(login) ||
    regExp4.test(login)
  ) {
    console.log("false");
  } else {
    console.log("true");
  }
  console.log(login.match(regExp1));
}
check("ee1.1ret3");
check("ee1*1ret3");
