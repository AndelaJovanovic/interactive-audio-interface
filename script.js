window.addEventListener("load", () => {
    const audios = document.querySelectorAll(".audio")
    const rectangles = document.querySelectorAll(".rectangles div")

    console.log(audios)

    rectangles.forEach((rectangle, item) => {
        rectangle.addEventListener("click", function() {
            audios[item].play()
        })
    })

})
