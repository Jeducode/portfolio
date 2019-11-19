// Menu Display Mobile Screen....................................

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


// About Me Section...............................................
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


//Porfolio Section......................................................

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


// Quote Calculator Section...............................................

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

//Project Cost.........................................................

// Writing and Graphic Design Prices

// Initial Cost of Project
let costOfproject = 0;

//Prices per 1000 words
let prices = {
    blogPost: 2000,
    article: 3000,
    copyWriting: 3000,
    socialContent: 2500,
    ebook: 2000,
    logo: 5000,
    illustration: 3000,
    flyer: 5000,
    photoManipulation: 3000,
    bannerAd: 3500
}


//Wordpress Pricing..........................................

let wordPressCheckbox = [];

function wordpressValues() {
    let wordpressValues = document.getElementsByName('wordpress-package');

    for (let i = 0; i < wordpressValues.length; i++) {
        if (wordpressValues[i].checked === true) {
            wordPressCheckbox.push(wordpressValues[i].id);
        }
    }
    return wordPressCheckbox;
}

let wordPressPrices = [11000, 6000, 5000, 5000, 15000, 25000];

let wordPressIndex = ['hosting', 'domain', 'wordpress-logo', 'content-upload', 'wordpress-graphics', 'premium-theme'];

let wordpressIndexVal = [];
let wordpressPriceVals = [];

let wpFinalPrice = 0;
document.getElementById('wordPress-next-btn').addEventListener('click', function () {
    console.log(wordpressValues());

    for (let i = 0; i < wordPressIndex.length; i++) {
        if (wordPressIndex.includes(wordPressCheckbox[i]))
            wordpressIndexVal.push(wordPressIndex.indexOf(wordPressCheckbox[i]));
    }

    for (let i = 0; i < wordPressPrices.length; i++) {
        if (wordPressPrices[wordpressIndexVal[i]] !== undefined) {
            wordpressPriceVals.push(wordPressPrices[wordpressIndexVal[i]]);
        }
    }
    wpFinalPrice += wordpressPriceVals.reduce((a, b) => a + b, 0)

    if (document.querySelector('input[name="wordpress-package"]:checked') === null) {
        alert('Pick a value');
    } else {
        wordpressDesign.style.display = "none"
        resultPage.style.display = 'block';
        displayResult();
    }
})

// Get Project Function by Type

// Cost in Writing Section

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


// Cost in Graphics...............................

function graphicCostByType() {

    let graphicTypeCost = document.querySelector('input[name="graphics-type"]:checked');
    if (graphicTypeCost.id === 'logo') {
        costOfproject += prices.logo;
    }
    if (graphicTypeCost.id === 'illustration') {
        costOfproject += prices.illustration;
    }
    if (graphicTypeCost.id === 'flyer') {
        costOfproject += prices.flyer;
    }
    if (graphicTypeCost.id === 'photo-manipulation') {
        costOfproject += prices.photoManipulation;
    }
    if (graphicTypeCost.id === 'banner-ads') {
        costOfproject += prices.bannerAd;
    }

    return costOfproject;
}

// Manipulate Writing Project Cost Due to number of words

let writingLengthValue = document.getElementById('writing-length-value');
let projectDuration = 1;

function projectCostByWords() {

    if (writingLengthValue.value > 1000 && writingLengthValue.value < 2001) {
        costOfproject = costOfproject * 2;
        projectDuration = 2;
    }
    if (writingLengthValue.value > 2000 && writingLengthValue.value < 5000) {
        costOfproject = costOfproject * 5;
        projectDuration = 3;
    }
    if (writingLengthValue.value > 4999 && writingLengthValue.value < 9999) {
        costOfproject = costOfproject * 10;
        projectDuration = 5;
    }
    if (writingLengthValue.value > 9999 && writingLengthValue.value < 49999) {
        costOfproject = costOfproject * 50;
        projectDuration = 14;
    }
    if (writingLengthValue.value > 49999) {
        costOfproject = costOfproject * 200;
        projectDuration = 100;
    }

    return costOfproject;
}

// Manipulate Graphic Project Cost Due to number of words

let graphicAmountVal = document.getElementById('graphic-amount-value');

let graphicProjectCost;
let graphicDays;

function graphicCostByNumber() {
    graphicProjectCost = graphicAmountVal.value * costOfproject;
    graphicDays = Math.ceil(graphicAmountVal.value * 1.2);
    return graphicProjectCost;
}


