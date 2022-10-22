import { ITransactionEntity } from "../../entities/transactions/transaction.entity";
import { ITransactionsRepository } from "../../repositories/transactions.repository.interface";
import { IUseCase } from "../usecase.interface";
import transactionsRepository from "../../../adapters/repositories/transactions.repository";

class CreateTransactionUseCase implements IUseCase {

    constructor(private _repository: ITransactionsRepository) {

    }

    async execute(data: ITransactionEntity): Promise<ITransactionEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateTransactionUseCase(
    transactionsRepository
);