
let videoMobile = document.getElementById("banner-video-mobile")
let videoDesktop = document.getElementById("banner-video-desktop")
let preloader = document.getElementById("preloader-box")
let imgAbout = document.getElementById("img-about")

document.body.style.overflow = "hidden"


addEventListener("DOMContentLoaded", () => {
    console.log("Holaaa")


    setTimeout(() => {
        videoDesktop.play()
        videoMobile.play()
    }, 8000)
    

    setTimeout(() => {
        preloader.style.display = "none";
        document.body.style.overflow = "auto"        
    }, 1200)

})

addEventListener("scroll", () => {
    
    let scroll = window.scrollY

    if(scroll > 430){
        imgAbout.classList.add("animate__fadeInRight")
    }else{
        imgAbout.classList.remove("animate__fadeInRight")
    }

    


    console.log(scroll)

})