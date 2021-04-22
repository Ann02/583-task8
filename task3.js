let str = "cdbBdbsbz";
let regExp1 = /db+d/gi;
let regExp2 = /db+/gi;

function findPattern(str) {
  let result1 = str.match(regExp1);
  let result2 = str.match(regExp2);
  console.log(result1);
  console.log(result2);
}

findPattern(str);
