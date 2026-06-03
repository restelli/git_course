document.addEventListener('DOMContentLoaded', function () {
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #e63946;
    pointer-events: none;
    display: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    box-shadow: 0 0 8px #e63946;
  `;
  document.body.appendChild(dot);

  let active = false;
  let hideTimeout;

  document.addEventListener('keydown', function (e) {
    if (e.key.toLowerCase() === 'q') {
      active = !active;
      if (!active) {
        dot.style.display = 'none';
        document.body.style.cursor = 'auto';  // ← restore cursor
      } else {
        document.body.style.cursor = 'none';  // ← hide cursor
      }
    }
  });

  document.addEventListener('mousemove', function (e) {
    if (!active) return;
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.display = 'block';
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => { dot.style.display = 'none'; }, 1600);
  });
});