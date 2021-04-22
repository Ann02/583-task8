let card = "9999-9999-9999-9999";
let regExp1 = /\d{4}-/g;
let regExp2 = /-\d{4}/g;
let regExp3 = /[^\d-]/;

function checkCard(str) {
  alert(regExp1.test(str) && regExp2.test(str) && regExp3.test(str));
}
checkCard(card);
