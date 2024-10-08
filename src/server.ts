import http from 'http';
import express from 'express';

import logger from './config/logger';
import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { SERVER } from './config/config';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
    logger.info('---app init---');
    application.use(express.json());
    application.use(express.urlencoded({ extended: true }));

    application.use(loggingHandler);
    application.use(corsHandler);

    application.get('/main/healthcheck', (req, res, next) => {
        res.status(200).json({ ofcourse: 'istillloveyou' });
    });

    application.use(routeNotFound);

    httpServer = http.createServer(application);
    httpServer.listen(SERVER.SERVER_PORT, () => {
        logger.info(`Server started at ${SERVER.SERVER_HOSTNAME}:${SERVER.SERVER_PORT}`);
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
