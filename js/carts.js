let productsInCart = localStorage.getItem("productsInCarts")
let allProducts = document.querySelector(".Products")
if(productsInCart){
    let item = JSON.parse(productsInCart);
    drawCartProducts(item);
}
function drawCartProducts(products){
    let y = products.map((item) => {
        return `
        <div class="favv col-lg-5 col-md-10 col-11 mt-md-5">
        <img src="${item.imageUrl}" class="cart-img" style = "margin-top : 0px";>
        <h2 class="cart-title1" style ="margin-left: 230px">product : ${item.product}</h2>
        <h2 class="cart-title3" style ="margin-left: 230px">Person : ${item.Person}</h2>
        <h2 class="cart-title2" style ="margin-left: 230px">price : ${item.price}</h2>
        <span class = "pou" style = "margin-left : 115px ;"> $ </span>
        <div class="product-item-action">
        <div class = "icon2"> 
        <span class = "num${item.id}" id = "num">${localStorage.getItem(`num${item.id}`) ? localStorage.getItem(`num${item.id}`): 1}</span>
        <i class="fas fa-minus minus" style="cursor: pointer;" onClick ="minus(${item.id})" ></i>
        <i class="fas fa-plus plus" style="cursor: pointer;" onClick ="plus(${item.id})"></i>
    </div>
        <button class="btn remove-from-card" style ="font-weight: 600;" onClick ="deleteData(${item.id})">Remove</button>
    </div>
 </div>
        `
    })    
    allProducts.innerHTML = y.join("");
}
/////////////////////////////////////////////////////
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
//////////////////////////////////////
function deleteData(id){
    var x = JSON.parse((localStorage.getItem("productsInCarts")))
    var index = x.map(function (item) {
        return item.id }) .indexOf(id) 
    if (index !== -1 ){
        x.splice(index , 1)
        drawCartProducts(x)    
        localStorage.setItem("productsInCarts" , JSON.stringify(x))
    }
}
// ///////////////////////////////////
var cost = document.querySelector(".cost")
 cost.innerHTML = localStorage.getItem("totalprice")
// /////////////////////////////////
function plus(id){
    var number = document.querySelector(`.num${id}`)
    var badgee = localStorage.getItem("bad")
    badgee ++
    number.innerHTML ++
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badgee)
}
// ///////////////////////
function minus(id){
    var number = document.querySelector(`.num${id}`)
    number.innerHTML --
    var badgee = localStorage.getItem("bad")
    badgee --
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badgee)
}
// /////////////////////////////////////////////////////////////////
let favouriteItem = localStorage.getItem("fav") ? localStorage.getItem("fav") : [] ;
function addFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav2.style.display = "block"
    fav.style.display = "none"
    let favItem = products.find(item => item.id === id );
    favouriteItem.push(favItem)
    localStorage.setItem("fav" ,JSON.stringify(favouriteItem))
}
// /////////////////////
function colorFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav.style.display = "block"
    fav2.style.display = "none"
}

// /////////////////////////////////////////////////////////////////
var favPar = document.querySelector(".fav-par")
let Fav = localStorage.getItem("fav")
if(Fav){
    let item = JSON.parse(Fav);
    drawCartFavourite(item);
}
function drawCartFavourite(products){
    let Z = products.map((item) => {
        return `
        <div class="fav-10 col-lg-5 col-md-10">
        <img src="${item.imageUrl}" class="img" id = "im" style = "margin-top : 10px;" >
        <h2 class="title1">product : ${item.product}</h2>
        <h2 class="title3"  style ="margin-top: 0px">Person : ${item.Person}</h2>
        <h2 class="title2">price : ${item.price}</h2>
        <span class = "pou" id = "pou2" style = "margin-left : -12px ;"> $ </span>
        <div class="product-item-action">
        <button class="btn remove-card" onClick ="deleteFav(${item.id})">Remove</button>
   </div>
</div>
        `
    })    
    favPar.innerHTML = Z.join("");
}
// ////////////////////
function deleteFav(id){
    var mah = JSON.parse((localStorage.getItem("fav")))
    var index = mah.map(function (item) {
        return item.id }) .indexOf(id) 
    if (index !== -1 ){
        mah.splice(index , 1)
        drawCartFavourite(mah)    
        localStorage.setItem("fav" , JSON.stringify(mah))   
    }
}
// ////////////////////  