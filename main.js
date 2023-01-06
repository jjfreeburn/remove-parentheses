function removeParenth(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (!(str[i] === "(" || str[i] === ")")) result += str[i];
  }
  console.log(result);
  return result;
}
