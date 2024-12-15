import authRoutes from "./auth.routes.js";
import uploadRoute from "./general.routes.js";
import productRoutes from "./product.routes.js"

const routes = (app)=> {

    //product routes
    app.use('/api', productRoutes);

    //auth Routes
    app.use('/api', authRoutes)

    //general route 
    app.use('/api', uploadRoute)
}

export default routes;