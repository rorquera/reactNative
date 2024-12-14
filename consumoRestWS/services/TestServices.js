export const getAllPostService = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta) => respuesta.json())
    .then((json) => console.log(json));
};

export const createPostService = ({ title, body }, fnExito) => {
  const configuracion = {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };

  fetch('https://jsonplaceholder.typicode.com/posts', configuracion)
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      console.log(json);
      fnExito();
    });
};

export const updatePostService = () => {
  const configuracion = {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'mensaje final',
      body: 'hasta la vista baby',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };

  fetch('https://jsonplaceholder.typicode.com/posts/1', configuracion)
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const getByUserIdService = (id = 1) => {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then((respuesta) => respuesta.json())
    .then((json) => console.log(json));
};

export const getRandomJokesService = () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((resp) => resp.json())
    .then((json) => console.log(json));
};

export const updateProductServie = async () => {
  const producto = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };
  const config = {
    method: 'PUT',
    body: JSON.stringify(producto),
    headers: {
      'Content-type': 'application/json',
    },
  };
  const resp = await fetch('https://fakestoreapi.com/products/7', config);
  const json = await resp.json();
  console.log(json);
};

export const addCartsService = () => {
  const configuracion = {
    method: 'POST',
    body: JSON.stringify({
      userId: 5,
      date: '2020-02-03',
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };

  fetch('https://fakestoreapi.com/carts', configuracion)
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const getDocumentTypesService = () => {
  fetch(
    'http://192.168.1.19:8080/inventarios-1.0.0/rest/inventarios/tiposdocumentos'
  )
    .then((resp) => resp.json())
    .then((json) => console.log(json));
};

export const createDocumentService = ({ codigo, descripcion }) => {
  const configuracion = {
    method: 'POST',
    body: JSON.stringify({
      codigo,
      descripcion,
    }),
    headers: { 'Content-type': 'application/json' },
  };

  fetch(
    'http://192.168.1.19:8080/inventarios-1.0.0/rest/documentos/crear',
    configuracion
  )
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      console.log(json);
    });
};
