import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger.js';

export function loggingHandler(req: Request, res: Response, next: NextFunction) {
    logger.info(`${req.method} ${req.path} ${req.socket.remoteAddress}`);

    res.on('finish', () => {
        logger.info(`${req.method} ${req.path} ${req.socket.remoteAddress} ${res.statusCode}`);
    });

    next();
}
