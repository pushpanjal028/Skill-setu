import 'dotenv/config'
import express from "express"
import connectDB from "./databse/db.js"
import userRouter from "./routes/userRoute.js"
import dns from "dns";
import cors from "cors";

const app = express();

//change dns 
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT  || 3000;
app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/user', userRouter)

// https://localhost:8000/user/register

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});