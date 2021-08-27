
let videoMobile = document.getElementById("banner-video-mobile")
let videoDesktop = document.getElementById("banner-video-desktop")




addEventListener("DOMContentLoaded", () => {
    console.log("Holaaa")


    setTimeout(() => {
        videoDesktop.play()
        videoMobile.play()
    }, 8000)
    

})