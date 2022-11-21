function showAlert(){
    const alertBox = document.createElement('div');
    alertBox.setAttribute('class', 'js-alert-box');
    const alertBoxText = document.createElement('p');
    alertBoxText.setAttribute('class', 'js-alert-text')
    const alertBoxMsg = document.createTextNode('Oops! Te queda algún campo por rellenar... Tank yu!');
    alertBoxText.appendChild(alertBoxMsg);
    const alertBtn = document.createElement('button');
    alertBtn.setAttribute('class', 'js-alert-btn');
    const alertBtnMsg = document.createTextNode('Banana');
    alertBtn.appendChild(alertBtnMsg);
    alertBox.appendChild(alertBoxText);
    alertBox.appendChild(alertBtn);
    const body = document.querySelector('body');
    body.appendChild(alertBox);
}


