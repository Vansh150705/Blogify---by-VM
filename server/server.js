import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './configs/db.js';
import logger from './middleware/logger.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(logger)

// Routes
app.get('/', (req, res)=> res.send("API is Working"))

// Health check for uptime monitors and deploy verification
app.get('/health', (req, res)=>{
    const dbConnected = mongoose.connection.readyState === 1;
    res.json({
        success: true,
        status: 'ok',
        database: dbConnected ? 'connected' : 'disconnected',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    })
})

app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

// 404 handler for unmatched routes
app.use((req, res)=>{
    res.status(404).json({success: false, message: `Route ${req.originalUrl} not found`})
})

// Centralized error handler
app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(err.status || 500).json({success: false, message: err.message || 'Internal server error'})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;