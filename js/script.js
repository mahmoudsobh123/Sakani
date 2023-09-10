var user = document.querySelector("#user")
var logAndReg = document.querySelector(".log-reg")
var userInfo = document.querySelector("#user-info")
var carr = document.querySelector(".carr")
var logOut = document.querySelector("#logout")
var usere = document.querySelector(".usere")
var wel = document.querySelector(".wel")
if(localStorage.getItem("first-name")){
    logAndReg.remove()
    userInfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("first-name")
    usere.innerHTML = localStorage.getItem("first-name")
}else{
    userInfo.style.display = "none"
    carr.style.display = "none"
    wel.display = "none"
}
logOut.addEventListener("click" , function(){
    localStorage.clear()
    setTimeout( () => {
        window.location = "index.html"
    } , 1500)
})
////////////////////////////////////////////////
var allProducts = document.querySelector(".Products")
let products = [
    {
        id : 1 ,
        product : "Small Room" ,
        price : 20  ,
        Person : "Two Persons" , 
        imageUrl : "images/bage1.jpeg"
    } ,
    {
        id : 2 ,
        product : "Small Room" ,
        price : 15  ,
        Person : "Two Persons" , 
        imageUrl : "images/bage2.jpg"
    } ,
    {
        id : 3 ,
        product : "Small Room" ,
        price : 20  ,
        Person : "Two Persons" , 
        imageUrl : "images/bage3.jpg"
    } ,
    {
        id : 4 ,
        product : "Medium Room" ,
        price : 45  ,
        Person : "Three Persons" , 
        imageUrl : "images/bage4.jpg"
    } ,
    {
        id : 5 ,
        product : "Medium Room" ,
        price : 40  ,
        Person : "Three Persons" , 
        imageUrl : "images/bage5.jpg"
    } ,    
    {
        id : 6 ,
        product : "Small Room" ,
        price : 15  ,
        Person : "Two Persons" , 
        imageUrl : "images/bage6.jpg"
    } ,
    {
        id : 7 ,
        product : "Big Room" ,
        price : 50 ,
        Person : "Four Persons" , 
        imageUrl : "images/bage7.jpg"
    } ,
    {
        id : 8 ,
        product : "Big Room" ,
        price : 50 ,
        Person : "Four Persons" , 
        imageUrl : "images/bage8.jpg"
    } ,
    {
        id : 9 ,
        product : "Big Room" ,
        price : 45 ,
        Person : "Four Persons" , 
        imageUrl : "images/bage9.jpg"
    } ,
    {
        id : 10,
        product : "Big Room" ,
        price : 50 ,
        Person : "Four Persons" , 
        imageUrl : "images/bage10.jpg"
    } ,
    {
        id : 11 ,
        product : "Medium Room" ,
        price : 35 ,
        Person : "Three Persons" , 
        imageUrl : "images/bage13.jpeg"
    } ,
    {
        id : 12 ,
        product : "Medium Room" ,
        price : 35 ,
        Person : "Three Persons" , 
        imageUrl : "images/bage12.jpeg"
    } ,
    {
        id : 13,
        product : "Big Room" ,
        price : 50 ,
        Person : "Four Persons" , 
        imageUrl : "images/bage15.jpg"
    } ,
    {
        id : 14 ,
        product : "Medium Room" ,
        price : 30 ,
        Person : "Three Persons" , 
        imageUrl : "images/bage16.jpeg"
    } ,
    {
        id : 15 ,
        product : "Big Room" ,
        price : 60 ,
        Person : "Four Persons" , 
        imageUrl : "images/bage17.jpeg"
    } ,
    {
        id : 16 ,
        product : "Small Room" ,
        price : 20,
        Person : "Two Persons" , 
        imageUrl : "images/small.jpeg"
    } ,
    {
        id : 17,
        product : "Big Room" ,
        price : 50 ,
        Person : "Four Persons" , 
        imageUrl : "images/big.jpeg"
    } ,
    {
        id : 18 ,
        product : "Small Room" ,
        price : 20 ,
        Person : "Two Persons" , 
        imageUrl : "images/small2.jpeg"
    } 
]
localStorage.setItem("myProduct" , JSON.stringify(products))
//////////////////////////////////////
let drawItems ;
(drawItems = function (products = []){
    let y = products.map((item) => {
        return `
         <div class="child1 col-lg-3 col-sm-5 col-12">
        <img src="${item.imageUrl}" class="cart-img">
        <h2 class="cart-title1">product : ${item.product}</h2>
        <h2 class="cart-title3" id = "cat">Person : ${item.Person}</h2>
        <h2 class="cart-title2">price : ${item.price}</h2>
        <span class = "dol"> $ </span>
        <div class="product-item-action">
        <button class="btn btn-primary add-to-cart" onClick ="addToCard(${item.id})">Add To Cart</button>
        <button class="btn remove-from-card" onClick ="deleteData(${item.id})" style = "display:none";>Remove from card</button>
        <i class="far fa-heart fav${item.id}" id = "fav" onClick ="addFavourite(${item.id})"></i>
        <i class="fas fa-heart fav2${item.id}" id = "fav2" style="color: #ff0000;" onClick ="colorFavourite(${item.id})"></i>
    </div>
 </div>
        `
    })
    allProducts.innerHTML = y.join("");
})(JSON.parse(localStorage.getItem("myProduct")))
// /////////////////////////////////////////////
let favouriteItem = localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : [] ;
function addFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav2.style.display = "block"
    fav.style.display = "none"
    let favItem = products.find(item => item.id === id );
    favouriteItem.push(favItem)
    localStorage.setItem("fav" ,JSON.stringify(favouriteItem))
}
// /////////////////////////////////////////
function colorFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav.style.display = "block"
    fav2.style.display = "none"
}
 ////////////////////////////////////////////////
 let badge = document.querySelector(".badge")
 let cartProductsDiv = document.querySelector(".carts-products div")
 let addItem = localStorage.getItem("productsInCarts") ? JSON.parse(localStorage.getItem("productsInCarts")) : [] ;
  if(addItem){
     addItem.map(item => {
         cartProductsDiv.innerHTML += `<p>
         <div class = "icon">
            ${item.product}
            <div class = "icon2"> 
                <span class = "num${item.id}" id = "num">${localStorage.getItem(`num${item.id}`) ? localStorage.getItem(`num${item.id}`): 1}</span>
                <i class="fas fa-minus minus" style="cursor: pointer;" onClick ="minus(${item.id})" ></i>
                <i class="fas fa-plus plus" style="cursor: pointer;" onClick ="plus(${item.id})"></i>
            </div>
         </div>   
    </p>`;
     })
     badge.style.display = "block";
     badge.innerHTML = localStorage.getItem("bad")  ? localStorage.getItem("bad") : addItem.length ;
  }''
