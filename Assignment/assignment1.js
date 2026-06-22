// let arr = [];
// arr.city = "Delhi";
// for (let key in arr) {
//     console.log(key);
// }

// let arr = [3, 4, 6, 2, 7];
// let lsf = arr[0];
// for (let i = 1; i <= 5; i++) {
//     if (arr[i] > lsf) {
//         lsf = arr[i];
//     }
// }
// console.log(lsf);

// let brr = [2, 3, 5, 1, 7];
// let smallest = brr[0];
// for (let i = 1; i <= 5; i++) {
//     if (brr[i] < smallest) {
//         smallest = brr[i];
//     }
// }
// console.log(smallest);

// let arr = [1, 2, 3, 4, 5];
// let left = 0; 
// let right = arr.length - 1;
// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }
// console.log(arr);

// let arr = [1, 2, 3, 4];
// let isSorted = true;
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false;
//     }
// }
// console.log(isSorted);

// let arr = [1, 2, 3, 4];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }
// console.log(even);
// console.log(odd);

// let arr = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let arr = [1, 2, 3, 4];
// console.log(arr.indexOf(2));

// let arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
// let unique = {};
// for (let i = 0; i < arr.length; i++) {
//     if (unique[arr[i]]) {
//         unique[arr[i]]++;
//     }
//     else {
//         unique[arr[i]] = 1;
//     }
// }
// console.log(unique);

// let arr = [2, 2, 4, 5, 4, 5, 6, 1];
// arr.sort((a, b) => a - b);
// let i = 0;
// for (let j = 0; j < arr.length; j++) {
//     if (arr[i] != arr[j]) {
//         i++;
//         arr[i] = arr[j];
//     }
// } 
// let unique = arr.slice(0, i + 1);
// console.log(unique);

// let arr = [1, 2, 3, 3, 4, 5];
// let idx = arr.indexOf(4);
// if (idx != -1) {
//     arr.splice(0, 3);
// }
// console.log(arr);

// let arr = [0, 0, 4, 0, 5, 3, 0];
// let end = 0;
// for (let x of arr) {
//     if (x != 0) {
//         arr[end++] = x;
//     }
// }
// while (end < arr.length) {
//     arr[end++] = 0;
// }
// console.log(arr);