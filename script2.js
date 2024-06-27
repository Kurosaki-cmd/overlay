// script.js
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const content = document.getElementById('content');

    // Timeline for the animation
    const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
            content.classList.add('active');
            gsap.to(content, { duration: 1, opacity: 1, ease: "power2.out" });
        }
    });

    timeline
        .to(overlayImage, { 
            duration: 1.5, 
            scale: 1.2,
            borderRadius: "0%",
            ease: "power4.inOut"
        })
        .to(overlayImage, { 
            duration: 1.5, 
            scale: 10, 
            opacity: 0,
            ease: "expo.inOut" 
        }, "-=0.5")
        .to(overlay, { 
            duration: 1, 
            opacity: 0 
        }, "-=1");

    // Optional: Add some staggered text animations
    const textTimeline = gsap.timeline({ paused: true });
    textTimeline
        .fromTo('.content h1', { y: 20, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "power2.out" })
        .fromTo('.content p', { y: 20, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "power2.out" }, "-=0.5");

    timeline.eventCallback("onComplete", () => {
        content.classList.add('active');
        textTimeline.play();
    });
});