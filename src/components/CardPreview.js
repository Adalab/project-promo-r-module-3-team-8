import PropTypes from 'prop-types';
import Reset from './Reset';
import '../styles/components/CardPreview.scss';

function CardPreview(props) {
  const selectedPhoto =
    props.dataCard.photo !== '' ? props.dataCard.photo : props.defaultImage;

  return (
    <section className='preview'>
      <div className='preview__content'>
        <Reset handleReset={props.handleReset} />
        <article
          className={`article js-article palette-${
            props.dataCard.palette !== '' ? props.dataCard.palette : '1'
          }`}
        >
          <div className='article__header'>
            <h1 className='article__header--title js-article-title'>
              {props.dataCard.name !== ''
                ? props.dataCard.name
                : 'Minion Stuart'}
            </h1>
            <h2 className='article__header--subtitle js-article-subtitle'>
              {props.dataCard.job !== ''
                ? props.dataCard.job
                : 'Despicable villain'}
            </h2>
          </div>
          <div
            className='article__photo js-article-photo js__profile-image profile__image'
            style={{ backgroundImage: `url(${selectedPhoto})` }}
          ></div>
          <nav className='article__nav'>
            <ul className='article__nav--list'>
              <li>
                <a
                  className='article__nav--link js-article-link-phone'
                  href={`tel: ${props.dataCard.phone}`}
                >
                  <i className='fa-solid fa-mobile-screen-button fa-md'></i>
                </a>
              </li>
              <li>
                <a
                  className='article__nav--link js-article-link-mail'
                  href={`mailto: ${props.dataCard.email}`}
                >
                  <i className='fa-regular fa-envelope fa-md'></i>
                </a>
              </li>
              <li>
                <a
                  className='article__nav--link js-article-link-linkedin'
                  href={`https://www.linkedin.com/in/${props.dataCard.linkedin}/`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in fa-md'></i>
                </a>
              </li>
              <li>
                <a
                  className='article__nav--link js-article-link-github'
                  href={`https://github.com/${props.dataCard.github}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-github-alt fa-md'></i>
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </section>
  );
}

CardPreview.propTypes = {
  defaultImage: PropTypes.string,
};

export default CardPreview;
