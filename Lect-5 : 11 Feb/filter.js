let arr = [18, 23, 4, 2];
let ans = arr.filter((element, index, arr)=> {
    // console.log(element, index, arr);
    if (element >= 18) return true;
    else 
        return false;
});
console.log(ans);