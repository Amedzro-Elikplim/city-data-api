import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cityRouter from "./src/routes/cities.router";

import "./db"
const app = express();


//set up dotenv
dotenv.config();

//set up cors
app.use(cors());


//set up helmet
app.use(helmet());

//set up body parser
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 10000}));

 
const PORT = process.env.PORT || 3000;
const version = process.env.VERSION;



app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


//routes
app.use(`/api/${version}/cities`, cityRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World");
// });


app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

