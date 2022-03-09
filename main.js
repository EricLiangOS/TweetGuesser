let answer = Math.floor(Math.random() * 4) + 1;
let done = false;
const reset = document.getElementById("reset");


function checkAnswer(text) {
    if (done) {
        return;
    }
    if (text != answer) {
        document.getElementById(text).classList.add("red-background");
    }

    document.getElementById(answer).classList.add("green-background");


    buttons.forEach(button => {
        button.classList.add("ignore");
    })
    reset.style.display = "block";
    done = true;
}

const buttons = document.querySelectorAll('.choice-box');

function resetButtons() {
    buttons.forEach(button => {
        document.getElementById(button.id).classList.remove("red-background");
        document.getElementById(button.id).classList.remove("green-background");
        document.getElementById(button.id).classList.remove("ignore");
        
    })
    done = false;
    reset.style.display = "none";
    answer = Math.floor(Math.random() * 4) + 1;


}

reset.addEventListener("click", ()=>{
    resetButtons();
})


buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        checkAnswer(button.id);
    })
})



