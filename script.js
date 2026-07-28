
// ==========================================
// Select Elements
// ==========================================

const storySection = document.querySelector("main");
const machine = document.querySelector(".machine");
const intro = document.querySelector(".intro");

const right1 = document.querySelector(".right1");
const left1 = document.querySelector(".left1");
const right2 = document.querySelector(".right2");
const left2 = document.querySelector(".left2");
machine.style.transform = `
    perspective(1600px)
    rotateX(50deg)
    translateY(0)
    translateX(0)
`;
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

    // ==========================================
// Scene 1 (0% - 25%)
// ==========================================

if (progress <= 0.25) {

    let p = (progress - 0.10) / 0.05;

    p = Math.max(0, Math.min(p, 1));

    const rotate = 50 - (50 * p);
    const translate = 250 * p;

    machine.style.transform = `
        perspective(1600px)
        rotateX(${rotate}deg)
        translateY(0)
        translateX(${translate}px)
    `;

     intro.classList.add("hide");
showContent(right1);

   
}
// ==========================================
// Scene 2 (25% - 50%)
// ==========================================

else if (progress <= 0.50) {
       


    let p = (progress - 0.35) / 0.05;

    p = Math.max(0, Math.min(p, 1));

    const translate = 250 - (500 * p);

    machine.style.transform = `
        perspective(1600px)
        rotateX(0deg)
        translateX(${translate}px)
       
    `;

  
}

// ==========================================
// Scene 3 (50% - 75%)
// ==========================================

else if (progress <= 0.75) {

    let p = (progress - 0.60) / 0.05;

    p = Math.max(0, Math.min(p, 1));

    const translate = -250 + (500 * p);

    machine.style.transform = `
        perspective(1600px)
        rotateX(0deg)
        translateX(${translate}px)
        
    `;

   
}
// ==========================================
// Scene 4 (75% - 100%)
// ==========================================

else {

    let p = (progress - 0.85) / 0.05;

    p = Math.max(0, Math.min(p, 1));

    const translate = 250 - (500 * p);

    machine.style.transform = `
        perspective(1600px)
        rotateX(0deg)
        translateX(${translate}px)
        
    `;

    
}
// ==========================================
// Scene 5 (80% - 100%)
// ==========================================


    
}