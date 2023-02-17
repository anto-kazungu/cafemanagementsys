require('dotenv').config();
import { createServer } from 'http';
import app from '.index';

const server = createServer(app);
server.listen(process.env.PORT)

