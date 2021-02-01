import { Request, Response } from 'express';
import express = require("express");

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Just a simple get')
});
app.get('/hello/', (req: Request, res: Response) => {
    res.send('Just a simple hello')
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
