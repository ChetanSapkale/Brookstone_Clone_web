let subAddCart = document.querySelector(".subAddCart");
let cartNum = document.querySelector("#cartNum")

function addToCart(){
    fetch("https://json-server-13lc.onrender.com/addCardData").then((res)=>res.json()).then((data)=>{
        perticularCart(data)
        cartNum.innerText = data.length
    }).catch((err)=>console.log(err))
}
addToCart()

function multipulCart(image, description, price, id){
    let div = `
    <div class="main-sub-cart">
    <div class="addCart-img">
        <img src="${image}" height="130px" alt="">
    </div>
    <div class="addCart-contain">
        <p>${description}</p>
       
        <div class="cart-price-dltbtn">
            <span>$${price}</span>
            <i class="bi bi-trash3-fill dltbtn" data-id="${id}"></i>
        </div>
    </div>
    </div>
    `
    return div
}

function perticularCart(arr){
    let newArr = arr.map((el,idx)=>{
        return multipulCart(el.image, el.description, el.price, el.id)
    })
    subAddCart.innerHTML = newArr.join("")
}

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("dltbtn")){
        let id = e.target.dataset.id
        dltBtn(id)
    }
})
function dltBtn(id){
        fetch(`https://json-server-13lc.onrender.com/addCardData/${id}`,{
            method :"DELETE",
        }).then((res)=>res.json()).then((data)=>console.log(data))
        .catch((err)=>console.log(err))
}
