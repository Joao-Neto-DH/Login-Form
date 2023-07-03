const form = document.getElementById("form");
const boxForm = document.getElementById("box__form");
const animateShakeX = "animate-shakeX";

form.addEventListener("submit", handleSubmit);
boxForm.addEventListener("animationend", handleAnimation);

function handleSubmit(evt) {
    evt.preventDefault();

    const inputsContact = form.querySelectorAll("[type=text], [type=email]");

    for (const input of Array.from(inputsContact)) {
        const label = input.closest("label");
        if (!validateContact(input)) {
            showStatus(label);
        }else{
            showStatus(label, false);
        }
    }


    boxForm.classList.add(animateShakeX);
}

function handleAnimation(evt) {
    if (evt.animationName === "shakeX") {
        boxForm.classList.remove(animateShakeX);
    }
}

function validateContact(input) {
    const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(input.value);
    const isValidTel = /^(\+244)?9[123459]\d{7}$/.test(input.value);

    return  isValidEmail || isValidTel;
}

function showStatus(label, error = true) {
    const status = label.querySelectorAll(".status");
    status.forEach(s=>s.style.display = "");

    if (error) {
        status[0].style.display = "inline";
    } else {
        status[1].style.display = "inline";
    }
}