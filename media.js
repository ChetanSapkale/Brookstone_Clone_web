// navigation
$(document).ready(function () {
    $(".bi-list").click(function () {
        $(".navigation").slideToggle("slow");
    })
})

//New page & massage page filter
$(document).ready(function () {
    $(".filter").click(function () {
        $(".price-section").show(250);
    })
})

$(document).ready(function () {
    $(".bi-x-lg").click(function () {
        $(".price-section").hide(300);
    })
})

// massage page filter
// $(document).ready(function () {
//     $(".filter").click(function () {
//         $(".price-section").show(250);
//     })
// })

// $(document).ready(function () {
//     $(".bi-x-lg").click(function () {
//         $(".price-section").hide(300);
//     })
// })