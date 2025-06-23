const body= document.querySelector("body")
const buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target)
        if (e.target.id == "red") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "orange") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "purple") {
            body.style.backgroundColor = e.target.id;
        }
    });
});

