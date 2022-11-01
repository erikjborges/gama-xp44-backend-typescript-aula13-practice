import mongoose from 'mongoose';
import { ITransactionEntity } from "../../../../domain/entities/transactions/transaction.entity";
import { AccountEntity } from "../../../../domain/entities/accounts/account.entity";
import { TransactionStatus } from '../../../../domain/entities/transactions/transactionstatus.entity';
import { TransactionType } from '../../../../domain/entities/transactions/transactiontype.entity';

export default mongoose.model(
    'transacoes',
    new mongoose.Schema({
        date: Date,
        value: `number`,
        accountSourceId: `number`,
        status: `string`,
        accountSource: Object,
        type: `string`,
        targetSource: Object,
        envelop: `number`
    })
);