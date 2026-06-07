// Scroll animations

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

}, {
    threshold:0.15
});

document.querySelectorAll('.section').forEach(section => {

    observer.observe(section);

});

// Feature buttons

document.querySelectorAll('.showcase').forEach(showcase => {

    const overlay = showcase.querySelector('.overlay');
    const title = showcase.querySelector('.overlay-title');
    const text = showcase.querySelector('.overlay-text');
    const close = showcase.querySelector('.close-btn');

    showcase.querySelectorAll('.feature-btn').forEach(button => {

        button.addEventListener('click', () => {

            title.textContent = button.dataset.title;
            text.textContent = button.dataset.text;

            overlay.classList.add('active');

        });

    });

    close.addEventListener('click', () => {

        overlay.classList.remove('active');

    });

});