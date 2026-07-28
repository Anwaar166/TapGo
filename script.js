
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

// ==========================================
// Initial States
// ==========================================
machine.style.transform = `
    perspective(1600px)
    rotateX(50deg)
    translateY(0)
    translateX(0)
`;
intro.style.opacity = 1;
intro.style.transform = "translateY(0)";
intro.style.filter = "blur(0)";

right1.style.opacity = 0;
right1.style.transform = "translateY(80px)";
right1.style.filter = "blur(8px)";

left1.style.opacity = 0;
left1.style.transform = "translateY(80px)";
left1.style.filter = "blur(8px)";

right2.style.opacity = 0;
right2.style.transform = "translateY(80px)";
right2.style.filter = "blur(8px)";

left2.style.opacity = 0;
left2.style.transform = "translateY(80px)";
left2.style.filter = "blur(8px)";
// ==========================================
// Scroll Event
// ==========================================

window.addEventListener("scroll", () => {

        updateStory();
    
});

function animateContent(element, progress){

    progress = Math.max(0, Math.min(progress,1));

    element.style.opacity = progress;

    element.style.transform =
        `translateY(${80-(80*progress)}px)`;

    element.style.filter =
        `blur(${8-(8*progress)}px)`;

}

function hideContent(element,progress){

    progress = Math.max(0, Math.min(progress,1));

    element.style.opacity = 1-progress;

    element.style.transform =
        `translateY(${-80*progress}px)`;

    element.style.filter =
        `blur(${8*progress}px)`;

}
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
    hideContent(intro, p);

animateContent(right1, p);

    

   
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
    hideContent(right1, p);

animateContent(left1, p);

  
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
    hideContent(left1, p);

animateContent(right2, p);

   
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
    hideContent(right2, p);

animateContent(left2, p);

    
}
// ==========================================
// Scene 5 (80% - 100%)
// ==========================================


    
}