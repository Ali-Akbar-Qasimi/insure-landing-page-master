let nav = document.querySelector('nav')
let menu = document.querySelector('.menu')

menu.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

// changing the images
let heroImage = document.querySelector('.hero-image img')
let backgroundPattern = document.querySelector('.background-pattern')
changeImages()
window.addEventListener('resize',changeImages)
function changeImages(){
    if(window.innerWidth >= 786){
        heroImage.src = './images/image-intro-desktop.jpg'
        backgroundPattern.src = './images/bg-pattern-intro-left-desktop.svg'
    }else{
        heroImage.src = './images/image-intro-mobile.jpg'
        backgroundPattern.src = './images/bg-pattern-intro-right-mobile.svg'
    }
}