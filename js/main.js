/**
 * Séné-Ouest — script principal
 * Charge les partials (header/footer), gère la nav, les animations au scroll
 * et le formulaire de contact (front-end uniquement, pas de backend).
 */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
   * 1. Chargement des partials header / footer
   * ------------------------------------------------------------------- */
  function loadPartial(url, mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return Promise.resolve();
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("Impossible de charger " + url);
        return res.text();
      })
      .then(function (html) {
        mount.innerHTML = html;
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  Promise.all([
    loadPartial("partials/header.html", "site-header"),
    loadPartial("partials/footer.html", "site-footer"),
  ]).then(function () {
    initHeader();
    initActiveLink();
    initContactForms();
    initReveal();
    document.dispatchEvent(new CustomEvent("partials:ready"));
  });

  /* ---------------------------------------------------------------------
   * 2. Header : ombre au scroll + menu mobile + accordéon "Nos marques"
   * ------------------------------------------------------------------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".nav-mobile");
    var accordionTrigger = document.querySelector(".accordion-trigger");
    var accordionPanel = document.querySelector(".accordion-panel");

    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        var isOpen = mobileNav.classList.toggle("is-open");
        toggle.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mobileNav.classList.remove("is-open");
          toggle.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      });
    }

    if (accordionTrigger && accordionPanel) {
      accordionTrigger.addEventListener("click", function () {
        var isOpen = accordionTrigger.classList.toggle("is-open");
        accordionPanel.style.maxHeight = isOpen
          ? accordionPanel.scrollHeight + "px"
          : "0px";
      });
    }
  }

  /* ---------------------------------------------------------------------
   * 3. Lien de navigation actif selon la page courante
   * ------------------------------------------------------------------- */
  function initActiveLink() {
    var page = document.body.getAttribute("data-page");
    if (!page) return;
    document.querySelectorAll("[data-page-link]").forEach(function (el) {
      var values = el.getAttribute("data-page-link").split(",");
      if (values.indexOf(page) !== -1) el.classList.add("is-active");
    });
  }

  /* ---------------------------------------------------------------------
   * 4. Animation "reveal" au scroll (IntersectionObserver)
   * ------------------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

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

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------------------
   * 5. Bouteilles flottantes animées dans le hero (générées en JS)
   * ------------------------------------------------------------------- */
  var BOTTLE_COUNT = 12;

  function initBubbles() {
    var wrap = document.querySelector(".hero-bubbles");
    if (!wrap) return;
    var count = 10;
    for (var i = 0; i < count; i++) {
      var b = document.createElement("img");
      b.className = "float-bottle";
      b.src = "img/bottles-anim/bottle-" + (1 + (i % BOTTLE_COUNT)) + ".png";
      b.alt = "";
      b.setAttribute("aria-hidden", "true");
      var height = 46 + Math.random() * 60;
      b.style.height = height + "px";
      b.style.width = "auto";
      b.style.left = Math.random() * 96 + "%";
      b.style.setProperty("--tilt", 6 + Math.random() * 10 + "deg");
      b.style.animationDuration = 10 + Math.random() * 10 + "s";
      b.style.animationDelay = Math.random() * 12 + "s";
      wrap.appendChild(b);
    }
  }
  document.addEventListener("DOMContentLoaded", initBubbles);

  /* ---------------------------------------------------------------------
   * 6. Formulaire de contact (validation front-end, pas de backend)
   * ------------------------------------------------------------------- */
  function initContactForms() {
    document.querySelectorAll(".js-contact-form").forEach(initContactForm);
  }

  function initContactForm(form) {
    var card = form.parentElement;
    var feedback = card ? card.querySelector(".form-feedback") : null;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot anti-spam : si rempli, on ignore silencieusement.
      var honeypot = form.querySelector('input[name="societe"]');
      if (honeypot && honeypot.value) return;

      var valid = true;
      var fields = form.querySelectorAll("[data-required]");
      fields.forEach(function (field) {
        var wrapper = field.closest(".field");
        var value = field.value.trim();
        var ok = value.length > 0;
        if (field.type === "email" && ok) {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        if (wrapper) wrapper.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });

      if (!valid) return;

      // Pas de backend : on simule l'envoi et on affiche un message de succès.
      if (feedback) {
        feedback.classList.add("is-visible");
      }
      form.reset();
      fields.forEach(function (field) {
        var wrapper = field.closest(".field");
        if (wrapper) wrapper.classList.remove("has-error");
      });

      if (feedback) {
        setTimeout(function () {
          feedback.classList.remove("is-visible");
        }, 6000);
      }
    });
  }
})();
