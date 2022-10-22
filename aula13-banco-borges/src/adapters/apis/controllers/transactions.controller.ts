import express from 'express';
import createAccountUsecase from '../../../domain/usecases/accounts/create.account.usecase';
import readAccountUsecase from '../../../domain/usecases/accounts/read.account.usecase';
import updateAccountUsecase from '../../../domain/usecases/accounts/update.account.usecase';
import deleteAccountUsecase from '../../../domain/usecases/accounts/delete.account.usecase';
import listAccountUsecase from '../../../domain/usecases/accounts/list.account.usecase';
import depositAccountUsecase from '../../../domain/usecases/accounts/deposit.account.usecase';
import withdrawAccountUsecase from '../../../domain/usecases/accounts/withdraw.account.usecase';
import transferAccountUsecase from '../../../domain/usecases/accounts/transfer.account.usecase';
import debug from 'debug';
import listTransactionsUsecase from '../../../domain/usecases/transactions/list.transactions.usecase';

const log: debug.IDebugger = debug('app:transactions-controller');

class TransactionsController { 
    async listTransactions(req: express.Request, res: express.Response){
        const transactions = await listTransactionsUsecase.execute(req.params.accountId);
        res.status(200).send(transactions);
    }
}

export default new TransactionsController();