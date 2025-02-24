document.addEventListener("DOMContentLoaded", function() {
    // Handle button clicks
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            alert(this.innerText + " clicked!");
        });
    });

    // Testimonial slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});