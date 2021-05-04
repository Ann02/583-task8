let card = "9999-9999-9999-9999";
let regExp1 = /\d{4}-/g;
let regExp2 = /-\d{4}/g;
let regExp3 = /[^\d-]/;

function checkCard(str) {
  if (regExp3.test(str)) {
    alert("Not correct");
    return;
  }

  let arr = str.match(regExp1);
  let size;
  if (arr == null) {
    size = 0;
  } else size = arr.length;

  let arr2 = str.match(regExp2);
  let size2;
  if (arr2 == null) {
    size2 = 0;
  } else size2 = arr2.length;

  if (size == 3 && size2 == 3) {
    alert("Correct");
  } else {
    alert("Not correct");
  }
}
checkCard(card);
