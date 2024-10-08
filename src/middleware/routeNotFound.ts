import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
    const error = new Error(`Route not found: ${req.method} ${req.path}`);

    logger.error(error.message);

    res.status(404).json({ error: error.message });

    return;
}
