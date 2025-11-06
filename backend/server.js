import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products', productRoutes);

    if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
    });
    } else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
    }

    app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port: ${PORT}`);
});
