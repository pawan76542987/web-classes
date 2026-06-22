// document.getElementById("p1").addEventListener("click", function(){
//     alert("Home Page");
// });
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let msgBox = document.getElementById("success-msg");

    if (name === "" || email === "" || message === "") {
        msgBox.innerText = "Please fill all the feilds."
        msgBox.style.color = "red";
    } else {
        msgBox.innerText = "Message sent successfully!"
        msgBox.style.color = "green";

        document.querySelector("form").reset();
    }
});
document.getElementById("p3").addEventListener("click", function(){
    alert("About Us Page");
});
document.getElementById("sign-up").addEventListener("click", function(){
    alert("Sign-Up Window");
});