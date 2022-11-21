'use strict';

////Reset javascript
// Create variable for reset button
const resetBtn = document.querySelector(".js-reset-btn");
//Create variables with form inputs
const formElement = document.querySelector(".js-form");
const nameInput = document.querySelector(".js-input-name");
const jobInput = document.querySelector(".js-input-job");
const emailInput = document.querySelector(".js-input-email");
const phoneInput = document.querySelector(".js-input-phone");
const linkedinInput = document.querySelector(".js-input-linkedin");
const githubInput = document.querySelector(".js-input-github");
const boxInput = document.querySelector(".js-input-box");


////Preview javascript
//Create variables with article elements
const previewArticleTitle = document.querySelector(".js-article-title");
const previewArticleSubtitle = document.querySelector(".js-article-subtitle");
const previewArticlePhoto = document.querySelector('.js-article-photo');
const previewArticlePhone = document.querySelector(".js-article-link-phone");
const previewArticleMail = document.querySelector(".js-article-link-mail");
const previewArticleLinkedin = document.querySelector(".js-article-link-linkedin");
const previewArticleGitHub = document.querySelector(".js-article-link-github");


////Palette javascript
//Create variable for article to change palette colours
const previewArticleElement = document.querySelector('.js-article');
//Create variables for each palette radio input
const paletteOne =  document.querySelector('.js-palette-one');
const paletteTwo =  document.querySelector('.js-palette-two');
const paletteThree =  document.querySelector('.js-palette-three');

////Create button javascript
//Create variables 
const createButton = document.querySelector('.js-create-button');
const shareResultBox = document.querySelector('.js-share-result-box');
const shareUrl = document.querySelector('.js-share-url');
const linkTwitter = document.querySelector('.js-link-twitter');

////Crete card javascript
//section headers
const designHead = document.querySelector('.js-design-head');
const designBigBox = document.querySelector('.js-design-big-box');
const fillHead = document.querySelector('.js-fill-head');
const fillBigBox = document.querySelector('.js-fill-big-box');
const shareHead = document.querySelector('.js-share-head');
const shareBigBox = document.querySelector('.js-share-big-box');
//arrows
const designArrowUp = document.querySelector('.js-design-arrow-up');
const designArrowDown = document.querySelector('.js-design-arrow-down');
const fillArrowUp = document.querySelector('.js-fill-arrow-up');
const fillArrowDown = document.querySelector('.js-fill-arrow-down');
const shareArrowUp = document.querySelector('.js-share-arrow-up');
const shareArrowDown = document.querySelector('.js-share-arrow-down');
//all section headers
const allHead = [designHead, fillHead, shareHead];


////Get avatar javascript
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');