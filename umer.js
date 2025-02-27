document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('input[type="search"]');
    
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();

        if (query) {
            alert(`You searched for: ${query}`);
        } else {
            alert('Please enter a search term!');
        }
    });

    const images = document.querySelectorAll('.gallery-container img');
    images.forEach(image => {
        image.addEventListener('mouseenter', function () {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s';
        });

        image.addEventListener('mouseleave', function () {
            image.style.transform = 'scale(1)';
        });
    });
});
