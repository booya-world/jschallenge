const loginInput = document.getElementById("login-form__input");
const loginSubmit = document.getElementById("login-form__submit");
const loginForm = document.getElementById("login-form");
const greeting = document.getElementById("greeting");


function handleSubmit(event){
    event.preventDefault();
    const username_input = loginInput.value;
    localStorage.setItem("username", username_input);
    paintGreeting(my_username);
}

function paintGreeting(my_username){
    greeting.innerText = `Hello, ${my_username}`;
}

const my_username = localStorage.getItem("username");

if (my_username === null){
    loginForm.classList.remove("hidden");
    loginSubmit.addEventListener("click", handleSubmit);
} else {
    paintGreeting(my_username);
}
