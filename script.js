const modal = document.querySelector('.modal-container');
const openModal = document.querySelector('#openbtn');
const closeModal = document.querySelector('.closebtn');


//زمانی ک کاربر بر روی دکمه اپن میزند دیسپلی از نان ب  بلاک تبدیل میشود
openModal.addEventListener('click', () => {
    // modal.classList.remove('closeani');
    modal.style.display = "block";
})



closeModal.addEventListener('click', () => {
    modal.classList.add('closeani');
    modal.style.display = "none";
})


window.addEventListener('click', (event) => {
    if(event.target == modal){
        modal.classList.add('closeani');
        modal.style.display ='none';

    } 

})