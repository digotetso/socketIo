const moment = require('moment');

var date = moment()
var yest = moment([2018, 3, 7])
console.log(date.format())
console.log(date.format('h:mm A')) 
console.log(date.format('LL'))
console.log(date.format('Z'))
console.log(date.format('LT'))
console.log(yest.from(date))