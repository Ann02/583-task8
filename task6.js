let regExp1 = /[^\w@\.-]/g;
let regExp2 = /^-|^_/;
let regExp3 = /-/g;

function checkEmail(email) {
  let size;
  let array = email.match(regExp3);
  if (array == null) {
    size = 0;
  } else size = array.length;

  if (size > 1) {
    alert("Email isn`t correct!");
    return;
  }

  if (regExp1.test(email) || regExp2.test(email)) {
    alert("Email isn`t correct!");
  } else {
    alert("Email is correct!");
  }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");
