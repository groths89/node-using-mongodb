import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers';

export const routes = (app) => {
    app.route('/products');
    app.get(getProducts);
    app.route('/products/:ProductID');
    app.get(getProductWithID);
}

routes.post(addnewProduct);