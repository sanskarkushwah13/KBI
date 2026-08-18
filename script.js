document.addEventListener('DOMContentLoaded', () => {
  const playlistItems = document.querySelectorAll('.playlist-item');

  playlistItems.forEach((item) => {
    item.addEventListener('click', () => {
      playlistItems.forEach((entry) => entry.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
