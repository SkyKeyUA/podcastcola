if (768 >= window.innerWidth) {
  const menuToggle = document.querySelector('.icon-menu');

  menuToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('open-menu');
  });
}
