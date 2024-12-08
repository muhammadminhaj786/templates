import authRoutes from "./auth.routes.js";
import productRoutes from "./product.routes.js"

const routes = (app)=> {

    //product routes
    app.use('/api', productRoutes);

    //auth Routes
    app.use('/api', authRoutes)
}

export default routes;