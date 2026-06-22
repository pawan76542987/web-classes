function totalMarks (a, b, c) {
    const total = a + b + c;
    return total;
}
function averageMarks (total) {
    const average = total/ 3;
    return average;
}
function isPassed (average) {
    if (average >= 40) return true;
    else return false;
}
module.exports = {totalMarks, averageMarks, isPassed};