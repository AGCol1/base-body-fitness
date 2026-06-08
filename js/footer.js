document.addEventListener('DOMContentLoaded', () => {

    const footerContainer =
        document.getElementById('footer-container');

    if (!footerContainer) return;

    let footerPath = '';

    if (
        window.location.pathname.includes('/pages/')
    ) {

        footerPath = '../../components/footer.html';

    } else {

        footerPath = 'components/footer.html';

    }

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {

            footerContainer.innerHTML = data;

        });

});