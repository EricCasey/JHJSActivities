function map(arr, cb) {
var result = [];
  for (var i = 0; i < arr.length; i++) {
    var current = cb(arr[i]);
    result.push(current);
  }
console.log(result)
}
map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
