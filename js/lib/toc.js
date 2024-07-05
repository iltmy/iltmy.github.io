document.addEventListener("DOMContentLoaded", function() {
    tocbot.init({
        tocSelector: '#toc',
        contentSelector: '.article',
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        scrollSmooth: true,
    });
});
