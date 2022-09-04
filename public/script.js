const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Taking a screenshot`;
});