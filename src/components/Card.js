import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import CardPreview from './CardPreview';
import defaultImage from '../images/b8766cd53b5e1529712ed7e49365b7d4.jpg';
import Form from './Form';

const Card = (props) => {
  return (
    <>
      <Header imgHeader={props.imgHeader} />
      <main className='main__cards'>
        <CardPreview
          handleReset={props.handleReset}
          dataCard={props.dataCard}
          defaultImage={defaultImage}
        />
        <Form
          dataCard={props.dataCard}
          handleUpdateDataCard={props.handleUpdateDataCard}
          handleImage={props.handleImage}
          defaultImage={defaultImage}
          shareIsOpen={props.shareIsOpen}
          setShareIsOpen={props.setShareIsOpen}
          renderCreateCard={props.renderCreateCard}
        />
      </main>
      <Footer />
    </>
  );
};

Card.propTypes = {
  imgHeader: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  dataCard: PropTypes.object.isRequired,
  handleUpdateDataCard: PropTypes.func.isRequired,
  renderCreateCard: PropTypes.func.isRequired,
  shareIsOpen: PropTypes.bool.isRequired,
  setShareIsOpen: PropTypes.func.isRequired,
  handleImage: PropTypes.func.isRequired,
};

export default Card;
