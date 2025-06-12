window.addEventListener("load", ()=>{
    const params = new URLSearchParams(window.location.search)
    const description = params.get("description")
    const image = params.get("image")
    const price = params.get("price")

    document.querySelector("#image").src = image
    document.querySelector("#description").innerText = description
    document.querySelector("#price").innerText = price
})