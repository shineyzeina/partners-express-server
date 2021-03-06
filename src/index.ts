import express from 'express';
import { PORT } from './config/constants';
import {  partnerRouter } from './routes';
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/partners', partnerRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); 