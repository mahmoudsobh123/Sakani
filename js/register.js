var firstName = document.querySelector(".first-name")
var lasttName = document.querySelector(".last-name")
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var submit = document.querySelector(".submit")
submit.addEventListener("click" , function(e){
    e.preventDefault()
    if(firstName.value ==="" || lasttName.value ==="" || email.value ==="" || password.value === ""){
        alert("please fill data")
    }else{
        localStorage.setItem("first-name", firstName.value)
        localStorage.setItem("last-name", lasttName.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        setTimeout( () => {
            window.location = "index.html"
        } , 1500)
    }
})