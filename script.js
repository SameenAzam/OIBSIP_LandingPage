document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-light');
        header.classList.remove('bg-dark');
    } else {
        header.classList.add('bg-dark');
        header.classList.remove('bg-light');
    }
});

window.onload = () => {
    const headingElement = document.getElementById('dynamic-heading');
    const paragraphElement = document.getElementById('dynamic-paragraph');

    // Add the sliding effect class to the elements
    headingElement.classList.add('slide-up-effect');
    paragraphElement.classList.add('slide-up-effect');
};

