const heart = document.querySelector(".heart");
let stage = 0;

setInterval(() => {
    if (stage === 0) {
        heart.style.transform = "scale(1.5) rotate(-80deg)";
        heart.style.backgroundColor = "blue";
        stage = 1;
    } else {
        heart.style.transform = "scale(1) rotate(-20deg)";
        heart.style.backgroundColor = "red";
        stage = 0;
    } else if {
        heart.style.transform = "scale(2.5) rotate(-10deg)";
        heart.style.backgroundColor = "green";
        stage = 0;
    }
}, 2000);