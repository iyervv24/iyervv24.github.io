/* main.js — fixes duplicate navs and makes mobile toggle reliable */

function removeDuplicateNavs(){
  try {
    const navs = Array.from(document.querySelectorAll('.site-nav'));
    if(navs.length > 1){
      navs.slice(1).forEach(n => n.remove());
      console.info('Removed duplicate site-nav elements.');
    }
    ['floating-nav','header-duplicate','nav-ghost'].forEach(c=>{
      document.querySelectorAll('.' + c).forEach(el => el.remove());
    });
  } catch(e){ console.warn('removeDuplicateNavs error', e); }
}

function initNavToggle(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    nav.classList.toggle('open');
    if(nav.classList.contains('open')){
      setTimeout(()=> {
        document.addEventListener('click', outsideClick);
      }, 0);
    } else {
      document.removeEventListener('click', outsideClick);
    }
  });

  function outsideClick(ev){
    if(!nav.contains(ev.target) && !toggle.contains(ev.target)){
      nav.classList.remove('open');
      document.removeEventListener('click', outsideClick);
    }
  }
}

function enableNavClicks(){
  const nav = document.querySelector('.site-nav');
  if(nav){
    nav.style.pointerEvents = 'auto';
    Array.from(nav.querySelectorAll('a')).forEach(a=>{
      a.style.pointerEvents = 'auto';
    });
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  removeDuplicateNavs();
  initNavToggle();
  enableNavClicks();
  setTimeout(()=> window.dispatchEvent(new Event('resize')), 120);
});
