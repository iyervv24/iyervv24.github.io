// tiny main.js — mobile toggle + active nav + clean duplicates
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // remove duplicate navs if any
    const navs = document.querySelectorAll('.site-nav');
    if(navs.length > 1){ navs.forEach((n,i)=>{ if(i>0) n.remove(); }); }

    // nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if(toggle){
      toggle.addEventListener('click', (e)=>{
        e.stopPropagation();
        nav && nav.classList.toggle('open');
      });
      document.addEventListener('click', (e)=>{
        if(nav && !nav.contains(e.target) && !toggle.contains(e.target)) nav.classList.remove('open');
      });
    }

    // active link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href').includes(path));
    });

    // safety: ensure nav clickable
    if(nav) nav.style.pointerEvents = 'auto';
  });
})();
