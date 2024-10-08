import express from "express"
import dotenv from "dotenv"
import { connect } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import path from "path";
import cors from "cors"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true}));

app.use(express.static(path.join(__dirname, '/backend/public')));

app.use('/api/auth', authRoutes);


app.listen(PORT, ()=> {
    connect();
    console.log('Server is running on port: ', PORT);
})