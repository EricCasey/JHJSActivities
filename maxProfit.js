function maxProfit(ticker) {

  var buyMargins = {};
  for (var i = 0; i <= ticker.length - 1; i += 1) {
    var currentIndex = i;
    var currentBuy = ticker[i]
    buyMargins[currentBuy] = [];
    for (var b = i + 1; b <= ticker.length - 1; b += 1) {
      var difference = ticker[b] - ticker[currentIndex];
      buyMargins[currentBuy].push(difference);
    }
  } // end of looping thru ticker
  var allMaxMargins = [];
  for (buys in buyMargins) {
    var currentMax = Math.max(...buyMargins[buys])
    if (currentMax > 1) {
      allMaxMargins.push(currentMax)
    }
  }
  var profits = allMaxMargins.sort()
  return allMaxMargins[0]
};
maxProfit([45, 24, 35, 31, 40, 38, 11])
  //should return $16 from 24 to 40
