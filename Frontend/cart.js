let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
let wishlistItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];
let cartBag = document.getElementById("initial-bag")
let cartDiv = document.getElementById("cartDiv")
let continueShoppingBtn = document.getElementById("Continue-Shopping")
let initialCart = document.getElementById("initial-cart")
let cardContainer = document.getElementById("cardContainer")

var totalPrice=0.00;
var cartCount=0;
findTotal()

// let databaseArray = [
//     {
//     Title: "Beguiling 22 Karat Yellow Gold Overlapping Bell Jhumkas",
//     Description: "Enchanting 22 Karat yellow gold jhumkas with a textured circular base,holding a textured bell bead trail, adorned with 2 ball hangings at the bottom",
//     Type: "Jhumka",
//     Weight: "5.580g",
//     Price: 36137.00,
//     DiscountPrice: 36000.00,
//     Img:["https://staticimg.titan.co.in/Tanishq/Catalog/512216JHEABA00_1.jpg?impolicy=pqmed&imwidth=640",
//     "https://staticimg.titan.co.in/Tanishq/Catalog/512216JHEABA00_2.jpg?impolicy=pqmedlow&imwidth=320"],
//     Brand: 'Tanishq',
//     },
//     {
//     Title: "Spellbinding Gold Jhumka Earrings",
//     Description: "Brighten up your Traditional Wear look with these Graceful and EnchantingGold Jhumka Earrings crafted in 22 Karat Yellow Gold.",
//     Type: "Jhumka",
//     Weight: "3.112g",
//     Price: 45206.00,
//     DiscountPrice: 45000.00,
//     Img:["https://staticimg.titan.co.in/Tanishq/Catalog/515090JDPABA00_1.jpg?impolicy=pqmed&imwidth=640",
//     "https://staticimg.titan.co.in/Tanishq/Catalog/515090JDPABA00_2.jpg?impolicy=pqmedlow&imwidth=320",
//     "https://staticimg.titan.co.in/Tanishq/Catalog/515090JDPABA00_3.jpg?impolicy=pqmedlow&imwidth=320",
//     "https://staticimg.titan.co.in/Tanishq/Catalog/515090JDPABA00_4.jpg?impolicy=pqmedlow&imwidth=320"],
//     Brand: 'Tanishq',
//     }
//     ]


if(cartItem.length > 0){
    initialCart.style.display="none";
    appendData(cartItem);
} else {
    initialCart.style.display="block";
    
}

// addData(databaseArray)
// function addData(data){
//     data.forEach(item=>{
//         cartItem.push(item)
//     })
//     localStorage.setItem("cartItem", JSON.stringify(cartItem));
// }


function createCard(item,index){
    let card = document.createElement("div")
    let imgDiv = document.createElement("div")
    let detailsDiv = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("p")
    let weight = document.createElement("p")
    let price = document.createElement("p")
    let btnDiv = document.createElement("div")
    let removeBtn = document.createElement("button")
    let wishlistBtn = document.createElement("button")
    let deleteBtnImg = document.createElement("img");
   
    let wishlistBtnImg = document.createElement("img")
    
   let removeText=document.createElement("span")
    removeText.innerText = `  Remove`
    let wishlistText=document.createElement("span")
    wishlistText.innerText = `  Move to WishList`
    let borderLineBtn = document.createElement("span")
    borderLineBtn.innerText = `|`
    borderLineBtn.className="borderLineBtn"

   wishlistBtnImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopDlBSysFDR5v0Q1cmILZP32wPrJKO8tGzY-ta6jtrw&s"
    wishlistBtnImg.className = "wishlistBtnImg"
    deleteBtnImg.src="https://www.flaticon.com/free-icon/bin_9790368"
    deleteBtnImg.className = "deleteBtnImg"
    img.src = item.Img;
    img.className = "cartImage"
    title.innerText = item.Title
    weight.innerText = `Weight: ${item.Weight}g`
    price.innerText = `₹ ${item.DiscountPrice}`
    btnDiv.className = "btnDiv"
    card.className = "cardCart"
    imgDiv.className = "imgDivCart"
    detailsDiv.className = "detailCart"
   btnDiv.className = "cartBtnDiv"
   title.className = "titleCart"
   removeBtn.className = "removeBtnCart"
   wishlistBtn.className = "wishlistBtnCart"
   price.className = "cartPrice"
   weight.className = "cartWeight"

    
    removeBtn.addEventListener("click", (e) => {
       
        let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
        cartItem.splice(index, 1);
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        findTotal();
        appendData(cartItem);
    });

    wishlistBtn.addEventListener("click", (e) => {
        let cartItem = JSON.parse(localStorage.getItem("cartItem")) || []
        let wishlistItem = JSON.parse(localStorage.getItem("wishlistItem"))||[];
        let obj = cartItem.splice(index,1);
        wishlistItem.push(...obj);
        
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        localStorage.setItem("wishlistItem",JSON.stringify(wishlistItem));
        findTotal();
        appendData(cartItem);
    });

    
    removeBtn.append(removeText)
    wishlistBtn.append(wishlistBtnImg,wishlistText)
    btnDiv.append(removeBtn,borderLineBtn,wishlistBtn)
    detailsDiv.append(title,weight,price,btnDiv)
    imgDiv.append(img)
    card.append(imgDiv,detailsDiv)
    return card;

}


function appendData(data) {
    let cartList = document.createElement("div")
    cartList.className="cart-list"
    data.forEach((item, index) => {
        let Card = createCard(item, index);
        let lineOnCart = document.createElement("div")
       
        lineOnCart.className = "lineOnCart"
        cartList.append(lineOnCart,Card); 
    });
    cartDiv.innerHTML=""
    let CartDownImg = document.createElement("img")
    CartDownImg.className = "cartDownImg"
    CartDownImg.src = "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfef73f4d/cart-secure-delivery-new.png"
    let cartTop = document.createElement("div")
    cartTop.className = "cartTop"
    cartTop.append(cartList,CartDownImg);
    let cartTotalBottom = document.createElement("div")
    cartTotalBottom.className = "cartTotalSticky"
    cartTotalBottom.innerText = `Total (${cartCount}) Items : ₹ ${totalPrice}`
    let checkOutButton = document.createElement("button")
    checkOutButton.className="checkOutButton"
    checkOutButton.innerText="Proceed to Checkout"
    cartTotalBottom.append(checkOutButton);
    cartDiv.append(cartTop,cartTotalBottom);
    
}

function findTotal(){
    var x = JSON.parse(localStorage.getItem("cartItem")) || []
    
totalPrice = x.reduce((acc, item) => acc + item.DiscountPrice, 0);

if(totalPrice < 1){
    
    initialCart.style.display="block";
    cartDiv.append(cartBag)
    // console.log("hellow")
}
console.log(totalPrice)
cartCount = x.length;
}