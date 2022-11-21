

let savedData = localStorage.getItem('datainputs');

function renderData(savdata){
    //Fill input values with LS object
    nameInput.value = savdata.name;
    jobInput.value = savdata.job;
    emailInput.value = savdata.email;
    phoneInput.value = savdata.phone;
    linkedinInput.value = savdata.linkedin;
    githubInput.value = savdata.github;
	//Check palette value saved in LS 
	if (savdata.palette === '1'){
		paletteOne.checked = true;
		previewArticleElement.classList.add("palette-1");
		previewArticleElement.classList.remove("palette-2");
		previewArticleElement.classList.remove("palette-3");
	}
	if(savdata.palette === '2'){
		paletteTwo.checked = true;
		previewArticleElement.classList.remove("palette-1");
		previewArticleElement.classList.add("palette-2");
		previewArticleElement.classList.remove("palette-3");
	}
	if(savdata.palette === '3'){
		paletteThree.checked = true;
		previewArticleElement.classList.remove("palette-1");
		previewArticleElement.classList.remove("palette-2");
		previewArticleElement.classList.add("palette-3");
	}
	//Article, update with saved data
	updatePreview (savdata);
	if(savdata.photo !== ''){
		//Photo, update background image with saved data
		profileImage.style.backgroundImage = `url(${savdata.photo})`;
		profilePreview.style.backgroundImage = `url(${savdata.photo})`;
	}
}

if(savedData !== null){
	//Fill data object with LS
	data = JSON.parse(savedData);
	//Render LS object 
    renderData(data);
}

