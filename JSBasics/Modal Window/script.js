'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
//finds all elements
const btnsOpenModal = document.querySelectorAll('.show-modal')

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}

//closing the modal
btnCloseModal.addEventListener('click', closeModal)
document.addEventListener('keydown', function (e) {
    e.preventDefault()
    if (e.key === 'Escape' || e.key === 'Enter') {
        console.log(`${e.key} key was pressed`)
        closeModal()
    }
})
