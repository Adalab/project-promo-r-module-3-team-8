import { useRef } from 'react';

const ImageReader = (props) => {
  const miniSelectedPhoto =
    props.dataCard.photo !== '' ? props.dataCard.photo : props.defaultImage;

  const inputFile = useRef();

  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = inputFile.current.files[0];
    if (selectedFile) {
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const getImage = () => {
    props.handleImage(fileReader.result);
  };

  fileReader.addEventListener('load', getImage);

  return (
    <div className='fill__div__boxes'>
      <label className='fill__div__boxes__orange' htmlFor='img-selector'>
        Añadir imagen
      </label>
      <input
        type='file'
        name='photo'
        id='img-selector'
        className='action__hiddenField  js__profile-upload-btn'
        ref={inputFile}
        onChange={handleFile}
      />
      <div
        className='fill__div__boxes__empty profile__preview js__profile-preview js-input-box'
        style={{ backgroundImage: `url(${miniSelectedPhoto})` }}
      ></div>
    </div>
  );
};

export default ImageReader;
