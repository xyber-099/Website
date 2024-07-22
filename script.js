document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector('.animated-heading');
    const text = heading.textContent;
    heading.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        if (char === ' ') { span.innerHTML = '&nbsp;'; }
        else { span.textContent = char; }
        heading.appendChild(span);
    });
});