const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();

import { swaggerDocument } from '../swagger';

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3333);