//////////////////////////////////////////////////////
  var totalPrice = 0 
  var addProduct = document.querySelector(".add-to-cart")
  var deleteProduct = document.querySelector(".remove-from-card")
    if(localStorage.getItem("first-name")){
        function addToCard(id){
        let choosenItem = products.find(item => item.id === id );
        totalPrice += choosenItem.price
        localStorage.setItem("totalprice" , totalPrice )
        ////////////////////////////////////////////////// 
        if(addItem.indexOf(choosenItem) != -1){
            plus(id)
            openDiv()
        }else{
        addItem.push(choosenItem)
        localStorage.setItem("productsInCarts" , JSON.stringify(addItem))
        badge.innerHTML ++
        const cardProductLength = addItem.length
        cartProductsDiv.innerHTML += `<p>    
        <div class = "icon">
        ${choosenItem.product}
         <div class = "icon2"> 
         <span class = "num${choosenItem.id}" id = "num"> 1 </span>
         <i class="fas fa-minus minus" style="cursor: pointer;" onClick ="minus(${choosenItem.id})" ></i>
         <i class="fas fa-plus plus" style="cursor: pointer;" onClick ="plus(${choosenItem.id})"></i>
         </div>
        </div>   
    </p>`
        badge.style.display = "block"
        badge.innerHTML = localStorage.getItem("bad") ? localStorage.getItem("bad") : cardProductLength.toString()
    }}
}else{
    window.location = "index.html"
}
 ///////////////////////////////////////////
 let cross = document.querySelector("#tria")
 let shoopingCart = document.querySelector(".Shooping-cart")
 let cartProduct = document.querySelector(".carts-products")
 shoopingCart.addEventListener("click" , openDiv)
 function openDiv(){
     if(cartProductsDiv.innerHTML != ""){
         if(cartProduct.style.display == "block"){
             cartProduct.style.display = "none"
         }else{
             cartProduct.style.display = "block"
         }
     }
 }
 ///////////////////////////////////////////
function plus(id){
    var number = document.querySelector(`.num${id}`)
    console.log(number)
    number.innerHTML ++
    badge.innerHTML ++
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badge.innerHTML)
    openDiv()
}
// ///////////////////////
function minus(id){
    var number = document.querySelector(`.num${id}`)
    number.innerHTML --
    badge.innerHTML --
    if(number == 0){
        window.remove("number")
    }
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badge.innerHTML)
    openDiv()
}

            ////////////////Search function////////////////
let searchELe = document.querySelector("#Search")
 searchELe.addEventListener("keyup" , function(e){
    searchDat(e.target.value ,  JSON.parse(localStorage.getItem("myProduct")) )
    if(e.target.value.trim() === ""){
         drawItems(JSON.parse(localStorage.getItem("myProduct")))
    }
            } )
 function searchDat(product , products){
    let arr = products.filter((item) => item.product.indexOf(product) !== -1 );
    drawItems(arr)
}
            /////////////Search By Title and Category//////////
let searchMood = "title"
function getSearchMood(id){
let search = document.querySelector("#Search")
if(id == "searchTitle"){
searchMood = "title"
search.placeholder = " Search By Title"
let searchELe = document.querySelector("#Search")
searchELe.addEventListener("keyup" , function(e){
    searchDat(e.target.value ,  JSON.parse(localStorage.getItem("myProduct")) )
    if(e.target.value.trim() === ""){
        drawItems(JSON.parse(localStorage.getItem("myProduct")))
    }
} )
   function searchDat(product , products){
    let arr = products.filter((item) => item.product.indexOf(product) !== -1 );
    drawItems(arr)
  }
//////////////////
}else{
searchMood = "Person"
search.placeholder = " Search By Person"
let searchELe = document.querySelector("#Search")
searchELe.addEventListener("keyup" , function(e){
    searchCAt(e.target.value ,  JSON.parse(localStorage.getItem("myProduct")) )
    if(e.target.value.trim() === ""){
        drawItems(JSON.parse(localStorage.getItem("myProduct")))
    }
} )
  function searchCAt(Person, products){
    let arr = products.filter((item) => item.Person.indexOf(Person) !== -1 );
    drawItems(arr)
    }
    }
    search.focus()
}