document.addEventListener('DOMContentLoaded', function() {
    // Image array
    const images = [
        'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1490718687940-0ecadf414600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGUlMjBhbmltYWxzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D',
        'https://media.istockphoto.com/id/958471082/photo/prime-lambs-on-green-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rcpv_oGptXSgYHZ9rrw2a1hMA_amjPHII31TZrLPp8Y='
    ];
    
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const autoPlayBtn = document.getElementById('auto-play-btn');
    const stopPlayBtn = document.getElementById('stop-play-btn');
    
    let currentIndex = 0;
    let slideInterval;
    let isAutoPlaying = false;
    
    // Initialize slider with images
    function initSlider() {
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = `Slide ${index + 1}`;
            slider.appendChild(imgElement);
        });
        
        updateSlider();
    }
    
    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Go to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }
    
    // Start auto play
    function startAutoPlay() {
        if (!isAutoPlaying) {
            slideInterval = setInterval(nextSlide, 3000);
            isAutoPlaying = true;
            autoPlayBtn.disabled = true;
            stopPlayBtn.disabled = false;
        }
    }
    
    // Stop auto play
    function stopAutoPlay() {
        clearInterval(slideInterval);
        isAutoPlaying = false;
        autoPlayBtn.disabled = false;
        stopPlayBtn.disabled = true;
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        if (isAutoPlaying) {
            stopAutoPlay();
            startAutoPlay(); // Reset the interval
        }
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        if (isAutoPlaying) {
            stopAutoPlay();
            startAutoPlay(); // Reset the interval
        }
    });
    
    autoPlayBtn.addEventListener('click', startAutoPlay);
    stopPlayBtn.addEventListener('click', stopAutoPlay);
    
    // Initialize the slider
    initSlider();
    
    // Start auto play by default (optional)
    // startAutoPlay();
});