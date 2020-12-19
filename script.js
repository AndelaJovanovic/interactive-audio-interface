window.addEventListener("load", () => {
    const audios = document.querySelectorAll(".audio")
    const rectangles = document.querySelectorAll(".rectangles div")
    const player = document.querySelector(".player")
    const shades = [
        "#70D6FF",
        "#FF70A6",
        "#FF9770",
        "#FFD670",
        "#E9FF70",
        "#333533"
    ]
    console.log(audios)

    rectangles.forEach((rectangle, item) => {
        rectangle.addEventListener("click", function() {
            audios[item].currentTime = 0
            audios[item].play()
            createHeart(item)
        })
    })

const createHeart = (item) => {
    const heart = document.createElement("div")
    player.appendChild(heart)
    heart.style.backgroundColor = shades[item]
    heart.style.animation = `bounce 2s ease`
    heart.addEventListener("animationend", function() {    
    })
}
})
