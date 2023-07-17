const FORM = document.getElementById("form");
const BOX_FORM = document.getElementById("box__form");
const ANIMATE_SHAKEX = "animate-shakeX";
const INPUTS = document.querySelectorAll("input[name=contact], input[name=password]");

// configuração dos eventos
FORM.addEventListener("submit", handlerSubmit);
BOX_FORM.addEventListener("animationend", handlerAnimation);
INPUTS.forEach(input => input.addEventListener("input", handlerInput))

// Evento de entrada de dados
function handlerInput(event) {
    const validate = validator();

    const input = event.target;
    const label = input.closest("label");

    const validInput = !validate[input.name](input);
    showStatus(label, validInput);
}

// Evento de submissão de formulário
function handlerSubmit(evt) {
    evt.preventDefault();

    const formInputs = evt.target.querySelectorAll("input[name=contact], input[type=password]");
    const validate = validator();
    let containsError = false;

    for (const input of Array.from(formInputs)) {

        if (!validate[input.name]) continue;

        const label = input.closest("label");

        const validInput = !validate[input.name](input);

        containsError = validInput || containsError;

        showStatus(label, validInput);
    }

    if (containsError) {
        BOX_FORM.classList.add(ANIMATE_SHAKEX);
    }else {
        alert("Formulário submetido!");
        startconfetti();
    }
}

// Evento de animação
function handlerAnimation(evt) {
    if (evt.animationName === "shakeX") {
        BOX_FORM.classList.remove(ANIMATE_SHAKEX);
    }
}

// Validação
function validator() {

    function validateContact(input) {
        const { value } = input;

        const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(value);
        const isValidTel = /^(\+[0-9]{2,3})?9[123459]\d{7}$/.test(input.value);

        return isValidEmail || isValidTel;
    }

    function validatePassword(input) {
        const { value } = input;

        const isValidPassword = /[a-zA-Z0-9]{8,}/.test(value);

        return isValidPassword;
    }

    return {
        contact: validateContact,
        password: validatePassword
    }
}

// Estado do input
function showStatus(label, error = true) {

    const status = label.querySelectorAll(".status");
    status.forEach(s => s.style.display = "");

    if (error) {
        status[0].style.display = "inline";
    } else {
        status[1].style.display = "inline";
    }
}