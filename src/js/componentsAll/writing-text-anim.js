const animText = document.querySelector('.anim-text');
const spans = animText.querySelectorAll('span');
const originalTexts = Array.from(spans, span => span.textContent);

const animationDuration = 1;
const pauseDuration = 0.5;

function createTypingAnimation(target, index, onComplete) {
    target.textContent = '';
    target.style.display = 'inline';

    gsap.to(target, {
        duration: animationDuration,
        text: originalTexts[index],
        ease: 'none',
        onComplete,
    });
}

function createDeletingAnimation(target, onComplete) {
    const originalText = target.textContent;
    const charDuration = animationDuration / originalText.length;

    function deleteChar() {
        if (target.textContent.length === 0) {
            target.style.display = 'none';
            onComplete();
            return;
        }

        target.textContent = target.textContent.slice(0, -1);
        gsap.delayedCall(charDuration, deleteChar);
    }

    deleteChar();
}

function animateSpan(index) {
    if (index >= spans.length) {
        index = 0;
    }

    const span = spans[index];
    const nextIndex = (index + 1) % spans.length;

    createTypingAnimation(span, index, () => {
        setTimeout(() => {
            createDeletingAnimation(span, () => {
                animateSpan(nextIndex);
            });
        }, pauseDuration * 1000);
    });
}


for (let i = 1; i < spans.length; i++) {
    spans[i].style.display = 'none';
}

animateSpan(0);