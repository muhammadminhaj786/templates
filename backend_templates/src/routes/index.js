import productRoutes from "./product.routes.js"

const routes = (app)=> {

    //product routes
    app.use('/api', productRoutes);
}

export default routes;