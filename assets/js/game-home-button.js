(function () {
  function addHomeButton() {
    if (document.getElementById('superstudy-home-button')) return;

    var homeUrl = new URL('../../index.html', window.location.href).href;
    var button = document.createElement('a');
    button.id = 'superstudy-home-button';
    button.href = homeUrl;
    button.textContent = '⌂ Home';
    button.setAttribute('aria-label', 'Go back to home page');

    button.style.position = 'fixed';
    button.style.top = '12px';
    button.style.left = '12px';
    button.style.zIndex = '2147483647';
    button.style.padding = '10px 14px';
    button.style.borderRadius = '999px';
    button.style.background = 'rgba(0, 0, 0, 0.72)';
    button.style.color = '#fff';
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '15px';
    button.style.fontWeight = '700';
    button.style.lineHeight = '1';
    button.style.textDecoration = 'none';
    button.style.boxShadow = '0 4px 14px rgba(0,0,0,.35)';
    button.style.backdropFilter = 'blur(8px)';
    button.style.webkitBackdropFilter = 'blur(8px)';
    button.style.touchAction = 'manipulation';

    button.addEventListener('touchstart', function (event) {
      event.stopPropagation();
    }, { passive: true });

    button.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    document.body.appendChild(button);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHomeButton);
  } else {
    addHomeButton();
  }
})();
