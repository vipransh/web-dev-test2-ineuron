const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName('close')[0];
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);
window.addEventListener('click', handleOutsideClick);


function closeModalWindow() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function handleOutsideClick(event) {
  if (event.target === overlay) {
    closeModalWindow();
  }
}
