function display () {
    let a = 90;
    let b = 10;
    let sum = () => {
        console.log(a + b);
        return a * b;
    }
    return sum;
}
let ans = display();
console.log(ans);
ans();