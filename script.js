const modalContainer = document.querySelector('.modal-container');
const openModal = document.querySelector('#openbtn');
const closeModal = document.querySelector('.closebtn');

//زمانی ک کاربر بر روی دکمه اپن میزند دیسپلی از نان ب  بلاک تبدیل میشود
openModal.addEventListener('click', () => {
  modalContainer.classList.add('show');
  modalContainer.classList.remove('closeModalAnimationClass');
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.add('closeModalAnimationClass');
  modalContainer.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    // modalContainer.style.display = 'none';
    modalContainer.classList.remove('show');
  }
});
