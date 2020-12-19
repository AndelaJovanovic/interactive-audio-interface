window.addEventListener("load", () => {
    const audio = document.querySelectorAll(".audio")
    const rectangles = document.querySelectorAll(".rectangles div")

    rectangles.forEach(rectangle => {
        rectangle.addEventListener("click", function() {
            audio[2]
        })
    })

})