document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector(".container"),
        smooth: true
    });
    
    gsap.to(".hero", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".projects", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".container", {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
    
    // Preview Hover Effect
    document.querySelectorAll(".project-item").forEach(item => {
        item.addEventListener("mouseover", function () {
            const preview = document.querySelector(".preview");
            preview.innerHTML = `<video src="${this.dataset.video}" autoplay loop muted></video>`;
            preview.style.opacity = 1;
            this.style.opacity = 0;
        });
        item.addEventListener("mouseleave", function () {
            const preview = document.querySelector(".preview");
            preview.innerHTML = `<img src="${this.dataset.preview}" alt="Project Preview">`;
            preview.style.opacity = 1;
            this.style.opacity = 1;
        });
    });
});
