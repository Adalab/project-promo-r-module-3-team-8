const callToApi = (data) => {
  // Llamamos a la API

  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
      //importante retornar siempre el fetch
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
};

export default callToApi;
