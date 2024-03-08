const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

const wrapperRect = wrapper.getBoundingClientRect();

const noRect = no.getBoundingClientRect();

yes.addEventListener('click', () => {
    question.innerHTML = 'Programming loves you too!';
});

no.addEventListener('mouseover', () => {
    const x = Math.random() * (wrapperRect.width - noRect.width);
    const y = Math.random() * (wrapperRect.height - noRect.height);

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
});