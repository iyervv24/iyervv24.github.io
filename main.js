
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      nav.classList.toggle('open');
    });
    document.addEventListener('click', function(e){
      if(!nav.contains(e.target) && !btn.contains(e.target)){
        nav.classList.remove('open');
      }
    });
  }
  // active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=> a.classList.toggle('active', a.getAttribute('href').includes(path)));
});
