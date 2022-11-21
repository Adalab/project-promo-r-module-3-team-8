'use strict';

//Main function to get card URL
function handleCreateClick (event) {
    event.preventDefault(); 
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
    })
        .then((response)=> response.json())
        .then((responseJson)=>{
            if(responseJson.success){
                //Change button style
                createButton.classList.remove('createbutton-on');
                createButton.classList.add('createbutton-of');
                //Show result
                shareResultBox.classList.remove('collapsed');
                const urlJson = responseJson.cardURL;
                linkTwitter.href = `https://twitter.com/intent/tweet?text=Hola,%20os%20comparto%20mi%20tarjeta:%0a&url=${urlJson}`;
                shareUrl.href = urlJson;
                shareUrl.innerHTML = urlJson;
            }else{
                //Function to show alert box
                showAlert();
                //Select all alert buttons (if error happens several times)
                const alertBtnEl = document.querySelectorAll('.js-alert-btn');
                //Select all alert boxes (if error happens several times)
                const alertBoxEl = document.querySelectorAll('.js-alert-box');
                //Function to hide alert box
                function handleClickAlert(){
                    for (const alert of alertBoxEl){
                        alert.classList.add('js-remove');
                    }
                }
                //Event listener alert button
                for (const btn of alertBtnEl){
                    btn.addEventListener('click', handleClickAlert);
                }
                //Hide share section
                shareBigBox.classList.add('collapsed');
                shareArrowUp.classList.remove('collapsed');
                shareArrowDown.classList.add('collapsed');
                //Open fill section
                fillBigBox.classList.remove('collapsed');
                fillArrowUp.classList.add('collapsed');
                fillArrowDown.classList.remove('collapsed');
            }
    });  
}


//Event listener create button
createButton.addEventListener('click', handleCreateClick);



