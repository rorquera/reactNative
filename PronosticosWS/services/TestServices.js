export const crearPronosticoService = (pronostico) => {
  const configuracion = {
    method: 'POST',
    body: JSON.stringify(pronostico),
    headers: {
      'Content-type': 'application/json',
    },
  };

  fetch(
    'http://192.168.1.19:8080/pronosticos/rest/pronostico/crear',
    configuracion
  )
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
    });
};
