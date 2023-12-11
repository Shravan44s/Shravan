'use strict';



const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");


sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const achievementItem = document.querySelectorAll("[data-achievement-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");


const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


const achievementModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}


for (let i = 0; i < achievementItem.length; i++) {

  achievementItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-achievement-avatar]").src;
    modalImg.alt = this.querySelector("[data-achievement-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-achievement-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-achievement-text]").innerHTML;

    achievementModalFunc();

  });

}


modalCloseBtn.addEventListener("click", achievementModalFunc);
overlay.addEventListener("click", achievementModalFunc);



const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });


for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}


let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {


    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}




const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


        

function sendMail() {
  var fullName = document.querySelector('[name="fullname"]').value;
  var email = document.querySelector('[name="email"]').value;
  var message = document.querySelector('[name="message"]').value;

  var mailtoLink = 'mailto:shravanah11@gmail.com' +
    '?subject=' + encodeURIComponent('Contact Form Submission') +
    '&body=' + encodeURIComponent('Full Name: ' + fullName + '\nEmail: ' + email + '\nMessage: ' + message);


  window.location.href = mailtoLink;
}




  function openModal() {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modalImage');
    var originalImage = event.currentTarget.querySelector('.project-img img'); // Select the clicked project item's image


    hideNavBar();

    modal.style.display = 'block';
    modalImage.src = originalImage.src;
  }

  function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';


    showNavBar();
  }


  window.onclick = function (event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
      closeModal();
    }
  };

  function hideNavBar() {

    var navBar = document.querySelector('.navbar');
    if (navBar) {
      navBar.style.display = 'none';
    }
  }

  function showNavBar() {

    var navBar = document.querySelector('.navbar');
    if (navBar) {
      navBar.style.display = 'block';
    }
  }





  function openCustomModal(imageId) {
 
    var imgSrc = getCustomImageSource(imageId);

    document.getElementById('customModalImg').src = imgSrc;

    document.getElementById('customModal').style.display = 'flex';
  }

  function closeCustomModal() {
    document.getElementById('customModal').style.display = 'none';
  }

  function getCustomImageSource(imageId) {
    switch (imageId) {
      case 'image1':
        return 'assets/images/Dlithe _page-0001.jpg';
      case 'image2':
        return 'assets/images/Technohacks.png';
      case 'image3':
        return 'assets/images/Codsoft_page-0001.jpg';
      default:
        return '';
    }
  }