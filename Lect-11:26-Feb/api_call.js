async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/");
    console.log(res);
    const data = await res.json();
    console.log(data);
}
getPosts();   //returns an array

async function getSinglePosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    console.log(res);
    const data = await res.json();
    return data;
}
getSinglePosts();   //return an object
getSinglePosts.then((data)=>console.log(data));