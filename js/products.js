/**
 * Séné-Ouest — données produits (placeholder) + rendu des grilles
 * Trois marques : FOOT, BAOBAB, NGALAM.
 * Remplacez ces données par le vrai catalogue quand il sera disponible.
 */

(function () {
  "use strict";

  var ICONS = {
    liquide:
      '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M26 8h12v8l6 8v30a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V24l6-8V8Z"/>' +
      '<path d="M22 30h20"/><path d="M24 8h16"/></svg>',
    barre:
      '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="10" y="20" width="44" height="26" rx="12"/>' +
      '<path d="M18 33c2-3 5-4 8-2s5 5 8 3 4-5 8-3 5 4 8 2"/></svg>',
    poudre:
      '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M14 20h36l-4 34H18L14 20Z"/><path d="M22 20 26 8h12l4 12"/>' +
      '<path d="M22 32h20M20 40h24"/></svg>',
  };

  var TAG_LABEL = {
    liquide: "Savon liquide",
    barre: "Savon ménage",
    poudre: "Détergent poudre",
  };

  var PRODUITS = {
    foot: [
      { image: "img/products/foot-1500ml-1.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/products/foot-1500ml-2.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/products/foot-1500ml-3.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/products/foot-1500ml-4.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/products/foot-1500ml-5.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/products/foot-950ml-1.png", nom: "Détergent Multi-Usage", desc: "950 ML / QTÉ Boite : 12" },
      { image: "img/products/foot-950ml-2.png", nom: "Détergent Multi-Usage", desc: "950 ML / QTÉ Boite : 12" },
      { image: "img/products/foot-950ml-3.png", nom: "Détergent Multi-Usage", desc: "950 ML / QTÉ Boite : 12" },
      { image: "img/products/foot-500ml-1.png", nom: "Détergent Multi-Usage", desc: "500 ML / QTÉ Boite : 12" },
      { image: "img/products/foot-500ml-2.png", nom: "Détergent Multi-Usage", desc: "500 ML / QTÉ Boite : 12" },
      { image: "img/products/foot-225ml-1.png", nom: "Détergent Multi-Usage", desc: "225 ML / QTÉ Boite : 24" },
      { image: "img/products/foot-20L-1.png", nom: "Détergent Multi-Usage", desc: "20 L" },
    ],
    baobab: [
      { type: "poudre", nom: "BAOBAB Nature Poudre", desc: "Détergent en poudre à base d'extraits naturels, doux et efficace." },
      { type: "liquide", nom: "BAOBAB Liquide 1L", desc: "Savon liquide parfum baobab, respectueux des mains." },
      { type: "barre", nom: "BAOBAB Savon Vert", desc: "Savon ménage en morceau, formule traditionnelle renforcée." },
      { type: "poudre", nom: "BAOBAB Poudre XL", desc: "Grand format détergent poudre pour un usage familial intensif." },
      { type: "liquide", nom: "BAOBAB Liquide 500ml", desc: "Format nomade du savon liquide BAOBAB, facile à transporter." },
      { type: "barre", nom: "BAOBAB Duo Éclat", desc: "Lot de deux savons ménage, parfum doux et longue durée." },
      { type: "poudre", nom: "BAOBAB Poudre Douceur", desc: "Détergent poudre hypoallergénique pour linge délicat." },
      { type: "liquide", nom: "BAOBAB Liquide 2L", desc: "Grand format du savon liquide multi-usages BAOBAB." },
    ],
    ngalam: [
      { type: "barre", nom: "NGALAM Savon Force", desc: "Savon ménage en morceau grand format, très concentré." },
      { type: "poudre", nom: "NGALAM Poudre Éclat", desc: "Détergent poudre blancheur, tache et odeur neutralisées." },
      { type: "liquide", nom: "NGALAM Liquide 1L", desc: "Savon liquide multi-surfaces, parfum signature NGALAM." },
      { type: "barre", nom: "NGALAM Savon Duo", desc: "Lot de deux savons ménage, formule économique." },
      { type: "poudre", nom: "NGALAM Poudre 1kg", desc: "Détergent en poudre grand format pour un usage prolongé." },
      { type: "liquide", nom: "NGALAM Liquide 500ml", desc: "Format compact du savon liquide NGALAM, usage quotidien." },
      { type: "barre", nom: "NGALAM Savon Classic", desc: "Le savon ménage traditionnel NGALAM, efficace et abordable." },
      { type: "poudre", nom: "NGALAM Poudre Fraîcheur", desc: "Détergent poudre parfumé, mousse riche, rinçage rapide." },
    ],
  };

  function renderCard(item, index) {
    var delay = (index % 4) + 1;
    var media = item.image
      ? '<img src="' + item.image + '" alt="' + item.nom + '" class="product-photo">'
      : '<span class="product-tag">' + (TAG_LABEL[item.type] || "") + "</span>" + (ICONS[item.type] || ICONS.liquide);
    return (
      '<article class="product-card reveal reveal-delay-' + delay + '">' +
      '<div class="product-media">' +
      media +
      "</div>" +
      '<div class="product-body">' +
      "<h3>" + item.nom + "</h3>" +
      "<p>" + item.desc + "</p>" +
      "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    var grid = document.querySelector("[data-products-grid]");
    if (!grid) return;
    var brand = grid.getAttribute("data-products-grid");
    var items = PRODUITS[brand] || [];
    grid.innerHTML = items.map(renderCard).join("");
    if (window.dispatchEvent) {
      document.dispatchEvent(new CustomEvent("products:rendered"));
    }
    // Ré-observe les nouveaux éléments .reveal ajoutés dynamiquement.
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      grid.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
    } else {
      grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  document.addEventListener("DOMContentLoaded", renderGrid);
})();
