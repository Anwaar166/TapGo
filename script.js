
// ==========================================
// Select Elements
// ==========================================

const storySection = document.querySelector("main");
const machine = document.querySelector(".machine");
// ==========================================
// Scroll Event
// ==========================================

window.addEventListener("scroll", () => {

    const rect = storySection.getBoundingClientRect();

    // Start animation only when the section reaches the navbar
    // Change 80 to your navbar height
    if (rect.top <= 100) {

        updateStory();

    }

});

// ==========================================
// Story Function
// ==========================================

function updateStory() {

    // Calculate section position
    const rect = storySection.getBoundingClientRect();

    const sectionTop = window.scrollY + rect.top;

    // Scroll amount inside this section
    const scrollInside = window.scrollY - sectionTop + 80;

    // Progress (0 → 1)
    let progress = scrollInside /
        (storySection.offsetHeight - window.innerHeight);

    // Clamp between 0 and 1
    progress = Math.max(0, Math.min(progress, 1));



    // ==========================================
    // Scene 1 (0% - 20%)
    // ==========================================

    if (progress <= 0.20) {

        const p = progress / 0.20;

        // Add your animation here
        machine.style.animation="moveRight 1.15s ease forwards"

    }



    // ==========================================
    // Scene 2 (20% - 40%)
    // ==========================================

    else if (progress <= 0.40) {

        const p = (progress - 0.20) / 0.20;

        // Add your animation here
                machine.style.animation="moveLeft 1.15s ease forwards"


    }



    // ==========================================
    // Scene 3 (40% - 60%)
    // ==========================================

    else if (progress <= 0.60) {

        const p = (progress - 0.40) / 0.20;

        // Add your animation here
        machine.style.animation="moveRight2 1.15s ease forwards"

    }




    // ==========================================
    // Scene 4 (60% - 80%)
    // ==========================================

    else if (progress <= 0.80) {

        const p = (progress - 0.60) / 0.20;

        // Add your animation here
        machine.style.animation="moveLeft 1.15s ease forwards"


    }
    
    else {

    

    }

}