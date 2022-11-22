import { useState } from 'react';
import imgHeader from '../images/logo-awesome-profile-cards0.svg';
import imgFooter from '../images/logo-minionlab.png';

import '../styles/App.scss';


function App() {
    const [dataCard, setDataCard] = useState({
        palette: '1',
	    name: '',
	    job: '',
	    phone: '',
	    email: '',
	    linkedin: '',
	    github: '',
	    photo: '',
    });
    
    const handleInput = (ev) => {
        const inputValue = ev.target.value;
        const inputName = ev.target.name;
        setDataCard({ ...dataCard, [inputName]: inputValue });
    };

    // CREAR FUNCIÓN RESET y hablar lo de los ternarios. 


    // const renderCardName = () => {
    //     if (dataCard.name === '') {
    //         return "Minion Stuart";
    //     }
    //     else {
    //         return dataCard.name
    //     }
    //     // const userName = (dataCard.name !== '') ? dataCard.name : 'Minion Stuart';
    //     // dataCard.name = userName;

    //     console.log(dataCard.name);

    // }

    return (
        <>
            {/*--header*/}
            <header className="header__cards">
                <a href="index.html"><img className="header__cards--profile" src={imgHeader}
                    alt="logo profile-cards" /></a>
            </header>
            {/*--main*/}
            <main className="main__cards">
                {/*--preview*/}
                <section className="preview">
                    {/*--Secondary container for wrapping items*/}
                    <div className="preview__content">
                        {/*--Reset button*/}
                        <button className="reset js-reset-btn" type="reset">
                            <p>Reset</p>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                        {/*--Article*/}
                        <article className="article js-article palette-1">
                            {/*--Header with title & subtitle*/}
                            <div className="article__header">
                                <h1 className="article__header--title js-article-title">{(dataCard.name !== '') ? dataCard.name : 'Minion Stuart'}</h1>
                                <h2 className="article__header--subtitle js-article-subtitle">Despicable villain</h2>
                            </div>
                            {/*--Container for profile picture*/}
                            <div className="article__photo js-article-photo js__profile-image profile__image">
                            </div>
                            {/*--Navigation menu with icons*/}
                            <nav className="article__nav">
                                <ul className="article__nav--list">
                                    <li>
                                        <a className="article__nav--link js-article-link-phone" href="#"><i
                                            className="fa-solid fa-mobile-screen-button fa-md"></i></a>
                                    </li>
                                    <li>
                                        <a className="article__nav--link js-article-link-mail" href="#"><i
                                            className="fa-regular fa-envelope fa-md"></i></a>
                                    </li>
                                    <li>
                                        <a className="article__nav--link js-article-link-linkedin" href="#" target="_blank"><i
                                            className="fa-brands fa-linkedin-in fa-md"></i></a>
                                    </li>
                                    <li>
                                        <a className="article__nav--link js-article-link-github" href="#" target="_blank"><i
                                            className="fa-brands fa-github-alt fa-md"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </article>
                    </div>
                </section>
                {/*--form*/}
                <section className="main__cards--section">
                    <form className="js-form">
                        {/*--design*/}
                        <fieldset className="design">
                            <div className="design__head js-design-head">
                                <div className="design__head__intro">
                                    <i className="fa-regular fa-object-ungroup box--element design__head__intro__icon"></i>
                                    <legend className="design__head__intro__title"> Diseña
                                    </legend>
                                </div>
                                <i className="fa-solid fa-angle-up design__head__arrow js-design-arrow-up collapsed"></i>
                                <i className="fa-solid fa-angle-down design__head__arrow js-design-arrow-down"></i>
                            </div>

                            {/*--Disappears when the menu is toggled*/}
                            <div className="design__palette js-design-big-box">
                                <p className="design__palette__p"> Colores
                                </p>
                                <div className="design__palette__box design__palette__box--1">
                                    <input className="design__palette__box--selector js-palette-one" type="radio" value="1" name="palette"
                                        checked />
                                    <div className="design__palette__box--1left minibox"></div>
                                    <div className="design__palette__box--1middle minibox"></div>
                                    <div className="design__palette__box--1right minibox"></div>
                                </div>
                                <div className="design__palette__box design__palette__box--2">
                                    <input className="design__palette__box--selector js-palette-two" type="radio" value="2" name="palette" />
                                    <div className="design__palette__box--2left  minibox"></div>
                                    <div className="design__palette__box--2middle minibox"></div>
                                    <div className="design__palette__box--2right minibox"></div>
                                </div>
                                <div className="design__palette__box design__palette__box--3">
                                    <input className="design__palette__box--selector js-palette-three" type="radio" value="3" name="palette" />
                                    <div className="design__palette__box--3left minibox"></div>
                                    <div className="design__palette__box--3middle minibox"></div>
                                    <div className="design__palette__box--3right minibox"></div>
                                </div>
                            </div>
                        </fieldset>
                        {/*--fill*/}
                        <fieldset className="fill">
                            <div className="fill__head js-fill-head">
                                <div className="fill__head__intro">
                                    <i className="fa-solid fa-keyboard box--element fill__head__intro__icon"></i>
                                    <legend className="fill__head__intro__title"> Rellena
                                    </legend>
                                </div>
                                {/*--Disappears when the menu is toggled*/}
                                <i className="fa-solid fa-angle-up fill__head__arrow js-fill-arrow-up"></i>
                                <i className="fa-solid fa-angle-down fill__head__arrow js-fill-arrow-down collapsed"></i>
                            </div>

                            {/*--Disappears when the menu is toggled*/}
                            <div className="fill__div js-fill-big-box">
                                <label className="fill__div__label" htmlFor="name" id="name">Nombre completo</label>
                                <input className="fill__div__input js-input-name" type="text" name="name" id="name" onChange={handleInput} placeholder="Ej: Minion Stuart"
                                    required />
                                <label className="fill__div__label" htmlFor="job" id="job">Puesto </label>
                                <input className="fill__div__input js-input-job" type="text" name="job" id="job" onChange={handleInput} placeholder="Ej: Despicable villain"
                                    required />
                                <label className="fill__div__label" htmlFor="text">Imagen de perfil</label>
                                {/*--orange button*/}
                                <div className="fill__div__boxes">
                                    <label className="fill__div__boxes__orange" htmlFor="img-selector">Añadir imagen</label>
                                    <input type="file" name="photo" id="img-selector" className="action__hiddenField  js__profile-upload-btn"/>
                                    {/*--white box*/}
                                    <div className="fill__div__boxes__empty profile__preview js__profile-preview js-input-box">
                                    </div>
                                </div>

                                <label className="fill__div__label" htmlFor="email" id="email">Email</label>
                                <input className="fill__div__input js-input-email" type="email" name="email" id="email" onChange={handleInput}
                                    placeholder="Ej: minion-stuart@gmail.com" required />
                                <label className="fill__div__label" htmlFor="phone" id="phone">Teléfono</label>
                                <input className="fill__div__input js-input-phone" type="tel" name="phone" id="phone" onChange={handleInput}
                                    placeholder="Ej: 555-55-55-55" />
                                <label className="fill__div__label" htmlFor="linkedin" id="linkedin">LinkedIn</label>
                                <input className="fill__div__input js-input-linkedin" type="url" name="linkedin" id="linkedin" onChange={handleInput}
                                    placeholder="Ej: minion.stuart" required />
                                <label className="fill__div__label" htmlFor="github" id="github" >GitHub</label>
                                <input className="fill__div__input js-input-github" type="url" name="github" id="github" onChange={handleInput} placeholder="Ej: minionstuart"
                                    required />
                            </div>
                        </fieldset>
                        {/*--share*/}
                        <fieldset className="share">
                            {/*--Review button -submit*/}
                            <div className="share__head js-share-head">
                                <span className="share__head__intro">
                                    <i className="fa-solid fa-share-nodes icon-sharebox--element share__head__intro__icon"></i>
                                    <legend className="share__head__intro__title">Comparte
                                    </legend>
                                </span>
                                <i className="fa-solid fa-angle-up share__head__arrow js-share-arrow-up"></i>
                                <i className="fa-solid fa-angle-down share__head__arrow js-share-arrow-down collapsed"></i>
                            </div>

                            {/*--Change it to a button. This way it would validate the form. it does not need a submit input*/}
                            <div className="share__div js-share-big-box collapsed">
                                <div className="createbutton-on js-create-button">
                                    <i className="fa-solid fa-address-card icon-id "></i>
                                    <input type="submit" name="" id="" value=" Crear tarjeta" className="inputSubmit" />

                                </div>
                                {/*--Change it to a button*/}

                                <div className="shareresultbox collapsed js-share-result-box">
                                    <hr className="lineRectangle" />
                                    <span className="shareresultbox__text">La tarjeta ha sido creada:</span>
                                    <a href="#" className="shareresultbox__link js-share-url" target="_blank"></a>
                                    <div className="shareresultbox__twitterbox">
                                        {/*--Reloads the pge because it is an empty link. it may be a button with inden with it, but it depends on the library. TO BE FOUND ON THE INTERNET. "How to share something Twitter"*/}
                                        <a href="#" target="_blank" className="shareresultbox__twitterbox--twitter js-link-twitter">
                                            <i className="fa-brands fa-twitter tweet-icon"></i>
                                            <span className="sharetwitter-text"> Compartir en twitter</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </fieldset>
                    </form>
                </section>
            </main>
            {/*--footer*/}
            <footer className="footer">
                <p className="copy">Awesome profile-cards @2022</p>
                <img className="logo" src={imgFooter} alt="logo Adalab" />
            </footer>
        </>
    );
}

export default App;
