import 'dotenv/config'
import express from "express"
import connectDB from "./databse/db.js"
import userRouter from "./routes/userRoute.js"
import dns from "dns";
const app = express();

//change dns 
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT  || 3000;
app.use(express.json())


app.use('/user', userRouter)

// https://localhost:8000/user/register

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});