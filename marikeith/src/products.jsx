import product1 from './assets/products/1.JPG';
import product2 from './assets/products/2.JPG';
import product3 from './assets/products/3.JPG';
import product4 from './assets/products/4.JPG';
import product5 from './assets/products/5.JPG';
import product6 from './assets/products/6.JPG';
import product7 from './assets/products/7.JPG';
import product8 from './assets/products/8.JPG';
import product9 from './assets/products/9.JPG';
import product10 from './assets/products/10.JPG';
import product11 from './assets/products/11.JPG';
import product12 from './assets/products/12.JPG';


export const PRODUCTS = [
  {
    id: 1,
    productName: "CAROLINA HERRERA GOOD GIRL",
    price: 6499,
    productImage: product1,
    category: "perfume",
  },
  {
    id: 2,
    productName: "DOLCE & GABBANA LIGHT BLUE",
    price: 4350,
    productImage: product2,
    category: "perfume",
  },
  {
    id: 3,
    productName: "BVLGARI OMNIA AMETHYSTE",
    price: 6499.0,
    productImage: product3,
    category: "perfume",
  },
  {
    id: 4,
    productName: "JEAN PAUL GAULTIER LE MALE",
    price: 4100,
    productImage: product4,
    category: "perfume",
  },
  {
    id: 5,
    productName: "CAROLINA HERRERA VERY GOOD GIRL",
    price: 6499,
    productImage: product5,
    category: "perfume",
  },
  {
    id: 6,
    productName: "JEAN PAUL GAULTIER LA BELLE",
    price: 5799,
    productImage: product6,
    category: "perfume",
  },
  {
    id: 7,
    productName: "KATE SPADE STACI TOTE AND WRISTLET 3 PIECE SET (BLACK)",
    price: 8000,
    productImage: product7,
    category: "bag",
  },
  {
    id: 8,
    productName: "KATE SPADE CAREY MEDIUM FLAP SHOULDER BAG",
    price: 9000,
    productImage: product8,
    category: "bag",
  },
  {
    id: 9,
    productName: "KATE SPADE MADISON FLORAL WALTZ MEDIUM SATCHEL",
    price: 8500,
    productImage: product9,
    category: "bag",
  },
  {
    id: 10,
    productName: "KATE SPADE DAMA SWEET FLORA TOTE",
    price: 6500,
    productImage: product10,
    category: "bag",
  },
  {
    id: 11,
    productName: "KATE SPADE CAREY TOTE",
    price: 10500,
    productImage: product11,
    category: "bag",
  },
  {
    id: 12,
    productName: "KATE SPADE STACI TOTE AND WRISTLET 3 PIECE SET (BROWN)",
    price: 8000,
    productImage: product12,
    category: "bag",
  },
];

export const BAGS = PRODUCTS.filter(product => product.category === "bag");
export const PERFUMES = PRODUCTS.filter(product => product.category === "perfume");