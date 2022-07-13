const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', function () {
    initBurger();
    initSubMenu();
    initFixedHeader();
    initModals();
    initSmoothScroll();
});
document.addEventListener('scroll', initFixedHeader);

function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

function initModals() {
    const openBtns = document.querySelectorAll('[data-modal-target]');
    const closeBtns = document.querySelectorAll('[data-modal-close]');
    const activeClass = '_visible';

    openBtns.forEach(btn => {
        const target = btn.dataset.modalTarget;
        btn.addEventListener('click', () => {
            const modal = document.querySelector(`[data-modal="${target}"]`);
            modal.classList.add(activeClass);
        })
    })

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('[data-modal]');
            modal.classList.remove(activeClass);
        })
    })
}

function initBurger() {
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })
}
function initSubMenu() {
    const drop = document.querySelectorAll('.has-sub-menu');

    drop.forEach((item) => {
        item.addEventListener('click', function () {
            item.classList.toggle('active');
        })
    })
}
function initFixedHeader() {
    if (window.scrollY > 15) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}