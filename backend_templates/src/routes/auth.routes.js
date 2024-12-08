import express from 'express'
import { createUser, LoginUser } from '../controllers/auth.controller.js';

const authRoutes = express.Router()
authRoutes.post('/signup', createUser);
authRoutes.get('/signIn', LoginUser);

export default authRoutes;