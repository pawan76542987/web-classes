function calci(a, b, operation) {
   return operation(a, b);
}
// const compare = (a, b) => a > b;
// console.log(calci(7, 2, compare));

const compare = (a, b) => {
   return a > b ? a : b;
};
console.log(calci(7, 2, compare));