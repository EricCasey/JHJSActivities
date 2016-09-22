function maxProfit (ticker) {
  var min = Math.min(...ticker);
  var max = Math.max(...ticker);
  var sorted = ticker.sort();
  console.log(min, max, sorted);
  

};


maxProfit([45, 24, 35, 31, 40, 38, 11])
 //should return $16 from 24 to 40
