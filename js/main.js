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


// Quote Calculator Section

let writingSection = document.getElementById('quote-creative-writing-one');
let graphicSection = document.getElementById('quote-graphics');
let wordpressDesign = document.getElementById('wordpress-design-section');
let programmingSection = document.getElementById('programing-section');
let resultPage = document.getElementById('result-page');
let quoteSectionOne = document.getElementById('quote-section-one');

let allQuotePages = [writingSection, graphicSection, wordpressDesign, programmingSection, resultPage];

// Ensure a radio is checked

function check() {
    let radios = document.getElementsByName("project-type");
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert('Please, Select an Option');
}

document.getElementById('cal-btn').addEventListener('click', () => {
    check();
    if (document.querySelector('input[name="project-type"]:checked').value === "content-writing") {
        quoteSectionOne.style.display = "none"
        writingSection.style.display = 'block';
    }
    if (document.querySelector('input[name="project-type"]:checked').value === "graphic-design") {
        quoteSectionOne.style.display = "none"
        graphicSection.style.display = 'block';
    }
    if (document.querySelector('input[name="project-type"]:checked').value === "wordpress-design") {
        quoteSectionOne.style.display = "none"
        wordpressDesign.style.display = 'block';
    }
    if (document.querySelector('input[name="project-type"]:checked').value === "programming") {
        quoteSectionOne.style.display = "none"
        programmingSection.style.display = 'block';
    }
});



// Writing and Graphic Design Prices

//Prices per 1000 words
let prices = {
    blogPost: 2000,
    article: 3000,
    copyWriting: 3000,
    socialContent: 2500,
    ebook: 2000,
    logo: 5000,
    illustration: 1000,
    flyer: 5000,
    photoManipulation: 3000,
    bannerAd: 3500
}


//Project Cost

let costOfproject = 0;

// Get Project Function by Type

function projectCostbyType() {
    let writingTypeCost = document.querySelector('input[name="writing-type"]:checked');
    if (writingTypeCost.id === 'blog-post') {
        costOfproject += prices.blogPost;
    }
    if (writingTypeCost.id === 'article-writing') {
        costOfproject += prices.article;
    }
    if (writingTypeCost.id === 'copy-writing') {
        costOfproject += prices.copyWriting;
    }
    if (writingTypeCost.id === 'social-media-writing') {
        costOfproject += prices.socialContent;
    }
    if (writingTypeCost.id === 'ebook-writing') {
        costOfproject += prices.ebook;
    }


    return costOfproject;
}

// Manipulate Project Cost Due to number of words
let writingLengthValue = document.getElementById('writing-length-value');
let writingDuration = 1;

function projectCostByWords() {

    if (writingLengthValue.value > 1000 && writingLengthValue.value < 2001) {
        costOfproject = costOfproject * 2;
        writingDuration = 2;
    }
    if (writingLengthValue.value > 2000 && writingLengthValue.value < 5000) {
        costOfproject = costOfproject * 5;
        writingDuration = 3;
    }
    if (writingLengthValue.value > 4999 && writingLengthValue.value < 9999) {
        costOfproject = costOfproject * 10;
        writingDuration = 5;
    }
    if (writingLengthValue.value > 9999 && writingLengthValue.value < 49999) {
        costOfproject = costOfproject * 50;
        writingDuration = 14;
    }
    if (writingLengthValue.value > 49999) {
        costOfproject = costOfproject * 200;
        writingDuration = 100;
    }

    return costOfproject;
}


// Result Page
// Event 
document.getElementById('next-btn').addEventListener('click', () => {
    if (document.getElementById('writing-length-value').value === '') {
        alert('Enter an Amount')
    } else {
        console.log(projectCostbyType())
        console.log(projectCostByWords());
        writingSection.style.display = "none"
        resultPage.style.display = 'block';
        displayResult();
    }
});


// Result Dom Manipulation

function displayResult() {
    let displayDom = document.getElementById('result-body').innerHTML = `
    <p>Project type: <span>${document.querySelector('input[name="project-type"]:checked').value} (${document.querySelector('input[name="writing-type"]:checked').id}) </span></p>
    <p>Quantity: <span>${document.getElementById('writing-length-value').value} words</span> </p>
    <p>Cost: <span>&#8358 ${costOfproject} ( $${Math.ceil(costOfproject / 360)}) </span></p>
    <p>Delivery Time: <span>${writingDuration} days </span></p>
    <hr>`
    displayDom;
}


//Reset Button

//Result Reset
document.body.addEventListener('click', e => {
    if (e.target.className === 'next-btn reset-button') {
        for (let i = 0; i < allQuotePages.length; i++) {
            allQuotePages[i].style.display = 'none'
        }
        quoteSectionOne.style.display = "block"
        costOfproject = 0;
        writingLengthValue.value = '';
    }

})