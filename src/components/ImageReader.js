// Fichero src/components/ImageReader.js
import { useRef } from 'react';
/*
El orden cronológico en el que se ejecuta este componente es:
1. Se renderiza todo la primera vez
  - Se crea la referencia inputFile
  - Se crea el lector de ficheros fileReader
  - Se pinta el input file con el return del final
2. Cuando la usuaria hace click y selecciona una imagen:
  - Se ejecuta la función handleFile que es una funcion de tipo Change
    * Esta función recoge del array de files del input el primer elemento, que es la primera imagen seleccionada por la usuaria.
    * En caso de estar llena y no dar undefined rellena los estados de tipo y tamaño con los datos de esta imagen.
    * Ejecuta fileReader.readAsDataURL(selectedFile) de la imagen seleccionada
    * La función readAsDataURL lee el contenido de la imagen
    * La función readAsDataURL es asíncrona. Cuando termine lanzará un evento 'load'.
3. Pasados unos milisegundos, cuando se lance el evento 'load':
  - Se escuchará y se ejecutará la función getImage
  - Esta función subirá los datos de la imagen por lifting a APP.js que tratará la imagen con su función handleImage
*/

const ImageReader = (props) => {
  const miniSelectedPhoto =
    props.dataCard.photo !== undefined
      ? props.dataCard.photo
      : props.defaultImage;
  // 1. CREAR REFERENCIA AL INPUT FILE: para saber sobre que input estamos haciendo click. Creamos una referencia al input file de nuestro componente Fill para poder leer su contenido más tarde
  const inputFile = useRef();

  // 2. CREAR UN LECTOR DE FICHEROS:
  // FileReader es una funcionalidad nativa de JavaScript, búscala en Internet si te atreves
  const fileReader = new FileReader();

  // 3. CREAR FUNCIÓN HANDLECLICK:
  // Cuando la usuaria selecciona una imagen se ejecuta esta función
  const handleFile = () => {
    // inputFile.current es literalmente el input file, hace un query selector sobre él
    // Sacamos su propiedad files que es un array con todas las imágenes seleccionadas por la usuaria
    // Como solo queremos la primera imagen seleccionada guardamos el primer elemento de files dentro de "selectedFile"
    const selectedFile = inputFile.current.files[0];

    // Si la usuaria ha seleccionado al menos una imagen, y selectedFile es diferente de undefined, es decir, que es true, entonces le pido que en las variables estado declaradas arriba me guarde las propiedades tipo y tamaño de la imagen
    if (selectedFile) {
      // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
      fileReader.readAsDataURL(selectedFile);
      // Cuando esta acción termine, fileReader lanzará el evento 'load' y guardará lo que haya leido del archivo que le pasemos en "filereader.result"
    }
  };

  // 4. CREAR FUNCIÓN TRAS LOAD: Esta función se ejecuta cuando fileReader lanza el evento 'load'
  const getImage = () => {
    // Cuando la imagen ya esté lista en fileReader.result y la haya leido tendremos su contenido guardado en esa propiedad
    // Para poder usar esa imagen lo que hacemos es hacer lifting de este contenido hacia arriba y pasarselo a una funcion en APP.js
    props.handleImage(fileReader.result);
  };

  // 5. ESCUCHAR EL EVENTO LOAD SOBRE EL FILEREADER GENERADO: Escuchamos el evento load del fileReader que ha leido el fichero de la usuaria y cuando lo lance lo manejamos con la función getImage
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
      {/*--white box*/}
      <div
        className='fill__div__boxes__empty profile__preview js__profile-preview js-input-box'
        style={{ backgroundImage: `url(${miniSelectedPhoto})` }}
      ></div>
    </div>
  );
};

export default ImageReader;
