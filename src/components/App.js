import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';

import callToApi from '../services/api';
import ls from '../services/localStorage';
import imgHeader from '../images/logo-awesome-profile-cards0.svg';
import Card from './Card';
import Landing from './Landing';

function App() {
  //State variables
  const [createIsOpen, setCreateIsOpen] = useState(true);
  const [shareIsOpen, setShareIsOpen] = useState(true);
  const [apiCard, setApiCard] = useState({});
  const defaultDataCard = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };
  const cardInfo = ls.get('savedDataCard', defaultDataCard);
  const [dataCard, setDataCard] = useState({
    palette: cardInfo.palette,
    name: cardInfo.name,
    job: cardInfo.job,
    phone: cardInfo.phone,
    email: cardInfo.email,
    linkedin: cardInfo.linkedin,
    github: cardInfo.github,
    photo: cardInfo.photo,
  });

  //Handler functions
  const handleUpdateDataCard = (ev) => {
    setDataCard({ ...dataCard, [ev.target.name]: ev.target.value });
    ls.set('savedDataCard', { ...dataCard, [ev.target.name]: ev.target.value });
  };

  const handleReset = () => {
    setDataCard(defaultDataCard);
    ls.clear();
  };

  const handleCreateButton = (ev) => {
    ev.preventDefault();
    setCreateIsOpen(false);
    callToApi(dataCard).then((response) => setApiCard(response));
  };

  const handleImage = (imageData) => {
    setDataCard({ ...dataCard, photo: imageData });
    ls.set('savedDataCard', { ...dataCard, photo: imageData });
  };

  //Render helpers
  const renderCreateCard = () => {
    const isBtnDisabled = createIsOpen === false;
    return (
      <div
        className={`share__div js-share-big-box ${
          shareIsOpen ? 'collapsed' : ''
        }`}
      >
        <div
          className={`${
            isBtnDisabled ? 'createbutton-of' : 'createbutton-on'
          } js-create-button`}
        >
          <i className='fa-solid fa-address-card icon-id '></i>
          <button
            type='submit'
            name=''
            id=''
            className='inputSubmit'
            onClick={handleCreateButton}
            disabled={isBtnDisabled}
          >
            Crear tarjeta
          </button>
        </div>
        <div
          className={`shareresultbox js-share-result-box ${
            createIsOpen ? 'collapsed' : ''
          }`}
        >
          <hr className='lineRectangle' />
          <span className='shareresultbox__text'>
            La tarjeta ha sido creada:
          </span>
          <a
            href={apiCard.cardURL}
            className='shareresultbox__link js-share-url'
            target='_blank'
            rel='noreferrer'
          >
            {apiCard.cardURL}
          </a>
          <div className='shareresultbox__twitterbox'>
            <a
              href={`https://twitter.com/intent/tweet?text=¡Os%20comparto%20la%20mejor%20tarjeta%20del%20mundo!&url=${apiCard.cardURL}`}
              target='_blank'
              rel='noreferrer'
              className='shareresultbox__twitterbox--twitter js-link-twitter'
            >
              <i className='fa-brands fa-twitter tweet-icon'></i>
              <span className='sharetwitter-text'> Compartir en twitter</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  //Return html
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing imgHeader={imgHeader} />} />
        <Route
          path='/cards'
          element={
            <Card
              imgHeader={imgHeader}
              handleReset={handleReset}
              dataCard={dataCard}
              handleUpdateDataCard={handleUpdateDataCard}
              renderCreateCard={renderCreateCard}
              shareIsOpen={shareIsOpen}
              setShareIsOpen={setShareIsOpen}
              handleImage={handleImage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
