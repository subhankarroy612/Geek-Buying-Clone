
let details = JSON.parse(localStorage.getItem("signupData"))

document.querySelector("#blue").addEventListener("click", function (e) {
    
    e.preventDefault()
    
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;
    
    if(email === "" || pass === ""){
        alert("Please fill all the details");
    }
    let c = 0;
    details.map(function(ele, i){

      if(email === ele.Email){
        if(pass === ele.Password){
            alert("Welcome Back")
            c++
            window.location.href = "index.html"
        }else{
            alert("Wrong Password or Email")
        }
      }

    })
    if(c === 0){
      alert("Please enter correct details or Create an Account")
    }

})
