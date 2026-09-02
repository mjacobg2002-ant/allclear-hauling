/* AllClear Hauling — homepage interactions (minimal, no dependencies) */
(function () {
  'use strict';

  /* ---- Header compact-on-scroll ---- */
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  var scrim = document.getElementById('menuScrim');

  function openMenu() {
    menu.hidden = false; scrim.hidden = false;
    // force reflow so transition runs
    void menu.offsetWidth;
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    window.setTimeout(function () {
      if (!menu.classList.contains('open')) { menu.hidden = true; scrim.hidden = true; }
    }, 300);
  }
  toggle.addEventListener('click', function () {
    if (toggle.getAttribute('aria-expanded') === 'true') closeMenu(); else openMenu();
  });
  scrim.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Quote form (front-end only; no backend wired) ---- */
  var form = document.getElementById('quoteForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#qName');
      var phone = form.querySelector('#qPhone');
      if (!name.value.trim() || !phone.value.trim()) {
        note.textContent = 'Please add your name and a phone number so we can reach you.';
        note.className = 'form-note';
        (name.value.trim() ? phone : name).focus();
        return;
      }
      note.innerHTML = 'Thanks, ' + name.value.trim().split(' ')[0] +
        '! This demo form isn’t connected yet — for now, call or text ' +
        '<a href="tel:+15714451192">+1&nbsp;571-445-1192</a> and we’ll get you a quote.';
      note.className = 'form-note success';
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
