// How can you design an A/B testing module using Redis that efficiently distributes three layouts (namely layout1, layout2, and layout3)
// equally among users? The solution should cater to guest users for whom we don't have any pre-existing identifiers.
// The goal is to implement an API that serves these layouts uniformly.

import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { identifyMiddleware } from "./app/middleware/identify";
import { layoutController } from "./app/controllers/layout";
import { identifyController } from "./app/controllers/identify";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.get('/identify', identifyController)
app.get('/layout', identifyMiddleware, layoutController)

app.listen(3000, () => console.log("listening on 3000"));
