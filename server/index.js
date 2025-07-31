import express from 'express';
import router from './routes/route.js';
import Connection from './database/db.js';
import cors from 'cors';

const app = express();
const allowedOrigins = 'https://quest-lhm9.onrender.com';
//const allowedOrigins = 'http://localhost:3000';
// app.use(cors());
app.use(cors({
  origin: allowedOrigins,
  credentials: true // if you use cookies or auth headers
}));
Connection();
app.use(express.json())
app.use('/', router);


const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server is running at PORT ${PORT}`));