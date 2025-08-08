// Theme and menu
const root = document.documentElement;
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('siteNav');
const stored = localStorage.getItem('theme');
if(stored === 'light') root.classList.add('light');
document.getElementById('themeToggle').addEventListener('click', ()=>{
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
menuBtn.addEventListener('click', ()=>{ 
  const open = nav.classList.toggle('open'); 
  menuBtn.setAttribute('aria-expanded', open); 
});

document.getElementById('year').textContent = new Date().getFullYear();

// Form fake submit
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  note.textContent = 'Thanks. I will reply soon.';
  form.reset();
});

console.log('Built 2025-08-08T11:57:06.588806Z');
