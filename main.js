// first slider
let left = document.querySelector("#previosImage");
let right = document.querySelector("#nextImage");
let slider = document.querySelector(".slider");

right.addEventListener('click', () => {
    slider.style.scrollBehavior = 'smooth';
    slider.scrollLeft += 750;
})
left.addEventListener('click', () => {
    slider.style.scrollBehavior = 'smooth';
    slider.scrollLeft -= 750;
})


// ----------------------------------------------------
// fetch data 1st
let main = document.querySelector(".sub-catogeries")
function dataFetch() {
    fetch('https://json-server-13lc.onrender.com/data').then((res) => res.json()).then((data) => cartList(data))
        .catch((err) => console.log(err))
}
dataFetch()

function cart(image, title) {
    let div = `
        <div class="data1">
        <img src="${image}" alt="" width="" height="150vh">
        <p class="dynamic-name">${title}</p>
        </div>
    `
    return div
}

function cartList(arr) {
    let imgContent = arr.map((e) => {
        return cart(e.image, e.title)
    })
    main.innerHTML = imgContent.join("")
}

// ---------------------------------------------
// second slider 3 img 
let rightArrow = document.querySelector("#rightArrow")
let leftArrow = document.querySelector("#leftArrow")
let fullSlider = document.querySelector(".big-slider")

rightArrow.addEventListener('click', () => {
    fullSlider.style.scrollBehavior = "smooth";
    fullSlider.scrollLeft += 390
})
leftArrow.addEventListener('click', () => {
    fullSlider.style.scrollBehavior = "smooth";
    fullSlider.scrollLeft -= 390;
})

// ---------------------------------------------
// third slider 3 img 

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



setTimeout(()=>{
    document.querySelector(".adds").style.display = "block"
},5000)

let cut = document.querySelector(".bi-x-circle").addEventListener("click",()=>{
    document.querySelector(".adds").style.display = "none"
})