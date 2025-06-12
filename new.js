
// fetch newpage images
let newpage = document.querySelector(".sub-newpage-images")
let AskDataShow = [];
function newPageFetch() {
    fetch("https://json-server-13lc.onrender.com/newpage").then((res) => res.json()).then((data) => {
        AskDataShow = data;
        newImages(data)
        
    })
        .catch((err) => console.log(err))
}
newPageFetch()

function oneImage(image, description, price, id) {
    let div = `
    <div class="first-new">
        <a href="description.html?image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}"><img src="${image}" alt=""></a>
        <p>${description}.</p>
        <span>${price}</span>
        <button data-id=${id} class="btn btn-outline-primary addBtn">AddTo Cart</button>
    </div>
    `
    return div
}

function newImages(arr) {
    let images = arr.map((el) => {
        return oneImage(el.image, el.description, el.price, el.id)
    })
    newpage.innerHTML = images.join("")
}

// $100
let btnofhunred = document.querySelector("#hunred");
btnofhunred.addEventListener('click', () => {
    let lessprice = AskDataShow.filter((el, idx) => el.price <= 100)
    newImages(lessprice)
})

// $150
let oneHundredFifty = document.querySelector("#oneHundredFifty")

oneHundredFifty.addEventListener('click', () => {
    let mediumprice = AskDataShow.filter((el, idx) => {
        return el.price <= 150
    })
    newImages(mediumprice)
})

// $200
let twoHunred = document.querySelector("#twoHunred")
twoHunred.addEventListener("click", () => {
    let mediumHightPrice = AskDataShow.filter((el, idx) => {
        return el.price <= 200
    })
    newImages(mediumHightPrice)
})

// $250
let twoHunredFifty = document.querySelector("#twoHunredFifty")

twoHunredFifty.addEventListener('click', () => {
    let highest = AskDataShow.filter((el, idx) => {
        return el.price <= 250
    })
    newImages(highest)
})

//  $300
let threeHundred = document.querySelector("#threeHundred")

threeHundred.addEventListener('click', () => {
    let highestPrice = AskDataShow.filter((el, idx) => {
        return el.price <= 300
    })
    newImages(highestPrice)
})

// $500
let fiveHundred = document.querySelector("#fiveHundred")

fiveHundred.addEventListener('click', () => {
    let HighestPriceData = AskDataShow.filter((el, idx) => {
        return el.price <= 500
    })
    newImages(HighestPriceData)
})

// all
let all = document.querySelector("#all")
all.addEventListener('click', () => {
    let AllData = AskDataShow.filter((el, idx) => {
        return el.price <= 550
    })
    newImages(AllData)
})

// topRated
let topRated = document.querySelector("#topRated")
topRated.addEventListener("click", () => {
    let numberone = AskDataShow.filter((el, idx) => {
        return el.price <= 550
    })
    newImages(numberone);
})

// BestSelling
let BestSelling = document.querySelector("#BestSelling")
BestSelling.addEventListener("click", () => {
    let numberone = AskDataShow.filter((el, idx) => {
        return el.price <= 250
    })
    newImages(numberone);
})

// LowestPrice
let LowestPrice = document.querySelector("#LowestPrice")
LowestPrice.addEventListener("click", () => {
    let numberone = AskDataShow.filter((el, idx) => {
        return el.price <= 100
    })
    newImages(numberone);
})

// HighestPrice
let HighestPrice = document.querySelector("#HighestPrice")
HighestPrice.addEventListener("click", () => {
    let numberone = AskDataShow.filter((el, idx) => {
        return el.price >= 500
    })
    newImages(numberone);
})

//Alphabitical A to Z
let AtoZ = document.querySelector("#AtoZ")
AtoZ.addEventListener("click", () => {
    let startToEnd = AskDataShow.sort((a, b) => a.price - b.price)
    newImages(startToEnd)
})

// Alphabitical Z - A
let ZtoA = document.querySelector("#ZtoA")
ZtoA.addEventListener("click", () => {
    let EndToStar = AskDataShow.sort((a, b) => b.price - a.price)
    newImages(EndToStar)
})

// NewestPrice
let NewestPrice = document.querySelector("#NewestPrice")
NewestPrice.addEventListener("click", () => {
    let numberone = AskDataShow.filter((el, idx) => {
        return el.price >= 500
    })
    newImages(numberone);
})

// Featured
let Featured = document.querySelector("#Featured")
Featured.addEventListener('click', () => {
    let AllData = AskDataShow.filter((el, idx) => {
        return el.price <= 550
    })
    newImages(AllData)
})


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("addBtn")) {
        let dataOfId = e.target.dataset.id;
        addData(dataOfId)
    }
})

function addData(id) {
    fetch(`https://json-server-13lc.onrender.com/newpage/${id}`).then((res) => res.json()).then((data) => {
        let objOfData = {
            image: data.image,
            description: data.description,
            price: data.price
        }
        fetch("https://json-server-13lc.onrender.com/addCardData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objOfData),
        })
    })
        .catch((err) => console.log(err))
}


// slider
let leftside = document.getElementById("leftside")
let rightside = document.getElementById("rightside")
let allImgs = document.querySelector(".big-slider2")

rightside.addEventListener('click', () => {
    allImgs.style.scrollBehavior = "smooth";
    allImgs.scrollLeft += 2000;
})
leftside.addEventListener('click', () => {
    allImgs.style.scrollBehavior = "smooth";
    allImgs.scrollLeft -= 2000;
})