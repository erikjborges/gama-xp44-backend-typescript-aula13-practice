import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";
import { ITransactionsRepository } from "../../repositories/transactions.repository.interface";
import { TransactionType } from "../../entities/transactions/transactiontype.entity";
import transactionsRepository from "../../../adapters/repositories/transactions.repository";
import { ITransactionEntity } from "../../entities/transactions/transaction.entity";

class ListTransactionsUseCase implements IUseCase {

    constructor(private _repository: ITransactionsRepository) {

    }

    async execute(accountId: string): Promise<ITransactionEntity[] | undefined> {
        return await this._repository.list(accountId);
    }
}

export default new ListTransactionsUseCase(
    transactionsRepository
);