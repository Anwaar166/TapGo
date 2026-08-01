
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

`;
intro.style.opacity = 1;

right1.style.opacity = 0;

left1.style.opacity = 0;

right2.style.opacity = 0;

left2.style.opacity = 0;
// ==========================================
// Scroll Event
// ==========================================

window.addEventListener("scroll", () => {

    updateStory();

});

function animateContent(element, progress) {

    progress = Math.max(0, Math.min(progress, 1));

    element.style.opacity = progress;



}

function hideContent(element, progress) {

    progress = Math.max(0, Math.min(progress, 1));

    element.style.opacity = 1 - progress;

}

// ==========================================
// Story Function
// ==========================================

function updateStory() {

    // Calculate section position
    const rect = storySection.getBoundingClientRect();

    const sectionTop = window.scrollY + rect.top+100;

    // Scroll amount inside this section
    const scrollInside = window.scrollY - sectionTop;

    // Progress (0 → 1)
    let progress = scrollInside /
        (storySection.offsetHeight - window.innerHeight);

    // Clamp between 0 and 1
    progress = Math.max(0, Math.min(progress, 1));



    // ==========================================
    // Scene 1 (0% - 25%)
    // ==========================================

    if (progress <= 0.25) {

        let p = (progress) / 0.1;

        p = Math.max(0, Math.min(p, 1));
        const rotate = 50 - (50 * p);
        // const scale =1.20-(.5*p);

        machine.style.transform = `
        perspective(1600px)
        rotateX(${rotate}deg)
    
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

        const translate = 300 - (600 * p);

        machine.style.transform = `
        perspective(1600px)
        rotateX(0deg)
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

        const translate = -300 + (600 * p);
        machine.style.transform = `
        perspective(1600px)
        rotateX(0deg)
        
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

        const translate = 300 - (600 * p);

        machine.style.transform = `
        perspective(1600px)
        rotateX(0deg)
        
    `;
        hideContent(right2, p);

        animateContent(left2, p);


    }
    // ==========================================
    // Scene 5 (80% - 100%)
    // ==========================================


const students=[

"Ali",

"Ahmed",

"Bilal"

];
}element.map((fruits)=>{

})