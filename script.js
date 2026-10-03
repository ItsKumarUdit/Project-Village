const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.onclick = () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  };
});

document.querySelector('.close').onclick = () => {
  modal.style.display = 'none';
};

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.navbar').style.animationPlayState = 'running';
    document.querySelector('.title-bar').style.animationPlayState = 'running';
  });
 document.querySelectorAll('.nav-no-action').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the page from reloading
  });
});