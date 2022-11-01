import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('pessoas', [
            {
                "idpessoa": 1,
                "cep": "35535000",
                "limiteCredito": 1000,
                "observacoes": "Bom pagador :)",
                "email": "pessoa1@bancoborges.com",
                "senha": "",
            },
            {
                "idpessoa": 2,
                "cep": "35530000",
                "limiteCredito": 1000,
                "observacoes": "Bom pagador",
                "email": "pessoa2@bancoborges.com",
                "senha": "",
            },
            {
                "idpessoa": 3,
                "cep": "32676265",
                "limiteCredito": 0,
                "observacoes": null,
                "email": "pessoa3@bancoborges.com",
                "senha": "",
            },
            {
                "idpessoa": 4,
                "cep": "1001000",
                "limiteCredito": 100,
                "observacoes": "Mal pagador",
                "email": "pessoa4@bancoborges.com",
                "senha": "",
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('pessoas', {});
    }
};