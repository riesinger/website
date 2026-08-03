// Progressive enhancement for the archive: filter entries by tag in place.
// Without JS the filter bar stays hidden and the full list is shown.
(function () {
    var bar = document.querySelector(".filter-bar");
    var list = document.querySelector(".entries");
    if (!bar || !list) return;

    var buttons = Array.prototype.slice.call(bar.querySelectorAll("button"));
    var entries = Array.prototype.slice.call(list.querySelectorAll(".entry"));
    var empty = document.querySelector(".filter-empty");

    function apply(active) {
        var shown = 0;
        entries.forEach(function (entry) {
            var tags = (entry.dataset.tags || "").split(",");
            var match = !active || tags.indexOf(active) !== -1;
            entry.hidden = !match;
            if (match) shown += 1;
        });
        if (empty) empty.hidden = shown > 0;
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (other) {
                other.setAttribute("aria-pressed", other === button ? "true" : "false");
            });
            apply(button.dataset.tag || "");
        });
    });

    bar.classList.add("is-ready");
})();
