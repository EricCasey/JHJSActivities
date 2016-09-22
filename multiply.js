function multiply (num) {
  return function(num2) {
    console.log(num * num2)
    return num * num2
  }
}
