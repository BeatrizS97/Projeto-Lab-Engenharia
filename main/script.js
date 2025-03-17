document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".animate-text");

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-btn").addEventListener("click", function() {
        window.location.href = 'introducao.html';
    });
});