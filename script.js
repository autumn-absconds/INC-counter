const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        const start = +counter.innerHTML;
        const incr = targetCount / 100;
        if (start < targetCount) {
            counter.innerHTML = `${Math.round(start + incr)}`;
            setTimeout(updateCounter, 40);
        }
    }
    updateCounter();
})