// Pair only the selected card title with the next page's h1. Navigation remains
// browser-owned; without this enhancement the CSS-only page fade still works.
(function () {
    if (!("onpageswap" in window) || !("onpagereveal" in window) || !window.navigation) return;

    const pendingKey = "riesinger:heading-transition";
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    window.addEventListener("pageswap", function (event) {
        if (!event.viewTransition || !event.activation || reducedMotion.matches) return;

        for (const title of document.querySelectorAll("[data-transition-title]")) {
            if (title.closest("a").href !== event.activation.entry.url) continue;

            // Hand off just this navigation's identity, never coordinates or HTML.
            // Storage may be unavailable; in that case retain the ordinary fade.
            try {
                sessionStorage.setItem(pendingKey, JSON.stringify({
                    from: location.href,
                    to: event.activation.entry.url,
                }));
            } catch {
                return;
            }

            title.style.viewTransitionName = "page-title";
            event.viewTransition.finished.then(function () {
                title.style.removeProperty("view-transition-name");
            });
            return;
        }
    });

    window.addEventListener("pagereveal", function (event) {
        let pending;
        try {
            const stored = sessionStorage.getItem(pendingKey);
            sessionStorage.removeItem(pendingKey);
            pending = stored ? JSON.parse(stored) : null;
        } catch {
            return;
        }

        if (!event.viewTransition || reducedMotion.matches ||
            pending?.to !== location.href ||
            pending?.from !== window.navigation?.activation?.from?.url) return;

        const title = document.querySelector("main h1");
        if (!title) return;

        title.style.viewTransitionName = "page-title";
        document.documentElement.dataset.headingTransition = "";
        event.viewTransition.finished.then(function () {
            title.style.removeProperty("view-transition-name");
            delete document.documentElement.dataset.headingTransition;
        });
    });
})();
