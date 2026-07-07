document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
  });
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', ()=>{
    const open = navLinks && navLinks.style.display === 'flex';
    if (navLinks) {
      navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:var(--cream);padding:20px 32px;gap:16px;border-bottom:1px solid var(--line);';
    }
  });
}
