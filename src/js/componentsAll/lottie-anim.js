function lotti() {

    function loadLottieAnimation(block) {
        const jsonPath = block.getAttribute("data-json");

        return lottie.loadAnimation({
            container: block,
            path: jsonPath,
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    }

    function handleScrollAnimation(animation, startPercentage, endPercentage) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const animationTriggerStart = maxScroll * (startPercentage / 100);
        const animationTriggerEnd = maxScroll * (endPercentage / 100);

        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition >= animationTriggerStart && scrollPosition <= animationTriggerEnd) {
                const adjustedScrollPosition = scrollPosition - animationTriggerStart;
                const adjustedMaxScroll = animationTriggerEnd - animationTriggerStart;
                const scrollProgress = adjustedScrollPosition / adjustedMaxScroll;
                animation.goToAndStop(scrollProgress * animation.totalFrames, true);
            } else if (scrollPosition < animationTriggerStart) {
                animation.goToAndStop(0, true);
            } else {
                animation.goToAndStop(animation.totalFrames - 1, true);
            }
        });
    }

    const animBlocks = Array.from(document.querySelectorAll("[data-json]"));
    animBlocks.forEach((block, index) => block.id = `anim-block${index + 1}`);

    const lottieAnimations = animBlocks.map(loadLottieAnimation);

    animBlocks.forEach((block, index) => {
        if (block.hasAttribute("data-scroll")) {
            const startPercentage = parseInt(block.getAttribute("data-scroll-start")) || 60;
            const endPercentage = parseInt(block.getAttribute("data-scroll-end")) || 70;
            handleScrollAnimation(lottieAnimations[index], startPercentage, endPercentage);
        }
    });

}

lotti();