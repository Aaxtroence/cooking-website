document.addEventListener("DOMContentLoaded", function () {
    const images = {
        "nav-first": ["images/first_courses.jpg", "images/first_courses2.jpg", "images/first_courses3.jpg"],
        "nav-second": ["images/second_courses.jpg", "images/second_courses2.jpg", "images/second_courses3.jpg"],
        "nav-desserts": ["images/desserts.jpg", "images/desserts2.jpg", "images/desserts3.jpg"]
    };

    const indices = {
        "nav-first": 0,
        "nav-second": 0,
        "nav-desserts": 0
    };

    function updateImage(navClass) {
        const element = document.querySelector(`.${navClass}`);
        indices[navClass] = (indices[navClass] + 1) % images[navClass].length;
        element.style.backgroundImage = `url('${images[navClass][indices[navClass]]}')`;
    }

    updateImage("nav-first");
    setTimeout(() => updateImage("nav-second"), 2000);
    setTimeout(() => updateImage("nav-desserts"), 4000);

    setInterval(() => {
        updateImage("nav-first");
        setTimeout(() => updateImage("nav-second"), 2000);
        setTimeout(() => updateImage("nav-desserts"), 4000);
    }, 6000);
});
