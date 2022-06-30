const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/products', router);
app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});

const products = [
  {
    ProductId: 1,
    Name: 'Kitkat',
    Cost: 10,
  },

  {
    ProductId: 2,
    Name: 'Dairy Milk',
    Cost: 40,
  },
];

router.get('/', (req, res) => {
  res.json(products);
});

//get based on Product id
router.get('/:Id', (req, res) => {
  const Id = parseInt(req.params.Id);
  const currentProduct = products.filter((x) => x.ProductId === Id)[0];
  if (currentProduct) {
    res.json(currentProduct);
  } else {
    res.sendStatus(404);
  }
});

//Validate Product
validateProduct = (product) => {
  const message = '';
  if (Product.ProductId) {
    message = 'Product Id not found';
  }

  if (Product.Name) {
    message = 'Name not found';
  }

  if (Product.Cost) {
    message = 'Cost not found';
  }
  return message;
};

//Create Product
router.post('/', (req, res) => {
  const priduct = req.body;
  const isValid = validateProduct(product);
  if (isValid === '') {
    products.push(product);
    console.log(products);
    res.status(201).send(products);
  } else {
    res.statusMessage === isValid;
    res.sendStatus(404);
  }
});

//Update Product
router.put('/:Id', (req, res) => {
  const ProductId = req.params.Id;
  const product = req.body;
  const currentProduct = products.filter((x) => x.ProductId === ProductId)[0];

  if (currentProduct) {
    const isValid = validateProduct(product);
    if (isValid == '') {
      currentProduct.Name = product.Name;
      currentProduct.Cost = product.Cost;
      res.status(200).send(products);
    }
  } else {
    res.statusMessage = 'Product does not exist.';
    res.sendStatus(404);
  }
});

//Delete api
router.delete('/:Id', (req, res) => {
  const ProductId = req.params.Id;
  const currentProduct = products.filter((x) => x.ProductId === ProductId);
  if (currentProduct) {
    products = products.filter((x) => x.ProductID !== ProductId);
    res.statusMessage = 'Product deleted successfully';
    res.sendStatus(200);
  } else {
    res.statusMessage = 'Product does not exist';
    res.sendStatus(404);
  }
});
