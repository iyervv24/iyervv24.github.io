document.addEventListener('DOMContentLoaded',function(){
const navs=document.querySelectorAll('.site-nav');if(navs.length>1){navs.forEach((n,i)=>{if(i>0)n.remove();});}
const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',e=>{e.stopPropagation();nav.classList.toggle('open');});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target)){nav.classList.remove('open');}});}
const links=document.querySelectorAll('.site-nav a');const path=window.location.pathname.split('/').pop()||'index.html';
links.forEach(l=>{if(l.getAttribute('href').endsWith(path)){l.classList.add('active');}else{l.classList.remove('active');}});
if(nav){nav.style.pointerEvents='auto';links.forEach(a=>a.style.pointerEvents='auto');}});
