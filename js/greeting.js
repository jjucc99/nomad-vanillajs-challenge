const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERANME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERANME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreeting();
}

const savedUsername = localStorage.getItem(USERANME_KEY);

function paintGreeting() {
  const savedUsername = localStorage.getItem(USERANME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${savedUsername}`;
}

// 이 로직은 프로그램이 새로고침를 하면 바로 실행된다.
// 때문에 새로고침을 할 때마다 값을 찾는 로직은 이미 완성되 있다.

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting();
}
