const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

if (cursor && ring) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let visible = false;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    if (!visible) {
      cursor.classList.remove('hidden');
      ring.classList.remove('hidden');
      visible = true;
    }
  });

  (function lerpRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
    requestAnimationFrame(lerpRing);
  })();

  document.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden');
    ring.classList.add('hidden');
    visible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden');
    ring.classList.remove('hidden');
    visible = true;
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.opacity = '1';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.opacity = '0.6';
    });
  });
}
