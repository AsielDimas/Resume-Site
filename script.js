// Theme toggle and mobile nav
(function() {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const yearEl = document.getElementById('year');
  const copyBtn = document.getElementById('copyEmail');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && e.target !== navToggle) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('asiel@example.com');
        copyBtn.querySelector('span').textContent = 'Copied';
        setTimeout(() => copyBtn.querySelector('span').textContent = 'Copy', 1200);
      } catch {}
    });
  }
})();