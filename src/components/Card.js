import { useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

const Card = (props) => {
  const [designIsOpen, setDesignIsOpen] = useState(false);
  const [fillIsOpen, setFillIsOpen] = useState(true);

  const handleOpenSection = (ev) => {
    const clickedEl = ev.currentTarget.id;
    if (clickedEl === 'design') {
      setDesignIsOpen(false);
      setFillIsOpen(true);
      props.setShareIsOpen(true);
    }
    if (clickedEl === 'fill') {
      setDesignIsOpen(true);
      setFillIsOpen(false);
      props.setShareIsOpen(true);
    }
    if (clickedEl === 'share') {
      setDesignIsOpen(true);
      setFillIsOpen(true);
      props.setShareIsOpen(false);
    }
  };

  return (
    <>
      {/*--header*/}
      <Header imgHeader={props.imgHeader} />
      {/*--main*/}
      <main className='main__cards'>
        {/*--preview*/}
        <CardPreview
          handleReset={props.handleReset}
          dataCard={props.dataCard}
        />
        {/*--form*/}
        <section className='main__cards--section'>
          <form className='js-form'>
            {/*--design*/}
            <Design
              dataCard={props.dataCard}
              handleUpdateDataCard={props.handleUpdateDataCard}
              designIsOpen={designIsOpen}
              handleOpenSection={handleOpenSection}
            />
            {/*--fill*/}
            <Fill
              dataCard={props.dataCard}
              handleUpdateDataCard={props.handleUpdateDataCard}
              fillIsOpen={fillIsOpen}
              handleOpenSection={handleOpenSection}
              handleImage={props.handleImage}
            />
            {/*--share*/}
            <Share
              shareIsOpen={props.shareIsOpen}
              handleOpenSection={handleOpenSection}
              renderCreateCard={props.renderCreateCard}
            />
          </form>
        </section>
      </main>
      {/*--footer*/}
      <Footer />
    </>
  );
};

export default Card;
