'use strict';

function checkPalette(event){
    previewArticleElement.classList.remove('palette-1');
    previewArticleElement.classList.remove('palette-2'); 
    previewArticleElement.classList.remove('palette-3'); 
    previewArticleElement.classList.add('palette-'+ event.currentTarget.value);
    data.palette = event.currentTarget.value;
}

paletteOne.addEventListener('click', checkPalette);
paletteTwo.addEventListener('click', checkPalette);
paletteThree.addEventListener('click', checkPalette);
