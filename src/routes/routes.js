import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers';

export const routes = (app) => {
    app.route('/products');
    app.get(getProducts);
    app.route('/products/:ProductID');
    app.get(getProductWithID);
    app.delete(deleteProduct);
}

routes.post(addnewProduct);
routes.put(updateProduct);