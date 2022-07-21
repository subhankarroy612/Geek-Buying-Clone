
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
            window.location.href = "http://127.0.0.1:5500/standing-army-2231/index.html"
        }else{
            alert("Wrong Password or Email")
        }
      } 
    })

})
