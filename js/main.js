// Menu Display Mobile Screen

let mobileNav = document.getElementById('mobile-nav');

document.getElementById('mobile-nav').style.display = 'none';

document.getElementById('menu-bar').addEventListener("click", function () {
    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }

});

document.addEventListener('click', function (e) {
    if (e.target.className !== 'fas fa-bars' && e.target.className !== 'collapsible-nav-list') {
        mobileNav.style.display = 'none';
    }
})


// About Me Section
let aboutSelector = document.querySelectorAll('.about-selector');
let aboutContents = document.querySelectorAll('.about-contents');

function selectItem(e) {
    removeBorder();
    replaceContent();
    this.classList.add('add-border');
    let contentVal = document.getElementById(`${this.id}-content`);
    contentVal.classList.add('show');
}

function replaceContent() {
    aboutContents.forEach(item => item.classList.remove('show'));
}

function removeBorder() {
    aboutSelector.forEach(item => item.classList.remove('add-border'));
}

aboutSelector.forEach(item => item.addEventListener('click', selectItem));


//Porfolio Section

let portfolioImg = document.querySelectorAll('.portfolio-images');

let portfolioBtn = document.querySelectorAll('.portfolio-btn');

portfolioBtn.forEach(item => item.addEventListener('click', getImgs));

function getImgs() {
    removeImg();

    if (this.id === 'portfolio-select-1') {
        document.querySelectorAll('.portfolio-images').forEach(item => item.classList.add('show'));
    }
    if (this.id === 'portfolio-select-2') {
        document.querySelectorAll('.portfolio-image-flyer').forEach(item => item.classList.add('show'));
    }
    if (this.id === 'portfolio-select-3') {
        document.querySelectorAll('.portfolio-image-website').forEach(item => item.classList.add('show'));
    }
    if (this.id === 'portfolio-select-4') {
        document.querySelectorAll('.portfolio-image-graphics').forEach(item => item.classList.add('show'));
    }
}

function removeImg() {
    portfolioImg.forEach(item => item.classList.remove('show'));
}