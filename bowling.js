function Bowling(Array) {
this.score = function() {
var sum = 0;
for (i=0; i<Array.length; i++) {
sum += Array[i];
}
return sum;
}
}

module.exports = Bowling;
