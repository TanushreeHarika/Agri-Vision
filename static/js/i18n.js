document.addEventListener('DOMContentLoaded', () => {
    let translations = {};
    const langSelector = document.getElementById('lang-selector');

    fetch('/static/js/i18n.json')
        .then(response => response.json())
        .then(data => {
            translations = data;
            const savedLang = localStorage.getItem('lang') || 'en';
            applyLanguage(savedLang);
            if (langSelector) langSelector.value = savedLang;
        });

    function applyLanguage(lang) {
        if (!translations[lang]) return;

        // Force translate all visible elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            translateElement(el, lang);
        });

        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }

    function translateElement(el, lang) {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'OPTION') {
                el.innerText = translations[lang][key];
            } else {
                // If the element has direct text, replace it
                // We check children to avoid deleting icons
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                        node.textContent = translations[lang][key];
                    }
                });
            }
        }
    }

    // Observer for dynamic content
    const observer = new MutationObserver((mutations) => {
        const lang = localStorage.getItem('lang') || 'en';
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.hasAttribute('data-i18n')) {
                        translateElement(node, lang);
                    }
                    node.querySelectorAll('[data-i18n]').forEach(el => translateElement(el, lang));
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }
});
