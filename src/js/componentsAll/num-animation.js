document.addEventListener("DOMContentLoaded", function () {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function animateValue(obj, start, end, duration, suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = numberWithCommas(Math.floor(progress * (end - start) + start)) + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const numObj = entry.target;
                const value = numObj.getAttribute("data-value");
                const endValue = parseInt(value.replace(/[,+%$]/g, ""));
                const suffix = value.replace(/[0-9,]/g, '');
                animateValue(numObj, 0, endValue, 2000, suffix);
                observer.unobserve(numObj);
            }
        });
    });

    const numbers = document.querySelectorAll(".advanrages-item h3");
    numbers.forEach((num) => {
        num.setAttribute("data-value", num.textContent);
        num.textContent = "0";
        observer.observe(num);
    });
});




/* <div class="advanrages col-3">
    <div class="advanrages-item">
        <h3 data-value="$15,000,000"
            class="fz28">$15,000,000</h3>
        <p class="fz16">savings in enhanced productivity and reduced recruiting expenses</p>
    </div>
    <div class="advanrages-item">
        <h3 data-value="360,000+"
            class="fz28">360,000+</h3>
        <p class="fz16">unlocked hours</p>
    </div>
    <div class="advanrages-item">
        <h3 data-value="80%"
            class="fz28">80%</h3>
        <p class="fz16">of employees would recommend Gloat</p>
    </div>
</div> */