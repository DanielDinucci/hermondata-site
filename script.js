(function(){
  const grid = document.getElementById('contactGrid');
  if(!grid) return;

  const wa = grid.getAttribute('data-whatsapp');
  const li = grid.getAttribute('data-linkedin');
  const em = grid.getAttribute('data-email');

  const waLink = document.getElementById('waLink');
  const liLink = document.getElementById('liLink');
  const emLink = document.getElementById('emLink');
  const ctaBtn = document.getElementById('ctaBtn');

  if(waLink) waLink.href = wa;
  if(liLink) liLink.href = li;
  if(emLink) emLink.href = em;
  if(ctaBtn) ctaBtn.href = wa || li || em || '#contato';

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();