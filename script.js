(function () {
    var itens = document.querySelectorAll(".revelar");

    // navegador antigo: mostra tudo de uma vez
    if (!("IntersectionObserver" in window)) {
        itens.forEach(function (item) { item.classList.add("visivel"); });
        return;
    }

    var observador = new IntersectionObserver(function (entradas) {
        // os que entram juntos aparecem em sequência, com 120 ms de diferença
        var entrando = entradas.filter(function (e) { return e.isIntersecting; });

        entrando.forEach(function (entrada, posicao) {
            entrada.target.style.animationDelay = (posicao * 120) + "ms";
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);   // anima só uma vez
        });
    }, {
        threshold: 0.15   // basta 15% do card aparecer
    });

    itens.forEach(function (item) { observador.observe(item); });
})();