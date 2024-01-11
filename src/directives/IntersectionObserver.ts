export default {
    inserted(el: HTMLElement, binding:  any) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    binding.value(); // Invoke the provided callback when the element is in the viewport
                    observer.disconnect();
                }
            });
        }, options);

        observer.observe(el);
    },
};