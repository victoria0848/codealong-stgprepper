import { HomePage } from './controllers/homeController.js'; 
import { LoginPage } from './controllers/loginController.js';
import { ProductPage } from './controllers/productController.js';
import { CartPage } from './controllers/cartController.js';
import { router } from './router/index.js';

router({
  '/': () => ProductPage(), // Forside
  '/login': () => LoginPage(), // Login
  '/cart': () => CartPage(), //Cart
}, '#app');