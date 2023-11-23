const elements = Array.from(document.querySelectorAll(".image-container img, .image-container video"));
let currentIndex = 0;
let lastScrollTime = Date.now();
const scrollThreshold = 1200; // Set the time threshold (in milliseconds)

// Shuffle the elements randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(elements);

document.addEventListener('wheel', function (e) {
    const currentTime = Date.now();

    // Check if enough time has passed since the last scroll event
    if (currentTime - lastScrollTime >= scrollThreshold) {
        lastScrollTime = currentTime;

        if (e.deltaY > 0) {
            // Scrolling down
            if (currentIndex < elements.length - 1) {
                elements[currentIndex].style.zIndex = 0;// Reset the current element
                currentIndex++;
                elements[currentIndex].style.zIndex = 100; // Bring the next element to the front
                elements[currentIndex].style.display = 'block';
            }
        } else if (e.deltaY < 0) {
            // Scrolling up
            if (currentIndex > 0) {
                elements[currentIndex].style.zIndex = 0; // Reset the current element
                currentIndex--;
                elements[currentIndex].style.zIndex = 100; // Bring the previous element to the front
            }
        }
    }
});





// Click function opening the about page
document.querySelector('.borders').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.return').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
});