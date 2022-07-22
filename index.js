
let imagesLink = [
    "https://img.gkbcdn.com/bn/2207/740x670-62d502cc2b40c924340fa9df._p1_.jpg",
    "https://img.gkbcdn.com/bn/2207/740x670-62cd3c2e2b40c91fd0c2346f._p1_.jpg",
    "https://img.gkbcdn.com/bn/2207/740X670-62c3b8132b40c9270489e6ae._p1_.jpg",
    "https://img.gkbcdn.com/s3/bn/2207/740x670-62d8af552b40c9259c333f38.jpg",
]
let catchImage = document.querySelector("#movingPage>img");
let c = 0;
document.querySelector("#leftBtn").addEventListener("click", function () {
    c++;
    if (c === imagesLink.length) {
        c = 0
    }
    catchImage.src = imagesLink[c]
})
document.querySelector("#rightBtn").addEventListener("click", function () {
    c--;
    if (c < 0) {
        c = imagesLink.length-1
    }
    catchImage.src = imagesLink[c]
})

