document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-zelle').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText('9738190392'); status.textContent = 'Number copied.'; }
  catch { status.textContent = 'Please select and copy the number above.'; }
});
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name')).trim();
  const message = String(data.get('message')).trim();
  const status = document.getElementById('contact-status');
  if (!name || !message) { status.textContent = 'Please enter your name and message.'; return; }
  const subject = encodeURIComponent(`[Website inquiry] ${data.get('subject')} — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${data.get('email')}\n\n${message}`);
  window.location.href = `mailto:futaislamiccenterofnj@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = 'Your email app will open. Please review and send your message there.';
});

const oldAnchors={'#prayer-times':'#prayer','#services':'#learn','#donate':'#give','#contact':'#visit','#about':'#community','#khutbah':'#learn'};if(oldAnchors[location.hash]){location.replace(oldAnchors[location.hash]);}
