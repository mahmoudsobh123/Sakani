var email = document.querySelector(".email")
var password = document.querySelector(".password")
var getEmail = localStorage.getItem("email")
var getPassword = localStorage.getItem("password")
var submit = document.querySelector(".submit")
submit.addEventListener("click" ,function(e) {
    e.preventDefault()
    if(email.value ==="" || password.value ===""){
        alert("please fill data")
    }else{
        if(getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value){
            setTimeout( () => {
                window.location = "home.html"
            } , 1500)
        }else{
            alert("the email or password is wrong")
        }
    }
})
/////////////////////////////////////