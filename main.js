document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.site-nav');
 if(toggle){toggle.addEventListener('click',e=>{e.stopPropagation();nav.classList.toggle('open')});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))nav.classList.remove('open')})}
 const path=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.site-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href').includes(path)));
});