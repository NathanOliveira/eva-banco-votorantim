let service = require("../../services");

module.exports = {
    getUsers: async (request, response) => {
        let retorno = service.transactionalService.getUsers(request);
        return response.status(200).send(retorno);
    }
};