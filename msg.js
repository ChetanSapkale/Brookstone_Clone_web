
let msgImages = document.querySelector(".sub-massage-images");
let msgData = [];
function msgFetch() {
    fetch("https://json-server-13lc.onrender.com/massage").then((res) => res.json())
        .then((data) => {
            msgData = data
            msgcarts(data)
        })
        .catch((err) => console.log(err))
}
msgFetch()

function msgCart(image, description, price, catogery,id) {
    let div = `
    <div class="msg-card">
        <a href="description.html?image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}"><img src="${image}" alt=""></a>
        <p>${description}</p>
        <p>${catogery}</p>
        <span>${price}</span>
        <button class="btn btn-outline-primary AddToCart" data-id="${id}">AddTo Cart</button>
    </div>
    `
    return div
}

function msgcarts(arr) {
    let newArr = arr.map((el, idx) => {
        return msgCart(el.image, el.description, el.price, el.catogery,el.id)
    })
    msgImages.innerHTML = newArr.join("")
}

// Chairs
let Chair = document.getElementById("Chairs")
// console.log(Chair);
Chair.addEventListener('click', () => {
    let chairData = msgData.filter((el, idx) => {
        return el.catogery == "Chairs"
    })
    msgcarts(chairData)
})

// NeckBack
let NeckBack = document.getElementById("NeckBack")
NeckBack.addEventListener('click', () => {
    let NeckBackData = msgData.filter((el, id) => {
        return el.catogery == "Neck & Back"
    })
    msgcarts(NeckBackData)
})

// Hand
let Hand = document.getElementById("Hand")
Hand.addEventListener('click', () => {
    let HandData = msgData.filter((el, id) => {
        return el.catogery == "Hand"
    })
    msgcarts(HandData)
})

// Eye
let Eye = document.getElementById("Eye")
Eye.addEventListener('click', () => {
    let EyeData = msgData.filter((el, id) => {
        return el.catogery == "Eye"
    })
    msgcarts(EyeData)
})

// Roller
let Roller = document.getElementById("Rollers")
Roller.addEventListener('click', () => {
    let rollerData = msgData.filter((el, id) => {
        return el.catogery == "Roller"
    })
    msgcarts(rollerData)
})

// FootLeg
let FootLeg = document.getElementById("FootLeg")
FootLeg.addEventListener('click', () => {
    let FootLegData = msgData.filter((el, id) => {
        return el.catogery == "Foot & Leg"
    })
    msgcarts(FootLegData)
})

// Massage
let Massage = document.getElementById("Massage")
Massage.addEventListener('click', () => {
    let NeckBackData = msgData.filter((el, id) => {
        return el.catogery == "Neck & Back"
    })
    msgcarts(NeckBackData)
})


// Featured
let Featured = document.getElementById("Featured")
Featured.addEventListener('click', () => {
    let FeaturedData = msgData.filter((el, id) => {
        return el.price >= 550
    })
    msgcarts(FeaturedData)
})

// Top Rated
let topRated = document.getElementById("topRated")
topRated.addEventListener('click', () => {
    let topRatedData = msgData.filter((el, id) => {
        return el.price <= 550
    })
    msgcarts(topRatedData)
})

// BestSelling
let BestSelling = document.getElementById("BestSelling")
BestSelling.addEventListener('click', () => {
    let BestSellingData = msgData.filter((el, id) => {
        return el.price >= 1000
    })
    msgcarts(BestSellingData)
})

// LowestPrice
let LowestPrice = document.getElementById("LowestPrice")
LowestPrice.addEventListener('click', () => {
    let LowestPriceData = msgData.filter((el, id) => {
        return el.price <= 200
    })
    msgcarts(LowestPriceData)
})

// HighestPrice
let HighestPrice = document.getElementById("HighestPrice")
HighestPrice.addEventListener('click', () => {
    let HighestPriceData = msgData.filter((el, id) => {
        return el.price >= 5000
    })
    msgcarts(HighestPriceData)
})

// AtoZ
let AtoZ = document.getElementById("AtoZ")
AtoZ.addEventListener('click', () => {
    let AtoZData = msgData.sort((a, b) => {
        return a.price - b.price
    })
    msgcarts(AtoZData)
})

// ZtoA
let ZtoA = document.getElementById("ZtoA")
ZtoA.addEventListener('click', () => {
    let ZtoAData = msgData.sort((a, b) => {
        return b.price - a.price
    })
    msgcarts(ZtoAData)
})

//NewestPrice
let NewestPrice = document.getElementById("NewestPrice")
NewestPrice.addEventListener('click', () => {
    let NewestPriceData = msgData.filter((el, id) => {
        return el.price >= 6000
    })
    msgcarts(NewestPriceData)
})


// addTOCart 
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("AddToCart")){
        msgAddToCart(e.target.dataset.id)
        console.log("hh")
    }
})

function msgAddToCart(id){
    fetch(`https://json-server-13lc.onrender.com/massage/${id}`).then((res)=> res.json()).then((data)=>{
        let item = {
            image  : data.image,
            description : data.description,
            catogery : data.catogery,
            price : data.price,
            id : data.id
        }
        fetch("https://json-server-13lc.onrender.com/addCardData",{
            method : "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(item)
        })
    })
}
