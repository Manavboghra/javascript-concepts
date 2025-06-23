const randomColor = () =>{
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(randomColor())

let interval;

document.querySelector("#start").addEventListener("click", () => {
    interval = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(interval);
});