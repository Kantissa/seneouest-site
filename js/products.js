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
      { image: "img/FOOT/eau de javel foot.png", nom: "Eau de Javel", desc: "1 L" },
    ],
    "foot-barre": [
      { image: "img/FOOT/savon  morceaux 1.png", nom: "Savon en morceaux", desc: "275 G / QTÉ Boite : 18" },
      { image: "img/FOOT/savon  morceaux 2.png", nom: "Savon en morceaux", desc: "225 G / QTÉ Boite : 18" },
      { image: "img/FOOT/savon  morceaux 3.png", nom: "Savon en morceaux", desc: "300 G / QTÉ Boite : 18" },
      { image: "img/FOOT/savon  morceaux 4.png", nom: "Savon en morceaux", desc: "400 G / QTÉ Boite : 18" },
      { image: "img/FOOT/savon  morceaux 5.png", nom: "Savon en morceaux", desc: "2 KG" },
      { image: "img/FOOT/savon  morceaux 6.png", nom: "Savon en morceaux", desc: "300 G / QTÉ Boite : 12x4" },
      { image: "img/FOOT/savon  morceaux 7.png", nom: "Savon en morceaux", desc: "200 G / QTÉ Boite : 18" },
      { image: "img/FOOT/savon  morceaux 8.png", nom: "Savon en morceaux", desc: "125 G / QTÉ Boite : 36" },
      { image: "img/FOOT/savon  morceaux 9.png", nom: "Savon en morceaux", desc: "400 G / QTÉ Boite : 18" },
      { image: "img/FOOT/savon  morceaux 10.png", nom: "Savon en morceaux", desc: "125 G / QTÉ Boite : 36" },
    ],
    "foot-poudre": [
      { image: "img/FOOT/Détergent Poudre Foot 30g.png", nom: "Détergent Multi-Usage", desc: "30 G / QTÉ Boite : 90" },
      { image: "img/FOOT/Détergent Poudre Foot 60g.png", nom: "Détergent Multi-Usage", desc: "60 G / QTÉ Boite : 80" },
      { image: "img/FOOT/Détergent Poudre Foot 400g.png", nom: "Détergent Multi-Usage", desc: "400 G / QTÉ Boite : 20" },
      { image: "img/FOOT/Détergent Poudre Foot 850g.png", nom: "Détergent Multi-Usage", desc: "850 G / QTÉ Boite : 10" },
      { image: "img/FOOT/Détergent Poudre Foot 10 kg.png", nom: "Détergent Multi-Usage", desc: "10 KG" },
    ],
    baobab: [
      { image: "img/BAOBAB/1 Détergent Multi-Usage Baobab.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/BAOBAB/2 Détergent Multi-Usage Baobab.png", nom: "Détergent Multi-Usage", desc: "1500 ML / QTÉ Boite : 6" },
      { image: "img/BAOBAB/3 Détergent Multi-Usage Baobab.png", nom: "Détergent Multi-Usage", desc: "1 L / QTÉ Boite : 12" },
      { image: "img/BAOBAB/4 Détergent Multi-Usage Baobab.png", nom: "Détergent Multi-Usage", desc: "475 ML / QTÉ Boite : 12" },
    ],
    "baobab-barre": [
      { image: "img/BAOBAB/1 Savon Multi-Usage Baobab.png", nom: "Savon Multi-Usage", desc: "300 G / QTÉ Boite : 18" },
      { image: "img/BAOBAB/2 Savon Multi-Usage Baobab.png", nom: "Savon Multi-Usage", desc: "300 G / QTÉ Boite : 18" },
      { image: "img/BAOBAB/3 Savon Multi-Usage Baobab.png", nom: "Savon Multi-Usage", desc: "260 G / QTÉ Boite : 18" },
      { image: "img/BAOBAB/4 Savon Multi-Usage Baobab.png", nom: "Savon Multi-Usage", desc: "300 G / QTÉ Boite : 18" },
    ],
    ngalam: [
      { image: "img/NGALAM/1 savon ngalam.png", nom: "Savon Naturel - extra Moussant", desc: "200 G / QTÉ Boite : 18" },
      { image: "img/NGALAM/2 savon ngalam.png", nom: "Savon Naturel - extra Moussant", desc: "1 KG / QTÉ Boite : 10" },
      { image: "img/NGALAM/3 savon ngalam.png", nom: "Savon Naturel - extra Moussant", desc: "250 GR / QTÉ Boite : 18" },
      { image: "img/NGALAM/4 savon ngalam.png", nom: "Savon Naturel - extra Moussant", desc: "400 G / QTÉ Boite : 10" },
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
      '<div class="product-media-inner">' +
      media +
      "</div>" +
      "</div>" +
      '<div class="product-body">' +
      "<h3>" + item.nom + "</h3>" +
      "<p>" + item.desc + "</p>" +
      "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    var grids = document.querySelectorAll("[data-products-grid]");
    if (!grids.length) return;
    grids.forEach(function (grid) {
      var brand = grid.getAttribute("data-products-grid");
      var items = PRODUITS[brand] || [];
      grid.innerHTML = items.map(renderCard).join("");
    });
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
      grids.forEach(function (grid) {
        grid.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
      });
    } else {
      grids.forEach(function (grid) {
        grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", renderGrid);
})();
