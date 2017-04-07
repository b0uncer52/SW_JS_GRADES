var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var fCount = 0, dCount = 0, cCount = 0, bCount = 0, aCount = 0;
var lowest = 100;
var highest = 0;
for (var i = 0; i < scores.length; i++) {
	var score = scores[i];
	if(score > 90) {
		aCount++;
	}else if(score > 80) {
		bCount++;
	}else if(score > 70) {
		cCount++;
	}else if(score > 60) {
		dCount++;
	}else {
		fCount++;
	}
	if(score > highest){
		highest = score;
	}
	if(score < lowest) {
		lowest = score;
	}
}

console.log("A's: " + aCount)
console.log("B's: " + bCount)
console.log("C's: " + cCount)
console.log("D's: " + dCount)
console.log("F's: " + fCount)
console.log("Highest grade: " + highest);
console.log("Lowest grade: " + lowest);