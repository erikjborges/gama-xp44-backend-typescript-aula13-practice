import { CommonRoutesConfig } from "./common.routes.config";
import AccountsController from "../controllers/accounts.controller";
import AccountsMiddleware from "../middlewares/accounts.middleware";
import express from "express";
import transactionsController from "../controllers/transactions.controller";

export class TransactionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TransactionsRoutes');
    }

    configureRoutes(): express.Application {
            this.app.route(`/accounts/:accountId/transactions`)
                        .get(
                            // AccountsMiddleware.validateAccountExists,
                            transactionsController.listTransactions
                            );

        return this.app;
    }
}