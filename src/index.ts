import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import tutorialRouter from './routers/tutorial.router'

const PORT = 3000;
const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/tutorial', tutorialRouter)
app.listen(PORT, () => {
  console.log("App running with port: " + PORT);
});