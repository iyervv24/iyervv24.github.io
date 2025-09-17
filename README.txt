Theme fix package
Files:
- style.css  (replace your existing style.css with this)
- theme.js   (include this file near the end of <body> on every page)
How to install:
1. Copy style.css to your repo root, overwrite existing.
2. Copy theme.js to your repo root (or assets/js/), then include this script tag before </body> on every HTML page:
   <script src="theme.js"></script>
3. Commit & push. Theme selection will persist across page navigations.
Notes:
- This CSS change keeps the nav visible on small screens by wrapping it instead of hiding.
