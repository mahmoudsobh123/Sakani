var user = document.querySelector("#user")
var logAndReg = document.querySelector(".log-reg")
var userInfo = document.querySelector("#user-info")
var logOut = document.querySelector("#logout")
if(localStorage.getItem("first-name")){
    logAndReg.remove()
    userInfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("first-name")
}else{
    userInfo.style.display = "none"
}
logOut.addEventListener("click" , function(){
    localStorage.clear()
    setTimeout( () => {
        window.location = "login.html"
    } , 1500)
})
logOut.style.marginLeft = "250px"