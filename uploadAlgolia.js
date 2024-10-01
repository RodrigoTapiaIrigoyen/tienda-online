const algoliasearch = require('algoliasearch');

// Conectar a Algolia
const client = algoliasearch('YourApplicationID', 'YourAdminAPIKey');

// Seleccionar el índice
const index = client.initIndex('STAGING_pwa_ecom_ui_template_products');

// Subir datos
const products = [
  { objectID: 1, name: 'Product 1', description: 'A great product' },
  { objectID: 2, name: 'Product 2', description: 'Another great product' },
  // Más productos...
];

// Guardar objetos en el índice
index.saveObjects(products, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.error(err);
  });
