const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const adviceBtn = document.querySelector('.dice');

const url = 'https://api.adviceslip.com/advice';

async function genAdvice() {
    const adv = await fetch(url);
    const {slip:{id,advice}} = await adv.json();
    adviceId.innerHTML = `#${id}`;
    adviceText.innerText = advice;
}
genAdvice();

adviceBtn.addEventListener('click', genAdvice);