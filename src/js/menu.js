// Header

const openMenuBtn = document.querySelector('.mobile-menu-open-btn');
const closeMenuBtn = document.querySelector('.pop-up-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

document.querySelector('.header-button').addEventListener('click', () => {
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});
// Mobile menu
const navLinks = document.querySelectorAll('.mobile-menu-list-link');
const joinButtons = document.querySelectorAll(
  '.mobile-menu-button, .header-button'
);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

joinButtons.forEach(button => {
  button.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

document.querySelector('.mobile-menu-button').addEventListener('click', () => {
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

// Hero-section

document.querySelector('.button-pricing').addEventListener('click', () => {
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.button-gallery').addEventListener('click', () => {
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

// Yoga-classes
document.querySelector('.yoga-button').addEventListener('click', () => {
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

// About-us
document.querySelector('.about-us-join-btn').addEventListener('click', () => {
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

// Modal
document.querySelectorAll('[data-modal-close]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.backdrop.is-open').forEach(modal => {
      modal.classList.remove('is-open');
    });
  });
});

//  10$ modal window

const openModal10 = document.querySelector('.pricing-button-10');
const modal10 = document.querySelector('.modal-10');

openModal10.addEventListener('click', () => {
  modal10.classList.add('is-open');
});

// 65$ modal window
const openModal65 = document.querySelector('.pricing-button-65');
const modal65 = document.querySelector('.modal-65');

openModal65.addEventListener('click', () => {
  modal65.classList.add('is-open');
});

// 80$ window
const openModal80 = document.querySelector('.modal-80');

document.querySelectorAll('.pricing-button-80').forEach(button => {
  button.addEventListener('click', () => {
    openModal80.classList.add('is-open');
  });
});
