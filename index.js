const mainPage = document.getElementById("main-page");
const hiddenPage = document.getElementById("thanks-section");
const emailInput = document.getElementById("email-input");
const subButton = document.getElementById("sub-btn");
const disButton = document.getElementById("dismiss-btn");
const span = document.getElementById("span-msg")

function emailCheck(email){
    if (email.indexOf('@') === -1) {
       span.style.display = 'block';
       emailInput.style.border = '1px solid var(--Tomato)';
       emailInput.style.backgroundColor = 'var(--Tomato2)'
    } else {
        clean();
        mainPage.style.display = 'none'
        hiddenPage.style.display = 'block'
    }
}

function clean() {
    span.style.display = 'none';
       emailInput.style.border = '1px solid var(--Grey)'
       emailInput.style.backgroundColor = 'var(--White)'
}

subButton.addEventListener('click', () => {
    emailCheck(emailInput.value);
});

disButton.addEventListener('click', () => {
    mainPage.style.display = 'flex'
    hiddenPage.style.display = 'none'
})