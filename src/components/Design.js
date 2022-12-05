import PropTypes from 'prop-types';
import Palettes from './Palettes';
import '../styles/components/Design.scss';

function Design(props) {
  return (
    <fieldset className='design'>
      <div
        className='design__head js-design-head'
        id='design'
        onClick={props.handleOpenSection}
      >
        <div className='design__head__intro'>
          <i className='fa-regular fa-object-ungroup box--element design__head__intro__icon'></i>
          <legend className='design__head__intro__title'> Diseña</legend>
        </div>
        <i
          className={`fa-solid fa-angle-up design__head__arrow js-design-arrow-up ${
            props.designIsOpen ? 'collapsed' : ''
          }`}
        ></i>
        <i
          className={`fa-solid fa-angle-down design__head__arrow js-design-arrow-down ${
            props.designIsOpen ? '' : 'collapsed'
          }`}
        ></i>
      </div>
      <Palettes
        designIsOpen={props.designIsOpen}
        dataCard={props.dataCard}
        handleUpdateDataCard={props.handleUpdateDataCard}
      />
    </fieldset>
  );
}

Design.propTypes = {
  designIsOpen: PropTypes.bool.isRequired,
  handleOpenSection: PropTypes.func.isRequired,
};

export default Design;
