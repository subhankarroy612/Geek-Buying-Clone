let c = 0;
document.querySelector("#create").addEventListener("click", details);
let arr = JSON.parse(localStorage.getItem("signupData")) || []

function details(e) {

    e.preventDefault()
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let code = document.querySelector("#code").value;

    let obj = {
        Name: name,
        Email: email,
        Password: password,
        Code: code,
    }
    if ((name === "" || email === "" || password === "" || code === "") || (c%2 === 0)) {
        alert("Please fill all the details");
    } else {
        arr.push(obj);
        localStorage.setItem("signupData", JSON.stringify(arr))
        window.location.href = "http://127.0.0.1:5500/standing-army-2231/signin.html"
    }
}

document.querySelector("#tick").addEventListener("click",function(){
    c++
})