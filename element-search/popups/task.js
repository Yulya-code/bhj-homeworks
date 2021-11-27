const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const closeButtons = document.querySelectorAll(".modal__close_times");
const successButton = document.querySelector(".show-success");

const openModal = (element) => {
    element.className = 'modal modal_active';
}
const closeModal = (element) => {
    element.className = 'modal';
}


closeButtons.forEach((element) => {
    element.onclick = () => {
        modalMain.className == 'modal modal_active' ? closeModal(modalMain) : closeModal (modalSuccess);
    }
});

successButton.onclick = () => {
    closeModal(modalMain);
    openModal(modalSuccess);
}