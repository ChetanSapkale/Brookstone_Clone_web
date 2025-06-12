$(document).ready(function () {
    $(".cart").click(function () {
        $(".addToCard").slideToggle("slow");
    });
});
$(document).ready(function () {
    $(".bi-x").click(function () {
        $(".addToCard").slideToggle("slow");
    });
});


let signUpForm = document.querySelector("#signUpForm")

let p = document.querySelectorAll(".empty")
// console.log(p)

// console.log(signUpForm)
let arr = [];
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let submitObj = {
        FirstName: document.querySelector("#FirstName").value,
        LastName: document.querySelector("#LastName").value,
        SignUpEmail: document.querySelector("#SignUpEmail").value,
        SignUpPassword: document.querySelector("#SignUpPassword").value
    }
    if (submitObj.FirstName == "") {
        document.querySelector(".empty1").innerHTML = "Please fill this !"
        document.querySelector(".empty1").style.color = "red"
        document.querySelector(".signUpInput1").style.borderColor = "red"
    }
    else {
        document.querySelector(".empty1").innerHTML = ""
        document.querySelector(".signUpInput1").style.borderColor = "green"

    }
    if (submitObj.LastName == "") {
        document.querySelector(".empty2").innerHTML = "Please fill this !"
        document.querySelector(".empty2").style.color = "red"
        document.querySelector(".signUpInput2").style.borderColor = "red"

    }
    else {
        document.querySelector(".empty2").innerHTML = ""
        document.querySelector(".signUpInput2").style.borderColor = "green"

    }
    if (submitObj.SignUpEmail == "") {
        document.querySelector(".empty3").innerHTML = "Please fill this !"
        document.querySelector(".empty3").style.color = "red"
        document.querySelector(".signUpInput3").style.borderColor = "red"

    }
    else {
        document.querySelector(".empty3").innerHTML = ""
        document.querySelector(".signUpInput3").style.borderColor = "green"
    }
    if (submitObj.SignUpPassword == "") {
        document.querySelector(".empty4").innerHTML = "Please fill this !"
        document.querySelector(".empty4").style.color = "red"
        document.querySelector(".signUpInput4").style.borderColor = "red"

    }
    else {
        document.querySelector(".empty4").innerHTML = ""
        document.querySelector(".signUpInput4").style.borderColor = "green"
    }
    arr.push(submitObj);
    localStorage.setItem("userInfo", JSON.stringify(arr))

    document.querySelector("#FirstName").value = ""
    document.querySelector("#LastName").value = ""
    document.querySelector("#SignUpEmail").value = ""
    document.querySelector("#SignUpPassword").value = ""
})


let logInForm = document.querySelector("#logInForm")
// console.log(logInForm)
let AcData = JSON.parse(localStorage.getItem("userInfo"))
console.log(AcData)
logInForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let LoginObj = {
        LoginEmail: document.querySelector("#LoginEmail").value,
        LoginPassword: document.querySelector("#LoginPassword").value,
    }
    if(LoginObj.LoginEmail == ""){
        document.querySelector(".emailError").innerHTML = "Please fill this !"
        document.querySelector(".emailError").style.color = "red"
        document.querySelector("#LoginEmail").style.borderColor = "red"
    }
    else{
        document.querySelector(".emailError").innerHTML = ""
        document.querySelector("#LoginEmail").style.borderColor = "green"
    }
    if(LoginObj.LoginPassword == ""){
        document.querySelector(".passwordError").innerHTML = "Please fill this !"
        document.querySelector(".passwordError").style.color = "red"
        document.querySelector("#LoginPassword").style.borderColor = "red"
    }
    else{
        document.querySelector(".passwordError").innerHTML = ""
        document.querySelector("#LoginPassword").style.borderColor = "green"
    }

    let store = AcData.filter((el) => el.SignUpEmail == LoginObj.LoginEmail && el.SignUpPassword == LoginObj.LoginPassword)

    // console.log(store) 
    if (store[0]) {
        alert("Logged In Successfully!")
        window.location.href = "index.html"
    } else {
        alert("Invalid Email or Password.")
    }
})


