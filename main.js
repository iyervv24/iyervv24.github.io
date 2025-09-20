/* main.js - small helpers for nav + scroll indicator + mobile menu toggle */
(function(){
  'use strict';

  // mobile menu toggle
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('siteNav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
      nav.style.display = expanded ? '' : 'flex';
      // small safety to keep nav visible as column on mobile
      if(window.innerWidth < 1000 && !expanded){
        nav.style.flexDirection = 'column';
        nav.style.gap = '12px';
        nav.style.padding = '12px';
      } else {
        nav.style.flexDirection = '';
        nav.style.gap = '';
        nav.style.padding = '';
      }
    });

    // ensure nav visible when window resizes
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 1000){
        nav.style.display = 'flex';
        nav.style.flexDirection = '';
      } else {
        nav.style.display = '';
      }
    });
  }

  // scroll indicator (very light)
  const indicator = document.getElementById('scrollIndicator');
  const updateScroll = () => {
    if(!indicator) return;
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    indicator.style.width = Math.min(100, Math.max(0, pct)) + '%';
  };
  window.addEventListener('scroll', updateScroll, {passive:true});
  updateScroll();

  // Hero parallax: subtle transform on mousemove but only when element exists (safe guards)
  const hero = document.querySelector('.hero-content');
  if(hero){
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth/2;
      const cy = window.innerHeight/2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      hero.style.transform = `translate(${dx*6}px, ${dy*4}px)`;
      hero.style.transition = 'transform 120ms ease-out';
    });
    window.addEventListener('mouseout', () => {
      if(hero) hero.style.transform = '';
    });
  }

  // small safeguard: if CSS hasn't loaded (rare), add body class so site isn't plain white
  setTimeout(() => {
    if(getComputedStyle(document.body).backgroundImage === 'none'){
      document.body.style.background = 'linear-gradient(180deg,#0a0b0f,#0f1216)';
    }
  }, 500);

})();
