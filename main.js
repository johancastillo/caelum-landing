
let videoMobile = document.getElementById("banner-video-mobile")
let videoDesktop = document.getElementById("banner-video-desktop")
let preloader = document.getElementById("preloader-box")




addEventListener("DOMContentLoaded", () => {
    console.log("Holaaa")


    setTimeout(() => {
        videoDesktop.play()
        videoMobile.play()
    }, 8000)
    

    setTimeout(() => {
        preloader.style.display = "none";
    }, 1500)

})