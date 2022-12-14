import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('pessoas_fisicas', [
            {
                "idpessoa": 1,
                "nome": "Erik Borges",
                "cpf": "14380120040"
            },
            {
                "idpessoa": 2,
                "nome": "Erik Borges",
                "cpf": "12345678900"
            },
            {
                "idpessoa": 4,
                "nome": "Jhon Conor",
                "cpf": "11122233344"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('pessoas_fisicas', {});
    }
};