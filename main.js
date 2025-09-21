
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const navs = document.querySelectorAll('.site-nav');
    if(navs.length > 1){ navs.forEach((n,i)=>{ if(i>0) n.remove(); }); }
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if(toggle){
      toggle.addEventListener('click', (e)=>{ e.stopPropagation(); nav && nav.classList.toggle('open'); });
      document.addEventListener('click', (e)=>{ if(nav && !nav.contains(e.target) && !toggle.contains(e.target)) nav.classList.remove('open'); });
    }
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(a=> a.classList.toggle('active', a.getAttribute('href').includes(path)));
    if(nav) nav.style.pointerEvents = 'auto';
  });
})();