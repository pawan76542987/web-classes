function counter () {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
let anushka = counter();
anushka();
anushka();

let singh = counter();
singh();
singh();