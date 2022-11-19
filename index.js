import 'dotenv/config';
import express from 'express'; 
import cors from 'cors';
import mongoConnection from './DB/mongoConnection.js'

mongoConnection();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) =>
  res.status(200).json({ hello: "What do you know about eco-friendly app?" })
);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})