//Days to complete Graphic projects




// Result Page................................................................
// Events

// Writing Section Event 
document.getElementById('writing-next-btn').addEventListener('click', () => {
    if (document.querySelector('input[name="writing-type"]:checked') === null) {
        alert('Pick a value');
    };
    if (document.getElementById('writing-length-value').value === '') {
        alert('Enter an Amount')
    } else {
        projectCostbyType();
        projectCostByWords();
        writingSection.style.display = "none"
        resultPage.style.display = 'block';
        displayResult();
    }
});

// Graphic Section Event 
document.getElementById('graphic-next-btn').addEventListener('click', () => {
    if (document.querySelector('input[name="graphics-type"]:checked') === null) {
        alert('Pick a value');
    };
    if (document.getElementById('graphic-amount-value').value === '') {
        alert('Enter an Amount')
    } else {
        graphicCostByType();
        graphicCostByNumber();
        graphicSection.style.display = "none"
        resultPage.style.display = 'block';
        displayResult();
    }
})



// Result Dom Manipulation..........................................................


function displayResult() {
    //All result Values

    let resultsDisplay = new Object();

    if (document.querySelector('input[name="graphics-type"]:checked') !== null) {
        resultsDisplay.projectType = document.querySelector('input[name="project-type"]:checked').value;
        resultsDisplay.projectSubType = document.querySelector('input[name="graphics-type"]:checked').id
        resultsDisplay.quantity = `${graphicAmountVal.value} designs`;
        resultsDisplay.cost = `${graphicProjectCost} ($${Math.ceil(graphicProjectCost/ 360)})`;
        resultsDisplay.time = graphicDays;

    } else if (document.querySelector('input[name="writing-type"]:checked') !== null) {
        resultsDisplay.projectType = document.querySelector('input[name="project-type"]:checked').value;
        resultsDisplay.projectSubType = document.querySelector('input[name="writing-type"]:checked').id
        resultsDisplay.quantity = `${writingLengthValue.value} words`;
        resultsDisplay.cost = `${costOfproject} ($${Math.ceil(costOfproject / 360)})`;
        resultsDisplay.time = projectDuration;

    } else if (document.querySelector('input[name="wordpress-package"]:checked') !== null) {
        resultsDisplay.projectType = document.querySelector('input[name="project-type"]:checked').value;
        resultsDisplay.projectSubType = 'Package'
        for (let i = 0; i < wordPressCheckbox.length; i++) {
            if (wordPressCheckbox[i] !== undefined) {
                resultsDisplay.quantity += `${wordPressCheckbox[i]}, `;
            }
        };
        resultsDisplay.cost = `${wpFinalPrice} ($${Math.ceil(wpFinalPrice / 360)})`;
        resultsDisplay.time = 5;
    }

    //Display Result in DOM
    let displayDom = document.getElementById('result-body').innerHTML = `
    <p>Project type: <span>${resultsDisplay.projectType} (${resultsDisplay.projectSubType}) </span></p>
    <p>Quantity: <span>${resultsDisplay.quantity}</span> </p>
    <p>Cost: <span>&#8358 ${resultsDisplay.cost} </span></p>
    <p>Delivery Time: <span>${ resultsDisplay.time} days </span></p>
    <hr>`
    return displayDom;

}



//Reset Button...................................................................
//Result Reset


// Uncheck Previously selected radios/Values
function unCheckboxes() {
    let checkbox1 = document.getElementsByName('project-type');
    let checkbox2 = document.getElementsByName('writing-type');
    let checkbox3 = document.getElementsByName('graphics-type');
    let checkbox4 = document.getElementsByName('wordpress-package')

    let allCheckboxes = [...checkbox1, ...checkbox2, ...checkbox3, ...checkbox4];
    for (let i = 0; i < allCheckboxes.length; i++) {
        allCheckboxes[i].checked = false;
    }
}

// Listen to Button to fire Reset

document.body.addEventListener('click', e => {
    if (e.target.className === 'next-btn reset-button') {
        for (let i = 0; i < allQuotePages.length; i++) {
            allQuotePages[i].style.display = 'none'
        }
        unCheckboxes()
        quoteSectionOne.style.display = "block"
        costOfproject = 0;
        wpFinalPrice = 0;
        wordPressCheckbox = [];
        wordpressIndexVal = [];
        wordpressPriceVals = [];
        writingLengthValue.value = '';
    }

})