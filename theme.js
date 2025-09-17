
// theme.js - persist theme choice across pages and set up toggle button
(function () {
  // apply saved theme on load
  try {
    var saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch (e) { /* ignore storage errors */ }

  // attach to toggle button if present
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    // small visual feedback
    btn.setAttribute('aria-pressed', next === 'light' ? 'true' : 'false');
  });
})();
