let ismobile = false;

if (window.innerWidth < 1024) {
    ismobile = true;
}


const initSmoothAppearance = (selector, animationOptions = {}) => {
    const defaultOptions = {
        opacity: 0,
        duration: 1,
        ease: 'linear',
    };

    const options = { ...defaultOptions, ...animationOptions };

    gsap.utils.toArray(selector).forEach((element, index) => {
        const staggerDelay = index * (animationOptions.stagger || 0);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: `top ${ismobile ? '75%' : '85%'}`,
            },
        });

        tl.from(element, {
            delay: staggerDelay,
            ...options,
            x: options.x || 0,
            duration: options.duration || 1,
        });
    });
};

initSmoothAppearance('.about-anim', { y: 50, opacity: 0, stagger: 0.3 });

/* initSmoothAppearance('.advantages-item', { y: -50, opacity: 0, stagger: 0.3 }); */