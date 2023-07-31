function initLottieAnimation(element) {
    const jsonPath = element.getAttribute("data-stat");

    let animation = lottie.loadAnimation({
        container: element,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: jsonPath,
    });

    return animation;
}

const animations = [];

document.querySelectorAll("[data-stat]").forEach((element) => {
    const animation = initLottieAnimation(element);
    animations.push(animation);
});

function playLottieAnimations() {
    let scrollPercentage = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);

    animations.forEach((animation) => {
        let animationFrame = scrollPercentage * animation.totalFrames;
        animation.goToAndStop(animationFrame, true);
    });
}

window.addEventListener("scroll", playLottieAnimations);