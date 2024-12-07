import express from 'express'

const authRoutes = express.Router()
authRoutes.post('/signup', authRoutes);

export default authRoutes;