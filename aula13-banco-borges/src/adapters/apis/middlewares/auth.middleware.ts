import express from 'express';
import readClientUsecase from '../../../domain/usecases/clients/read.client.usecase';
import debug from 'debug';
import multer from 'multer';
import path from "path";
import xlsxFiles from '../../../infrastructure/files/xlsx.files';
import logger from '../../../infrastructure/logs/winston.logs';
import cpfvalidationHelpersAdapters from '../../helpers/cpfvalidation.helpers.adapters';
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:clients-middleware');

class AuthMiddleware {
    async checkAuth(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const token = req.header('Authorization')?.replace('Bearer ', '');

            if (!token) {
                res.status(401).send({
                    error: 'Please authenticate'
                });
            } else {
                const decoded =  jwt.verify(token, String(process.env.SECRET_KEY));
                console.log(decoded);
                next();
            }
        } catch(err) {
            res.status(401).send({
                error: 'Please authenticate'
            });
        }
    }
}

export default new AuthMiddleware();