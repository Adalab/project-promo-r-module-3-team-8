import { useState } from 'react';
import PropTypes from 'prop-types';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Form(props) {
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
    <section className='main__cards--section'>
      <form className='js-form'>
        <Design
          dataCard={props.dataCard}
          handleUpdateDataCard={props.handleUpdateDataCard}
          designIsOpen={designIsOpen}
          handleOpenSection={handleOpenSection}
        />
        <Fill
          dataCard={props.dataCard}
          handleUpdateDataCard={props.handleUpdateDataCard}
          fillIsOpen={fillIsOpen}
          handleOpenSection={handleOpenSection}
          handleImage={props.handleImage}
          defaultImage={props.defaultImage}
        />
        <Share
          shareIsOpen={props.shareIsOpen}
          setShareIsOpen={props.setShareIsOpen}
          handleOpenSection={handleOpenSection}
          renderCreateCard={props.renderCreateCard}
        />
      </form>
    </section>
  );
}

Form.propTypes = {
  defaultImage: PropTypes.string,
};

export default Form;
