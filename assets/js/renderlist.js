function hasKeyboardOrMouseInput() {
    return window.matchMedia('(any-pointer: fine)').matches ||
        window.matchMedia('(hover: hover)').matches ||
        localStorage.getItem('hasKeyboardInput') === 'true';
}

function isTouchDevice() {
    const hasTouch = navigator.maxTouchPoints > 0 || window.matchMedia('(any-pointer: coarse)').matches;
    return hasTouch && !hasKeyboardOrMouseInput();
}

document.addEventListener('keydown', function () {
    localStorage.setItem('hasKeyboardInput', 'true');
}, { once: true });

function applyTouchGameHints() {
    return;
}

async function refreshStatusText() {
    const desc = document.getElementById('desc');
    if (!desc) return;

    const fallbackWords = [
        'Are you sure about that?',
        'We are going to need a bigger boat.',
        'If you came here for a study guide, you should leave.',
        'Definitely not clickbait!',
        "Have you done your homework? Didn't think so.",
        'Yep, you found it.',
        'Made in England!',
        'You can submit ideas in the Q/A page!',
        'Always listening...',
        "We're back! Did you miss us?",
        'Now with tab cloaker!',
        'JustNotStudying'
    ];

    try {
        const response = await fetch(`assets/data/statusWords.json?v=${Date.now()}`, { cache: 'no-store' });
        if (!response.ok) throw new Error('Failed to load status words');

        const words = await response.json();
        const safeWords = words.filter(word => !word.includes('for all the people saying i did not make this'));
        const array = safeWords.length ? safeWords : fallbackWords;
        desc.textContent = array[Math.floor(Math.random() * array.length)];
    } catch (error) {
        desc.textContent = fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
    }
}

function openGameWithHome(url) {
    window.location.href = url;

    setTimeout(() => {
        try {
            const script = document.createElement('script');
            script.src = '/assets/js/game-home-button.js';
            document.body.appendChild(script);
        } catch (e) {}
    }, 500);
}

function configureGameLink(link, item) {
    if (isTouchDevice()) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            openGameWithHome(item.url);
        });
    }
}

function renderList(sort_type) {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "block";

    let container = null;
    document.getElementById("itembox").textContent = '';
    document.getElementById("category-container").textContent = '';

    if (sort_type === 'category') {
        container = document.getElementById("category-container");
        document.getElementById("SortList").innerHTML = "Sort by - Category";
        localStorage.setItem("sort_type", JSON.stringify(true));
    } else {
        container = document.getElementById("itembox");
        localStorage.setItem("sort_type", JSON.stringify(false));
        document.getElementById("SortList").innerHTML = "Sort by - Alphabetical";
    }

    fetch('assets/data/index.json')
        .then(response => response.json())
        .then(data => {
            if (sort_type === 'category') {
                data.sort((a, b) => a.category.localeCompare(b.category));
            } else {
                data.sort((a, b) => a.name.localeCompare(b.name));
            }

            const categoryMap = {
                "Gym Class": "Platformers & Skill",
                "Pen & Paper": "Logic & Strategy",
                "Recess": "Calm & Relaxing",
                "Science Lab": "Experimentation & Planning",
                "Sports Club": "Racing & Sports",
                "Music Room": "Rhythm & Music",
                "Math Class": "App & Extra"
            };

            container.textContent = '';

            if (sort_type === 'category') {
                Object.entries(categoryMap).forEach(([category, displayName]) => {
                    const categoryText = document.createElement("h3");
                    categoryText.classList.add("white-text", "category-text");
                    categoryText.id = `itembox_${category}-text`;
                    categoryText.innerText = displayName;
                    categoryText.style.textAlign = 'left';
                    container.appendChild(categoryText);

                    const categoryContainer = document.createElement("div");
                    categoryContainer.id = `itembox_${category}`;
                    categoryContainer.style.marginBottom = '20px';
                    categoryContainer.classList.add("row", "row-cols-3", "category-container");
                    container.appendChild(categoryContainer);
                });
            }

            data.forEach((item, index) => {
                const listItem = document.createElement("a");
                listItem.classList.add("griditem");
                listItem.href = item.url;
                listItem.innerHTML = `
                    <div class="card_margin">
                        <div class="col zoom-effect">
                            <img src="${item.img}" class="img-fluid grid-img img-hover-shadow" style="border-radius: 1vw;" alt="${item.name}">
                            <p class="text-center listing-text">${item.name}</p>
                        </div>
                    </div>`;

                configureGameLink(listItem, item);

                const img = listItem.querySelector("img");
                img.loading = "lazy";
                img.fetchPriority = index < 5 ? "high" : "auto";

                if (sort_type === 'category') {
                    const categoryElement = document.getElementById(`itembox_${item.category}`);
                    if (categoryElement) {
                        categoryElement.appendChild(listItem);
                    } else {
                        console.error(`Category container for "${item.category}" not found.`);
                    }
                } else {
                    container.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error("Error:", error))
        .finally(() => {
            if (loader) loader.style.display = "none";
        });
}

document.addEventListener('DOMContentLoaded', function () {
    renderList(JSON.parse(localStorage.getItem("sort_type")) ? 'category' : 'name');
    applyTouchGameHints();
    refreshStatusText();

    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";

    setTimeout(() => {
        document.body.classList.add("page-ready");
    }, 100);
});
